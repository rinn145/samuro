import React, { useState } from "react";
import './index.css';
import './assets/fonts.css';

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

  const switchChat = (chatName) => {
    setCurrentChat(chatName);
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
    <div className="chat-container">
      <div className="chat-sidebar">
        <h2>Chat</h2>
        {Object.keys(chats).map((chatName) => (
          <div
            key={chatName}
            className="contact"
            onClick={() => switchChat(chatName)}
          >
            <div className="avatar">{chatName[0]}</div>
            <div className="contact-info">
              <div>{chatName}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-area">
        <div className="chat-header">
          <div className="avatar">{currentChat[0]}</div>
          <div className="chat-name">{currentChat}</div>
        </div>

        <div className="message-list">
          {chats[currentChat].map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.sender === "user" ? "user" : "agent"
              }`}
            >
              <div className="bubble">
                {message.file ? (
                  <img src={message.file} alt="Uploaded file" className="image" />
                ) : (
                  message.text
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="message-input" style={{ position: "relative", width: "100%" }}>
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder="Message"
              className="input"
            />
            <button
              onClick={sendMessage}
              style={{
                position: "absolute",
                right: "24px",
                top: "50%",
                transform: "translateY(-50%)",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              &#10148;
            </button>
            <button
              onClick={() => document.getElementById("fileInput").click()}
              style={{
                position: "absolute",
                right: "45px",
                top: "50%",
                transform: "translateY(-50%)",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              📎
            </button>
            <input
              type="file"
              accept="image/*"
              onChange={sendFile}
              style={{ display: "none" }}
              id="fileInput"
            />
</div>
      </div>
    </div>
  );
};

export default ChatApp;
