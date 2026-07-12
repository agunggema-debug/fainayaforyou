"use client";

import { useState, useEffect } from "react";

const TOTAL_KEY = "fainaya-total-visitors";
const SESSION_KEY = "fainaya-session-id";

function generateSessionId(): string {
  return Math.random().toString(36).substring(2, 15);
}

function getOrCreateSessionId(): string {
  if (typeof window === "undefined") return "";
  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

export function useVisitorCounter() {
  const [totalVisitors, setTotalVisitors] = useState<number>(0);
  const [onlineVisitors, setOnlineVisitors] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCount() {
      try {
        // Try to use countapi.xyz for real total visitor count
        const response = await fetch(
          "https://api.countapi.xyz/hit/fainaya-for-you/visitors"
        );
        if (response.ok) {
          const data = await response.json();
          setTotalVisitors(data.value);
        } else {
          // Fallback to localStorage
          const stored = localStorage.getItem(TOTAL_KEY);
          const current = stored ? parseInt(stored, 10) : 0;
          const newCount = current + 1;
          localStorage.setItem(TOTAL_KEY, newCount.toString());
          setTotalVisitors(newCount);
        }
      } catch {
        // Fallback to localStorage when offline
        const stored = localStorage.getItem(TOTAL_KEY);
        const current = stored ? parseInt(stored, 10) : 0;
        const newCount = current + 1;
        localStorage.setItem(TOTAL_KEY, newCount.toString());
        setTotalVisitors(newCount);
      }

      // Simulate online visitors (3-15 range)
      getOrCreateSessionId();
      const simulatedOnline = Math.floor(Math.random() * 13) + 3;
      setOnlineVisitors(simulatedOnline);
      setLoading(false);
    }

    fetchCount();

    // Refresh online visitors every 30 seconds
    const interval = setInterval(() => {
      const simulatedOnline = Math.floor(Math.random() * 13) + 3;
      setOnlineVisitors(simulatedOnline);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return { totalVisitors, onlineVisitors, loading };
}