import React, { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BiChat } from 'react-icons/bi'; // Chatbot icon
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase config
const firebaseConfig = {
  apiKey: 'your-api-key',
  authDomain: 'your-auth-domain',
  projectId: 'your-project-id',
  storageBucket: 'your-storage-bucket',
  messagingSenderId: 'your-messaging-sender-id',
  appId: 'your-app-id',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false); // Track open/close state

  const handleSend = async () => {
    if (input.trim()) {
      const newMessage = { user: 'You', text: input };
      setMessages([...messages, newMessage]);
      setInput('');

      // Save to Firebase
      await addDoc(collection(db, 'chats'), newMessage);

      // Mock response
      const botResponse = { user: 'Bot', text: 'Thanks for your question!' };
      setMessages((prev) => [...prev, botResponse]);
      await addDoc(collection(db, 'chats'), botResponse);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {/* Hamburger button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="bg-[#00887a] text-white p-3 rounded-full shadow-lg flex items-center justify-center"
      >
        <BiChat size={24} />
      </button>

      {/* Chat window */}
      {isChatOpen && (
        <div className="mt-2 bg-white shadow-lg rounded-lg w-80 p-4">
          <div className="h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 ${msg.user === 'You' ? 'text-right' : ''}`}>
                <p
                  className={`inline-block p-2 rounded-lg ${
                    msg.user === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center mt-2">
            <input
              type="text"
              className="border border-gray-300 rounded-l-lg flex-grow p-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Chatbot is coming soon!!!!..."
            />
            <button
              className="bg-[#00887a] text-white p-2 rounded-r-lg flex items-center justify-center"
              onClick={handleSend}
            >
              <AiOutlineSend size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;