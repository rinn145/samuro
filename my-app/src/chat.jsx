import React, { useState } from "react";

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
    <div style={styles.chatContainer}>
      {/* Sidebar */}
      <div style={styles.chatSidebar}>
        <h2>Chat</h2>
        {Object.keys(chats).map((chatName) => (
          <div
            key={chatName}
            style={styles.contact}
            onClick={() => switchChat(chatName)}
          >
            <div style={styles.avatar}>{chatName[0]}</div>
            <div style={styles.contactInfo}>
              <div style={styles.contactName}>{chatName}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Area */}
      <div style={styles.chatArea}>
        <div style={styles.chatHeader}>
          <div style={styles.avatar}>{currentChat[0]}</div>
          <div style={styles.chatName}>{currentChat}</div>
        </div>

        {/* Message List */}
        <div style={styles.messageList}>
          {chats[currentChat].map((message, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                justifyContent:
                  message.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              <div style={styles.bubble}>
                {message.file ? (
                  <img
                    src={message.file}
                    alt="Uploaded file"
                    style={styles.image}
                  />
                ) : (
                  message.text
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div style={styles.messageInput}>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Message"
            style={styles.input}
          />
          <input
            type="file"
            accept="image/*"
            onChange={sendFile}
            style={{ display: "none" }}
            id="fileInput"
          />
          <button onClick={() => document.getElementById("fileInput").click()}>
            📎
          </button>
          <button onClick={sendMessage}>&#10148;</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  chatContainer: {
    display: "flex",
    maxWidth: "1270px",
    height: "720px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    margin: "20px auto",
  },
  chatSidebar: {
    width: "200px",
    padding: "20px",
    backgroundColor: "#f2f2f2",
    borderRight: "1px solid #ddd",
  },
  chatArea: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },
  chatHeader: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px",
    marginBottom: "10px",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#d9534f",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "1em",
    marginRight: "10px",
  },
  chatName: {
    fontWeight: "bold",
    fontSize: "1.1em",
  },
  messageList: {
    flexGrow: 1,
    overflowY: "auto",
    maxHeight: "500px",
    paddingRight: "10px",
  },
  message: {
    display: "flex",
    marginBottom: "10px",
  },
  bubble: {
    maxWidth: "60%",
    padding: "10px 15px",
    borderRadius: "15px",
    fontSize: "0.9em",
    lineHeight: "1.4em",
    backgroundColor: "#f5e0e9",
    wordWrap: "break-word",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "8px",
  },
  messageInput: {
    display: "flex",
    alignItems: "center",
    borderTop: "1px solid #ddd",
    padding: "10px",
  },
  input: {
    flexGrow: 1,
    padding: "10px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    marginRight: "10px",
  },
  contact: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
    cursor: "pointer",
  },
  contactInfo: {
    marginLeft: "10px",
  },
};

export default ChatApp;
