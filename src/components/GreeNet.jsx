import React, { useState, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import '../App.css'
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from '@chatscope/chat-ui-kit-react';

const API_KEY = process.env.REACT_APP_API_KEY;

const systemMessage = {
  role: "system",
  content: "Explain things like you are an environmental nerd who cares about a green web, you analyze code and make changes to make the web greener"
};

function GreeNet() {
  const [messages, setMessages] = useState([
    {
      message: "Hi! I exist to optimize your green webiness. Ask me anything.",
      sentTime: "just now",
      sender: "GreeNetBot"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    });

    const data = await response.json();
    setMessages([...chatMessages, {
      message: data.choices[0].message.content,
      sender: "ChatGPT"
    }]);
    setIsTyping(false);
  }

  return (
    <div className="App" style={{ backgroundColor: '#000000' }}>
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator content="GreeNet Bot is typing" /> : null}
            >
              {messages.map((message, i) => (
                <Message key={i} model={message} />
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default GreeNet;
