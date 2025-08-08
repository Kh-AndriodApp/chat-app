import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000');

export default function App() {
  const [messages, setMessages] = useState<any[]>([]);
  useEffect(() => {
    socket.on('connect', () => console.log('connected', socket.id));
    socket.on('message', (m) => setMessages((s) => [...s, m]));
    return () => { socket.off('message'); };
  }, []);
  return (
    <div style={{ padding: 20 }}>
      <h1>Chat Frontend (TS)</h1>
      <div>
        {messages.map((m, i) => <div key={i}><strong>{m.senderId}</strong>: {m.content}</div>)}
      </div>
    </div>
  );
}
