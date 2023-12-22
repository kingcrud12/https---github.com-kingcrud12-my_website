"use client"

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'; // Assurez-vous d'importer la bibliothèque que vous utilisez

function AnimatedTitle() {
  const [text] = useTypewriter({
    words: ["Développeur web & mobile"],
    loop: true,
    typeSpeed: 15,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return <div>{text}<Cursor cursorBlinking cursorStyle="..." cursorColor="#ffff" /></div>;
}

export default AnimatedTitle;