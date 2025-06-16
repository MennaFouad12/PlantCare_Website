// import React, { useState } from 'react';



// function Chat () {
//   const [messages, setMessages] = useState([]); 
//   const [currentMessage, setCurrentMessage] = useState("");
//   const[chatHistory , setChatHistory] = useState([]);


//   // Helper function to update chat history
// const updateHistory = (text) => {
//   setChatHistory(prev => [
//       ...prev.filter(msg => msg.text !== "Thinking..."), 
//       {
//           role: "model", 
//           text: text
//       }
//   ]);
// };

//   const generateBotResponse = async(history)=>{
//     // Format history into the required structure
// history = history.map(({ role, text }) => ({ 
//   role, 
//   parts: [{ text }] 
// }));

// const requestOptions = {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ contents: history }),
// };

// try {
//   // Make the API call to get the bot's response
//   const response = await fetch(input.meta.env.VITE_API_URL, requestOptions);
//   const data = await response.json();
  
//   if (!response.ok) {
//       throw new Error(data.error?.message || "Something went wrong!");
//   }

//   // Process the API response
//   const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\^\^\^(-?)\^\^\^/g, "$1").trim();
  
//   // Update chat history with the response
//   updateHistory(apiResponseText);
// } catch (error) {
//   console.error("API Error:", error);
// }
//   }

  
//   const handleSend = () => {
//     if (currentMessage.trim() === "") return; 
//     setMessages([...messages, currentMessage]);
//     setCurrentMessage(""); 
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-green-500 text-white p-4 text-center font-bold">
//         Group Chat
//       </header>

//       {/* ************************************************************ */}

//       {/* Chat Area */}
//       <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
//         <div className="flex flex-col gap-4">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className="self-end bg-green-500 text-white p-3 rounded-lg max-w-xs"
//             >
//               {msg}
//             </div>
//           ))}
//         </div>
//       </div>
//           {/* ************************************************************ */}
//       {/* Input Area */}
//       <footer className="bg-gray-200 p-4 flex items-center">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={currentMessage} 
//           onChange={(e) => setCurrentMessage(e.target.value)} 
//           className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//         />
//         <button
//           onClick={handleSend} 
//           className="bg-green-500 text-white ml-2 px-4 py-2 rounded-lg hover:bg-green-600"
//         >
//           Send
//         </button>
//       </footer>
//     </div>
//   );
// };

// export default Chat;





































// import React, { useState } from 'react';

// function Chat() {
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);

//   // Helper function to update chat history
//   const updateHistory = (text) => {
//     setChatHistory(prev => [
//       ...prev.filter(msg => msg.text !== "Thinking..."),
//       { role: "model", text: text }
//     ]);
//   };

//   const generateBotResponse = async (history) => {
//     const formattedHistory = history.map(({ role, text }) => ({
//       role,
//       parts: [{ text }]
//     }));
  
//     console.log("Sending to API:", formattedHistory);
  
//     try {
//       const response = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=AIzaSyCEAk0c_C2bh5jiidtsSAYJMT7rTv9978c", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ contents: formattedHistory }),
//       });
  
//       const data = await response.json();
//       console.log("API response:", data);
  
//       if (!response.ok) {
//         throw new Error(data.error?.message || "Something went wrong!");
//       }
  
//       const apiResponseText = data.candidates[0].content.parts[0].text.trim();
//       updateHistory(apiResponseText);
//     } catch (error) {
//       console.error("API Error:", error);
//       updateHistory("Error: Could not get a response.");
//     }
//   };
  
  
//     console.log("Sending to API:", formattedHistory);
  
//     try {
//       const response = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=YOUR_KEY", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ contents: formattedHistory }),
//       });
  
//       const data = await response.json();
//       console.log("API response:", data);
  
//       if (!response.ok) {
//         throw new Error(data.error?.message || "Something went wrong!");
//       }
  
//       const apiResponseText = data.candidates[0].content.parts[0].text.trim();
//       updateHistory(apiResponseText);
//     } catch (error) {
//       console.error("API Error:", error);
//       updateHistory("Error: Could not get a response.");
//     }
//   };
  

//   const handleSend = () => {
//     if (currentMessage.trim() === "") return;

//     const newUserMessage = { role: "user", text: currentMessage };
//     setChatHistory(prev => [...prev, newUserMessage, { role: "model", text: "Thinking..." }]);
//     generateBotResponse([...chatHistory, newUserMessage]);

//     setCurrentMessage("");
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       <header className="bg-green-500 text-white p-4 text-center font-bold">Group Chat</header>

//       <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
//         <div className="flex flex-col gap-4">
//           {chatHistory.map((msg, index) => (
//             <div
//               key={index}
//               className={`p-3 rounded-lg max-w-xs ${
//                 msg.role === "user"
//                   ? "self-end bg-green-500 text-white"
//                   : "self-start bg-gray-300 text-black"
//               }`}
//             >
//               {msg.text}
//             </div>
//           ))}
//         </div>
//       </div>

//       <footer className="bg-gray-200 p-4 flex items-center">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={currentMessage}
//           onChange={(e) => setCurrentMessage(e.target.value)}
//           className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
//         />
//         <button
//           onClick={handleSend}
//           className="bg-green-500 text-white ml-2 px-4 py-2 rounded-lg hover:bg-green-600"
//         >
//           Send
//         </button>
//       </footer>
//     </div>
//   );
// }

// export default Chat;














import React, { useState } from 'react';

function Chat() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  // Helper function to update chat history
  const updateHistory = (text) => {
    setChatHistory(prev => [
      ...prev.filter(msg => msg.text !== "Thinking..."),
      { role: "model", text: text }
    ]);
  };

  const generateBotResponse = async (history) => {
    const formattedHistory = history.map(({ role, text }) => ({
      role,
      parts: [{ text }]
    }));

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${import.meta.env.VITE_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents: formattedHistory }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "Something went wrong!");
      }

      const apiResponseText = data.candidates[0].content.parts[0].text.trim();
      updateHistory(apiResponseText);
    } catch (error) {
      console.error("API Error:", error);
      updateHistory("Error: Could not get a response.");
    }
  };

  const handleSend = () => {
    if (currentMessage.trim() === "") return;

    const newUserMessage = { role: "user", text: currentMessage };
    setChatHistory(prev => [
      ...prev,
      newUserMessage,
      { role: "model", text: "Thinking..." }
    ]);

    generateBotResponse([...chatHistory, newUserMessage]);

    setCurrentMessage("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-green-500 text-white p-4 text-center font-bold">
        Group Chat
      </header>

      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        <div className="flex flex-col gap-4">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-xs ${
                msg.role === "user"
                  ? "self-end bg-green-500 text-white"
                  : "self-start bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>

      <footer className="bg-gray-200 p-4 flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleSend}
          className="bg-green-500 text-white ml-2 px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Send
        </button>
      </footer>
    </div>
  );
}

export default Chat;
