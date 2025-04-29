import { useState, useEffect } from 'react';
import './App.css';
import Footer from './header/Footer';
import Navbar from './header/Navbar';
import ChatbotUI from './pages/ChatbotUI';
import Allroutes from './routes/Allroutes';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to manage loader visibility

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Simulate a 4-second loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      {isLoading ? (
        // Loader
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <div className={`content ${!isLoading ? 'show' : ''}`}>
          {/* <Navbar /> */}
          <Allroutes />

          {/* Chat toggle button - fixed to bottom right */}
          <button
            onClick={toggleChat}
            className="fixed bottom-4 right-4 bg-amber-500 text-white rounded-full p-4 shadow-lg hover:bg-amber-700 focus:outline-none z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>

          {/* Pass the isOpen state and toggleChat function to ChatbotUI */}
          <ChatbotUI isOpen={isOpen} toggleChat={toggleChat} />

          
        </div>
      )}
    </>
  );
}

export default App;