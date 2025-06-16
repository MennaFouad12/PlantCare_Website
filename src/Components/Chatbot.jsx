import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDQkeuip8B04tfSx4ztM5viYKRehD6XTvE");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: messages.length + 1, text: input, sender: 'User' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      await delay(1000); 

      const result = await model.generateContent(input);
      const response = await result.response;
      const text = await response.text();

      const botMessage = { id: messages.length + 2, text, sender: 'Bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      let errorMessageText = "An error occurred while connecting to the Gemini API.";
      if (error.status === 429) {
        errorMessageText = "You have exceeded the maximum number of requests. Please wait a moment and try again.";
      }
      const errorMessage = { id: messages.length + 2, text: errorMessageText, sender: 'Bot' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-3xl p-2 m-20 mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="flex items-center justify-between bg-green-700 text-white p-4">
        <h2 className="text-lg font-bold">Chatbot</h2>
        <button className="text-white hover:text-gray-300">
          <FontAwesomeIcon icon={faCog} />
        </button>
      </div>

      <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'User' ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-xs p-3 rounded-lg shadow-md ${msg.sender === 'User' ? 'bg-gray-300 text-black' : 'bg-blue-600 text-white'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-end">
            <div className="max-w-xs p-3 rounded-lg shadow-md bg-blue-600 text-white italic">Bot is typing...</div>
          </div>
        )}
      </div>

      <form className="flex border-t border-gray-300 p-4 bg-white" onSubmit={handleSendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Type your message..."
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg ml-2" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;