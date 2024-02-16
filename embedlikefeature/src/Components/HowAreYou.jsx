import React, { useState } from 'react';

const HowAreYou = ({ onEmojiSelect }) => {
  const emojis = [
    { emoji: '😀', name: 'Happy', message: 'Great to see you in a good mood!' },
    { emoji: '😊', name: 'Pleased', message: 'Feeling pleased today!' },
    { emoji: '😐', name: 'Neutral', message: 'A neutral day.' },
    { emoji: '😔', name: 'Sad', message: 'Hope things get better soon.' },
    { emoji: '😢', name: 'Crying', message: 'Take your time, it\'s okay to feel this way.' },
  ];

  const [selectedEmoji, setSelectedEmoji] = useState('');

  const handleEmojiSelect = (emoji) => {
    setSelectedEmoji(emoji);
    onEmojiSelect(); // Call the callback function to scroll to External_render
  };
  
  const getMessageForEmoji = (emoji) => {
    const selectedEmojiData = emojis.find((e) => e.emoji === emoji);
    return selectedEmojiData ? selectedEmojiData.message : '';
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
      <h1>How are you Feeling today!</h1>

      <div className="emoji-container">
        {emojis.map((emojiData, index) => (
          <span
            key={index}
            onClick={() => handleEmojiSelect(emojiData.emoji)}
            className={selectedEmoji === emojiData.emoji ? 'selected' : ''}
          >
            {emojiData.emoji}
          </span>
        ))}
      </div>

      <div className="selected-emoji-message">
        {selectedEmoji && (
          <p>{getMessageForEmoji(selectedEmoji)}</p>
        )}
      </div>
    </div>
  );
}

export default HowAreYou;
