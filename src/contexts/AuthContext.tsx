import React, { useContext, useState, useEffect} from "react";
import { authConfig } from "../firebase/firebase";

import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail, 
  onAuthStateChanged

} from "firebase/auth";

const AuthContext = React.createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

  interface Props {
    children: React.ReactNode
  }

export function AuthProvider(props: Props) {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(authConfig, email, password);
  }

  function login(email: string, password: string) {
    return signInWithEmailAndPassword(authConfig, email, password);
  }

  function logout() {
    return signOut(authConfig);
  }

  function resetPassword(email: string) {
    return sendPasswordResetEmail(authConfig, email);
  }

  function updateEmail(email: string) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password: string) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authConfig, user => {
      setCurrentUser(user);
      setLoading(false);
    })
    return unsubscribe
  }, [])

  const value: any = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && props.children}
    </AuthContext.Provider>
  )

}

