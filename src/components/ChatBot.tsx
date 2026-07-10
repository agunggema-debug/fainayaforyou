"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { ChatItem, chatResponses, welcomeMessage, fallbackResponse } from "@/data/chatResponses";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [chats, setChats] = useState<ChatItem[]>([
    {
      id: "welcome",
      type: "bot",
      message: welcomeMessage,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMsg = userMessage.toLowerCase();

    for (const qa of chatResponses) {
      const match = qa.keywords.some((keyword) => lowerMsg.includes(keyword));
      if (match) {
        return qa.response;
      }
    }

    return fallbackResponse;
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userChat: ChatItem = {
      id: `user-${Date.now()}`,
      type: "user",
      message: trimmed,
      timestamp: new Date(),
    };

    setChats((prev) => [...prev, userChat]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(trimmed);
      const botChat: ChatItem = {
        id: `bot-${Date.now()}`,
        type: "bot",
        message: botResponse,
        timestamp: new Date(),
      };
      setChats((prev) => [...prev, botChat]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickReplies = [
    "Halo!",
    "Info produk",
    "Cara order",
    "Harga",
  ];

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-rose text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-shadow duration-300"
        aria-label={isOpen ? "Tutup chat" : "Buka chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle size={26} />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-1 -right-1"
              >
                <Sparkles size={12} className="text-yellow-300" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-160px)] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-cream overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-rose p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-white text-base font-semibold leading-tight">
                  Fainaya Chat
                </h3>
                <p className="text-white/80 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                  Online • Siap bantu kamu
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Tutup"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-rose/5 to-cream/30">
              {chats.map((chat) => (
                <motion.div
                  key={chat.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  {chat.type === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-rose flex-shrink-0 flex items-center justify-center mr-2 mt-1">
                      <MessageCircle size={12} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      chat.type === "user"
                        ? "bg-gradient-to-r from-primary to-primary-dark text-white rounded-tr-sm"
                        : "bg-white border border-cream text-foreground rounded-tl-sm shadow-sm"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{chat.message}</p>
                    <p
                      className={`text-[10px] mt-1 ${
                        chat.type === "user" ? "text-white/70" : "text-secondary/60"
                      }`}
                    >
                      {chat.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  {chat.type === "user" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-warm-brown to-dark-brown flex-shrink-0 flex items-center justify-center ml-2 mt-1">
                      <span className="text-white text-xs font-medium">A</span>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-rose flex-shrink-0 flex items-center justify-center mr-2 mt-1">
                    <MessageCircle size={12} className="text-white" />
                  </div>
                  <div className="bg-white border border-cream rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1">
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}
                        className="w-2 h-2 bg-primary rounded-full"
                      />
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }}
                        className="w-2 h-2 bg-primary/70 rounded-full"
                      />
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }}
                        className="w-2 h-2 bg-primary/40 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Replies */}
            {chats.length <= 2 && (
              <div className="px-4 py-2 bg-white/50 border-t border-cream/50">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((text) => (
                    <button
                      key={text}
                      onClick={() => {
                        const userChat: ChatItem = {
                          id: `user-${Date.now()}`,
                          type: "user",
                          message: text,
                          timestamp: new Date(),
                        };
                        setChats((prev) => [...prev, userChat]);
                        setIsTyping(true);
                        setTimeout(() => {
                          const botResponse = getBotResponse(text);
                          const botChat: ChatItem = {
                            id: `bot-${Date.now()}`,
                            type: "bot",
                            message: botResponse,
                            timestamp: new Date(),
                          };
                          setChats((prev) => [...prev, botChat]);
                          setIsTyping(false);
                        }, 1500 + Math.random() * 1000);
                      }}
                      className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-cream bg-white/80">
              <div className="flex items-center gap-2 bg-cream/50 rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-primary/30 focus-within:bg-white transition-all duration-200">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ketik pesan..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder-secondary/60 outline-none py-1.5"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    input.trim() && !isTyping
                      ? "bg-gradient-to-r from-primary to-rose text-white shadow-sm"
                      : "bg-secondary/20 text-secondary/50 cursor-not-allowed"
                  }`}
                  aria-label="Kirim"
                >
                  <Send size={16} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}