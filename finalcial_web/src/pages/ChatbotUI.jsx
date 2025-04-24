import React, { useState, useRef, useEffect } from 'react';
import chatIcon from '../assets/images/icon.png';
import sendIcon from '../assets/images/send.png';


function ChatbotUI({ isOpen, toggleChat }) {
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to the bottom when new messages appear
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (inputValue.trim() === '') return;
    
    // Add user message
    const newMessages = [...messages, { text: inputValue, isBot: false }];
    setMessages(newMessages);
    setInputValue('');
    
    // Simulate bot response (replace with actual API call in real implementation)
    setTimeout(() => {
      setMessages([...newMessages, { 
        text: "This is a simulated response. In a real application, you would call your chatbot API here.", 
        isBot: true 
      }]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-4 flex flex-col h-110 w-90  rounded-lg shadow-lg bg-white" style={{ zIndex: 9999 }}>
      {/* Header */}
      <div className="bg-amber-500 text-white p-3 rounded-t-lg flex justify-between items-center">
  <div className="flex items-center">
    <img src={chatIcon} alt="Chat Icon" className="w-15 h-10 mr-3" />
    <div>
      <h1 className="text-lg font-bold">Dhan-Pravah </h1>
      <p>AI-Powered Financial</p>
    </div>
  </div>
  
  <button 
    onClick={toggleChat}
    className="text-white hover:text-gray-200 focus:outline-none"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  </button>
</div>
      
      {/* Messages area */}
      <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
      {messages.map((message, index) => (
    <div
      key={index}
      className={`flex items-end gap-2 my-2 ${
        message.isBot ? 'justify-start' : 'justify-end'
      }`}
    >
      {/* Logo for bot messages */}
      {message.isBot && (
        <img
          src={chatIcon}
          alt="Bot Logo"
          className="w-9 h-8 rounded-full bg-gray-200 p-1"
        />
      )}

      <div
        className={`inline-block px-4 py-2 rounded-2xl text-sm max-w-[75%] ${
          message.isBot
            ? 'bg-gray-200 text-gray-800'
            : 'bg-amber-500 text-white'
        }`}
      >
        {message.text}
      </div>

      {/* Optional: User avatar on the right */}
     
    </div>
  ))}
  <div ref={messagesEndRef} />
</div>


      
      {/* Input area */}
      <form onSubmit={handleSendMessage} className="p-2">
  <div className="flex items-center">
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Type Message Here.."
      className="flex-1 px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-full outline-none"
    />
   <button
  type="submit"
  className="ml-2 p-2 transform-none shadow-none hover:transform-none hover:shadow-none"
>

      
<img src={sendIcon} alt="" width='35px'/>


    </button>
  </div>
</form>
    </div>
  );
}

export default ChatbotUI;