import React, { useContext, useState, useEffect} from "react";
import { authConfig } from "../firebase/firebase";
import {  setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail, 
  onAuthStateChanged,

} from "firebase/auth";

const AuthContext = React.createContext({} as any);

export function useAuth() {
  return useContext(AuthContext);
}

  interface Props {
    children: React.ReactNode
  }

  interface User {
    name: string
    balance: number
  }

export function AuthProvider(props: Props) {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const [userNow, setUserNow] = useState<User>({name: '', balance: 0})


  // create a user credencial conecting firebase auth and firestore
  async function signup(email: string, password: string, name: string) {
    const userCredential = await createUserWithEmailAndPassword(authConfig, email, password);
    const user = userCredential.user;
    await setDoc(doc(db, 'users', user.uid), {
      name: name || 'Sem nome',
      email,
      balance: 0
    })

    return userCredential;
  }

    // sign in a user credencial conecting firebase auth and firestore
  async function login(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(authConfig, email, password);
    const user = userCredential.user;
    getData()
    return user   
} 

const getData = async () => {
  const querySnapshot = await getDoc(doc(db, "users", currentUser.uid));
  const newItems: User = {
    name: querySnapshot.data()?.name,
    balance: querySnapshot.data()?.balance
  }
  setUserNow(newItems)
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
    updatePassword,
    userNow,
    getData
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && props.children}
    </AuthContext.Provider>
  )

}

