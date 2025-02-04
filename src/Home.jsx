import React from 'react';
import { supabase } from './supabaseClient';

function Home({ session }) {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="container">
      <h2>Welcome Home</h2>
      <p>You are logged in as: {session?.user?.email}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Home;
