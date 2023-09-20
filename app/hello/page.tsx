'use client'

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const languages = [
  { code: "en", greeting: "Hello" }, // English
  { code: "es", greeting: "Hola" }, // Spanish
  { code: "zh", greeting: "你 好" }, // Chinese (Simplified)
  { code: "hi", greeting: "नमस्ते" }, // Hindi
  { code: "ar", greeting: "مرحباً" }, // Arabic
  { code: "ru", greeting: "Здравствуйте" }, // Russian
  { code: "ja", greeting: "こんにちは" }, // Japanese
  { code: "de", greeting: "Guten Tag" }, // German
  { code: "fr", greeting: "Bonjour" }, // French
  { code: "ko", greeting: "안녕하세요" }, // Korean
  { code: 'in', greeting: 'Halo' } //indonesia

];

const HelloScreen = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [isLooping, setIsLooping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isLooping) {
        setCurrentLanguageIndex((prevIndex) =>
          prevIndex === languages.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 150);

    return () => clearInterval(interval);
  }, [isLooping]);

  const currentLanguage = languages[currentLanguageIndex];

  useEffect(() => {
    if (currentLanguage.code === 'in') {
      setIsLooping(false); // Stop looping when the current language is Indonesian
    }
  }, [currentLanguage]);

  ////

  const [count, setCount] = useState(2);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count === 0) {
        clearInterval(intervalId); // Hentikan interval saat hitungan mencapai 0
      } else {
        setCount(count - 1); // Kurangi hitungan sebesar 1 setiap detik
      }
    }, 1000); // Set interval ke 1000ms (1 detik)

    return () => {
      clearInterval(intervalId); // Membersihkan interval saat komponen unmount
    };
  }, [count]);


  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col justify-center items-center  bg-zinc-950 text-white text-2xl sm:text-5xl font-medium duration-500    ${count ? 'translate-y-0' : '-translate-y-full rounded-b-full'
        }
      `}
    >
      <h1>{currentLanguage.greeting}</h1>

    </div>
  );
};

export default HelloScreen;

