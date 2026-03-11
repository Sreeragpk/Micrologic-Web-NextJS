"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: "bot", 
      text: "Hi there! 👋 I'm your Micrologic assistant. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const send = async () => {
    if (!input.trim() || loading) return;

    const userMessage = {
      role: "user",
      text: input.trim(),
      timestamp: new Date()
    };

    const next = [...messages, userMessage];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("https://micrologicbackend.onrender.com/api/chat", { 
        message: input.trim() 
      });
      
      setTimeout(() => {
        setMessages([...next, { 
          role: "bot", 
          text: res.data.reply,
          timestamp: new Date()
        }]);
        setLoading(false);
      }, 500); // Simulate typing delay
      
    } catch (error) {
      setTimeout(() => {
        setMessages([...next, { 
          role: "bot", 
          text: "I'm having trouble connecting right now. Please try again later.",
          timestamp: new Date()
        }]);
        setLoading(false);
      }, 500);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <>
      {/* Chat Window */}
      <div 
        className={`fixed bottom-4 right-4 w-96 bg-white shadow-2xl rounded-2xl flex flex-col transition-all duration-300 ease-in-out z-50 ${
          isOpen ? 'h-[600px] opacity-100' : 'h-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
              🤖
            </div>
            <div>
              <h3 className="font-semibold text-base">Micrologic Support</h3>
              <p className="text-xs text-indigo-100">Online • Ready to help</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="hover:bg-white/20 rounded-lg p-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
          {messages.map((m, i) => (
            <div 
              key={i} 
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
            >
              <div className={`flex items-end space-x-2 max-w-[80%] ${m.role === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 ${
                  m.role === "user" 
                    ? "bg-indigo-600 text-white" 
                    : "bg-gray-300 text-gray-700"
                }`}>
                  {m.role === "user" ? "You" : "🤖"}
                </div>
                
                {/* Message Bubble */}
                <div className="flex flex-col">
                  <div className={`rounded-2xl px-4 py-2.5 shadow-sm ${
                    m.role === "user"
                      ? "bg-indigo-600 text-white rounded-br-none"
                      : "bg-white text-gray-800 rounded-bl-none border border-gray-200"
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
                  </div>
                  <span className={`text-xs text-gray-400 mt-1 px-1 ${m.role === "user" ? "text-right" : ""}`}>
                    {formatTime(m.timestamp)}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {loading && (
            <div className="flex justify-start animate-fadeIn">
              <div className="flex items-end space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm">
                  🤖
                </div>
                <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-200">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 bg-white p-4 rounded-b-2xl">
          <div className="flex items-end space-x-2">
            <input
              ref={inputRef}
              className="flex-1 p-3 border border-gray-300 rounded-xl outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all text-sm resize-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), send())}
              placeholder="Type your message..."
              disabled={loading}
              maxLength={500}
            />
            <button 
              className={`p-3 rounded-xl transition-all ${
                input.trim() && !loading
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              onClick={send}
              disabled={!input.trim() || loading}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            Press Enter to send • {input.length}/500
          </p>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 z-50 ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        style={{ width: '60px', height: '60px' }}
      >
        <div className="flex items-center justify-center relative">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
            1
          </span>
        </div>
      </button>
    </>
  );
}
