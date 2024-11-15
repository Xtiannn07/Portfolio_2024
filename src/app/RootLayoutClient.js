// src/app/RootLayoutClient.js (Client-side layout with 'use client')
'use client'; 

import { useState, useEffect } from "react";
import Loading from './loading';  // Import the Loading component

export default function RootLayoutClient({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);  // Simulate loading delay
    return () => clearTimeout(timer);  // Cleanup timer
  }, []);

  return (
    <main>
      {isLoading ? <Loading /> : children}
    </main>
  );
}
