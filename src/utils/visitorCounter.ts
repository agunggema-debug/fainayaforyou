"use client";

import { useState, useEffect } from "react";

const TOTAL_KEY = "fainaya-total-visitors";
const SESSION_KEY = "fainaya-session-id";

function generateSessionId(): string {
  // Use crypto.randomUUID() if available (modern browsers), otherwise fallback
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback to a less secure but better than Math.random approach
  const arr = new Uint8Array(16);
  crypto.getRandomValues(arr);
  return Array.from(arr, (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function randomInt(min: number, max: number): number {
  // Use crypto.getRandomValues for cryptographically secure random numbers
  const range = max - min + 1;
  const bytes = new Uint32Array(1);
  crypto.getRandomValues(bytes);
  return min + (bytes[0] % range);
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
          const current = stored ? Number.parseInt(stored, 10) : 0;
          const newCount = current + 1;
          localStorage.setItem(TOTAL_KEY, newCount.toString());
          setTotalVisitors(newCount);
        }
      } catch {
        // Fallback to localStorage when offline
        const stored = localStorage.getItem(TOTAL_KEY);
        const current = stored ? Number.parseInt(stored, 10) : 0;
        const newCount = current + 1;
        localStorage.setItem(TOTAL_KEY, newCount.toString());
        setTotalVisitors(newCount);
      }

      // Simulate online visitors (3-15 range)
      getOrCreateSessionId();
      const simulatedOnline = randomInt(3, 15);
      setOnlineVisitors(simulatedOnline);
      setLoading(false);
    }

    fetchCount();

    // Refresh online visitors every 30 seconds
    const interval = setInterval(() => {
      const simulatedOnline = randomInt(3, 15);
      setOnlineVisitors(simulatedOnline);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return { totalVisitors, onlineVisitors, loading };
}