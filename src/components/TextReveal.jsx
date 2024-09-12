import React, { useState, useEffect } from 'react'
// import { words } from './constants/constant';

const TextReveal = () => {

    const words = ["Web Developer","Frontend Developer", "React Developer"]; // Array of words to display
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0); // Index of the current word
  const [charIndex, setCharIndex] = useState(0); // Index of the current character
  const [isDeleting, setIsDeleting] = useState(false); // State to track whether we are deleting

  useEffect(() => {
    const currentWord = words[wordIndex]; // Get the current word from the array

    if (!isDeleting && charIndex < currentWord.length) {
      // Typing the current word
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Adjust the delay for typing speed

      return () => clearTimeout(timeoutId); // Cleanup timeout
    } else if (isDeleting && charIndex > 0) {
      // Deleting the current word
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 50); // Adjust the delay for deleting speed

      return () => clearTimeout(timeoutId); // Cleanup timeout
    } else if (!isDeleting && charIndex === currentWord.length) {
      // Start deleting after word is fully typed
      const timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, 1000); // Wait before deleting

      return () => clearTimeout(timeoutId);
    } else if (isDeleting && charIndex === 0) {
      // Move to the next word after deleting is complete
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length); // Cycle through words
    }
  }, [charIndex, isDeleting, wordIndex, words]);
  return (
    <div className="text-base lg:text-xl xl:text-2xl pt-2 font-bold mochi text-fourth ">
     {displayedText}
    <span className="border-r-2 border-blue-600 animate-blink"></span>
  </div>
  )
}

export default TextReveal
