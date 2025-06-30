
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Bot, Send, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  trigger?: React.ReactNode;
  className?: string;
}

const Chatbot = ({ trigger, className = "" }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant for home loans in Chennai. How can I help you today?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: {
            past_user_inputs: messages.filter(m => m.isUser).slice(-5).map(m => m.text),
            generated_responses: messages.filter(m => !m.isUser).slice(-5).map(m => m.text),
            text: userMessage
          },
          parameters: {
            max_length: 150,
            temperature: 0.8,
            do_sample: true,
            top_p: 0.9,
            repetition_penalty: 1.1
          },
          options: {
            wait_for_model: true,
            use_cache: false
          }
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error(`API Error: ${response.status}`);
      }

      const result = await response.json();
      console.log('API Response:', result);
      
      // Handle different response formats from Hugging Face
      if (result.generated_text) {
        return result.generated_text.replace(userMessage, '').trim();
      } else if (Array.isArray(result) && result.length > 0 && result[0].generated_text) {
        return result[0].generated_text.replace(userMessage, '').trim();
      } else if (result.length > 0 && typeof result[0] === 'string') {
        return result[0];
      } else {
        // Context-aware fallback responses for home loan queries
        const lowerMessage = userMessage.toLowerCase();
        
        if (lowerMessage.includes('loan') || lowerMessage.includes('home') || lowerMessage.includes('mortgage')) {
          const responses = [
            "I'd be happy to help with your home loan inquiry! Our rates start from 8.5% for eligible applicants. What's your loan amount requirement?",
            "For home loans in Chennai, we offer competitive interest rates and flexible terms. Would you like to know about our eligibility criteria?",
            "We've helped over 1000+ families secure their dream homes. What type of property are you looking to purchase?",
            "Our home loan process is streamlined with quick approvals. Do you have any specific questions about documentation?",
            "We offer loans up to ₹5 crores with tenure up to 30 years. What's your monthly income range?"
          ];
          return responses[Math.floor(Math.random() * responses.length)];
        } else if (lowerMessage.includes('rate') || lowerMessage.includes('interest')) {
          return "Our current home loan interest rates start from 8.5% per annum. The exact rate depends on your credit profile, loan amount, and tenure. Would you like me to connect you with our loan specialist for a personalized quote?";
        } else if (lowerMessage.includes('eligibility') || lowerMessage.includes('qualify')) {
          return "Home loan eligibility depends on factors like income, credit score, employment stability, and existing obligations. Generally, you need a minimum credit score of 650 and stable income. Shall I help you with a quick eligibility check?";
        } else if (lowerMessage.includes('document') || lowerMessage.includes('paper')) {
          return "Required documents include: Income proof (salary slips/ITR), identity proof (Aadhar/PAN), address proof, bank statements, and property documents. We'll guide you through the complete list once you apply.";
        } else {
          return "I'm here to help with your home loan queries! You can ask about interest rates, eligibility, documentation, or loan process. How can I assist you today?";
        }
      }
    } catch (error) {
      console.error('Error generating response:', error);
      return "I apologize for the technical issue. For immediate assistance with home loans, please call us at +91 87785 69102. Our team is ready to help you!";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await generateResponse(inputMessage);
      
      if (aiResponse) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: aiResponse,
          isUser: false,
          timestamp: new Date()
        };

        setMessages(prev => [...prev, aiMessage]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      toast({
        title: "Connection Issue",
        description: "Please try again or call us at +91 87785 69102",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const defaultTrigger = (
    <button 
      className={`flex items-center justify-center w-16 h-16 bg-emerald text-white rounded-full hover:bg-emerald/90 transition-all duration-200 hover:scale-110 shadow-xl backdrop-blur-sm ${className}`}
      title="Chat with AI Assistant"
    >
      <Bot className="w-6 h-6" />
    </button>
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        {trigger || defaultTrigger}
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col h-full">
        <SheetHeader className="pb-4">
          <SheetTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-emerald" />
            Home Loan Assistant
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col flex-1 min-h-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start gap-3 ${
                  message.isUser ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full flex-shrink-0 ${
                    message.isUser
                      ? 'bg-emerald text-white'
                      : 'bg-emerald/10 text-emerald'
                  }`}
                >
                  {message.isUser ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-emerald text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald/10 text-emerald">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-gray-100 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-emerald/60 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-emerald/60 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-emerald/60 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex gap-2 border-t pt-4">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about home loans..."
              className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald focus:border-transparent text-sm"
              disabled={isLoading}
            />
            <Button
              onClick={handleSendMessage}
              disabled={isLoading || !inputMessage.trim()}
              className="bg-emerald hover:bg-emerald/90 text-white px-4 py-2"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Chatbot;
