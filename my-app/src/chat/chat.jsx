import React, { useState, useEffect } from "react";
import '../chat/chat.css';
import '../assets/fonts.css';

const ChatApp = () => {
  const [chats, setChats] = useState({
    IvanGenius: [
      { sender: "user", text: "Hello" },
      { sender: "agent", text: "Hello" },
    ],
    AnnaSupport: [
      { sender: "user", text: "Hi, I need help with my order" },
      { sender: "agent", text: "Of course, what seems to be the problem?" },
    ],
  });

  const [currentChat, setCurrentChat] = useState("IvanGenius");
  const [messageInput, setMessageInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Load chats from localStorage
  useEffect(() => {
    const savedChats = localStorage.getItem("chats");
    if (savedChats) {
      setChats(JSON.parse(savedChats));
    }
  }, []);

  // Save chats to localStorage
  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  const switchChat = (chatName) => {
    setCurrentChat(chatName);
  };

  let typingTimeout;
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    } else {
      setIsTyping(true);
      clearTimeout(typingTimeout);
      typingTimeout = setTimeout(() => setIsTyping(false), 5000);
    }
  };

  const sendMessage = () => {
    if (messageInput.trim()) {
      setChats((prevChats) => ({
        ...prevChats,
        [currentChat]: [
          ...prevChats[currentChat],
          { sender: "user", text: messageInput },
        ],
      }));
      setMessageInput("");
      setIsTyping(false);
    }
  };

  const sendFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setChats((prevChats) => ({
          ...prevChats,
          [currentChat]: [
            ...prevChats[currentChat],
            { sender: "user", file: e.target.result },
          ],
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="chat-app">
      <div className="chat-app__sidebar">
        <h2 className="chat-app__sidebar-title">Chat</h2>
        {Object.keys(chats).map((chatName) => {
          const lastMessage = chats[chatName][chats[chatName].length - 1];
          return (
            <div
              key={chatName}
              className="chat-app__contact"
              onClick={() => switchChat(chatName)}
            >
              <div className="chat-app__avatar">{chatName[0]}</div>
              <div className="chat-app__contact-info">
                <div className="chat-app__contact-name">{chatName}</div>
                <div className="chat-app__last-message">
                  {lastMessage.file ? "Image sent" : lastMessage.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="chat-app__area">
        <div className="chat-app__header">
          <div className="chat-app__avatar">{currentChat[0]}</div>
          <div className="chat-app__chat-name">{currentChat}</div>
        </div>

        <div className="chat-app__messages">
          {chats[currentChat].map((message, index) => (
            <div
              key={index}
              className={`chat-app__message chat-app__message--${message.sender}`}
            >
              <div className="chat-app__bubble">
                {message.file ? (
                  <img
                    src={message.file}
                    alt="Uploaded file"
                    className="chat-app__image"
                  />
                ) : (
                  message.text
                )}
              </div>
            </div>
          ))}
          {isTyping && <div className="chat-app__typing">Agent is typing...</div>}
        </div>

        <div className="chat-app__input">
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Message"
            className="chat-app__input-field"
          />
          <button
            onClick={() => document.getElementById("fileInput").click()}
            className="chat-app__input-button"
          >
            <i className="fas fa-paperclip"></i>
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={sendFile}
            style={{ display: "none" }}
            id="fileInput"
          />
          <button onClick={sendMessage} className="chat-app__input-button">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
