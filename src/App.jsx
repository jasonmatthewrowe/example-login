import React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Auth from './Auth';
import Home from './Home';

function App() {
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    if (session) {
      navigate('/home');
    } else {
      navigate('/auth');
    }
  }, [session, navigate]);

  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/home" element={<Home session={session} />} />
    </Routes>
  );
}

export default App;
