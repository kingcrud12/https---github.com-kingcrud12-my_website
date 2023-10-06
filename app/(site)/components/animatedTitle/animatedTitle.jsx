"use client"

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'; // Assurez-vous d'importer la bibliothèque que vous utilisez

function AnimatedTitle() {
  const [text] = useTypewriter({
    words: ["web and mobile developer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return <div>{text}<Cursor cursorBlinking cursorStyle="..." cursorColor="#ffff" /></div>;
}

export default AnimatedTitle;