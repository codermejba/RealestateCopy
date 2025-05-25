//https://hously-react.vercel.app/index-six

/* import slider styles */
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Contact from './pages/Contact';

import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";
import { useState, useEffect } from "react";
const App = () => {
  const [user, setUser] = useState(null);
 
 
   /* sign in */
   const handleSignUp = async () => {
     try {
       const result = await signInWithPopup(auth, provider);
       const user = result.user;
       setUser(user);
       console.log(user);
     } catch (error) {
       console.log("Error signing in:", error.message);
     }
   };
 /* logout */
   const handleSignOut = () => {
     auth.signOut();
     setUser(null);
   };
 
   
 /* handle auth */
 
   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
       setUser(currentUser);
     });
 
     // Clean up subscription on unmount
     return () => unsubscribe();
   }, []);
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home user={user} handleSignUp={handleSignUp} handleSignOut={handleSignOut}/>}/>
      <Route path='/contact' element={<Contact user={user} handleSignUp={handleSignUp} handleSignOut={handleSignOut} />}/>
      <Route path='*' element={<h1 className=" vh-100 d-flex align-items-center justify-content-center">404 Page Not Found</h1>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
