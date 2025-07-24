import React, { useState, useRef } from 'react';
import '../styles/RobotChat.css';

const RobotChat: React.FC = () => {
  const [robotResponse, setRobotResponse] = useState("Hey, I’m your friendly robot!");
  const [isTyping, setIsTyping] = useState(false);

  const responses = [
    "Pfft. I don’t feel like answering that.",
    "Keep it to yourself!",
    "I’m a robot, not your therapist.",
    "Try Google maybe?",
    "Ooh spicy question, but no.",
    "Not today human, not today.",
    "Ask again in the year 3025.",
    "I have no idea, I’m just here to look cute."
  ];

  const typewriter = (text: string) => {
    let index = 0;
    let currentText = "";
    setRobotResponse("");
    setIsTyping(true);

    const interval = setInterval(() => {
      currentText += text.charAt(index);
      setRobotResponse(currentText);
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 40);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
      const randomReply = responses[Math.floor(Math.random() * responses.length)];
      typewriter(randomReply);
      e.currentTarget.value = "";
    }
  };

  return (
    <div className="robot-chat-container">
      <div className={`robot-chat-bubble ${isTyping ? 'typing' : ''}`}>
        {robotResponse}
        {isTyping && <span className="blinking-cursor">|</span>}
      </div>
      <input
        type="text"
        placeholder="Ask me something..."
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default RobotChat;
