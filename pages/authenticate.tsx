import {auth} from "../firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import Head from "next/head";


function authenticate() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [err, setErr] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  const updateDisplayName = async() => {
    const user = auth.currentUser;
    if(user){
      updateProfile(user, {displayName: displayName}).catch((error)=>{console.log(error)})
        const newToken = await user.getIdToken(true);
        console.log(newToken);
    }else{
      console.log("No authentication found")
    }
  }

  const signUp = ()=>{

    createUserWithEmailAndPassword(auth, email, password).then(
      async (userCredential) => {
        setErr('');
        
        const user = userCredential.user;
       
        if(user){
          setIsLoggedIn(true);
        }
        updateProfile(user, {displayName: displayName}).catch((error)=>{console.log(error)})
        const newToken = await user.getIdToken(true);
        // console.log(newToken);
        

      }
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErr(errorCode);
      

    })

    // window.location.reload();
  }

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password).then(
      (userCredential)=>{
        setErr('')
        const user = userCredential.user;
        if(user){
          setIsLoggedIn(true);
        }
      }
    ).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      setErr(errorCode)
    })
  }

  const logOut = () => {
    signOut(auth).then(()=>{
      setIsLoggedIn(false)
    })

  }

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setIsLoggedIn(true)
        // console.log(user);
        // console.log("IdToken");
        user.getIdToken().then((res)=>{console.log(res)})
      }else{
        setIsLoggedIn(false)
      }
    })
  },[])


  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-10">
        <div className="flex items-center flex-col">
          <label htmlFor="email" >Email</label>
          <input onChange={(e) => {setEmail(e.target.value)}} value={email} className="border border-solid border-indigo-500 rounded-md" id="email" type="email" name="email"/>
        </div>
        <br />
        <div className="flex items-center flex-col">
          <label htmlFor="password" >Password</label>
          <input onChange={(e) => {setPassword(e.target.value)}} value={password} className="border border-solid border-indigo-500 rounded-md" id="password" type="password" name="pass" />
        </div>
        <br />
        <div className="flex items-center flex-col">
          <label htmlFor="displayName" >Team Name</label>
          <input onChange={(e) => {setDisplayName(e.target.value)}} value={displayName} className="border border-solid border-indigo-500 rounded-md" id="displayName" type="dispalyName" name="pass" />
        </div>
        <div className="flex items-center flex-col ">
          <button onClick={signUp} className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SignUp</button>
          <button onClick={signIn} className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
        </div>
        <div>
          {err !== '' && <p className="mt-5 text-center text-red-600">{`Error ${err}`}</p>}
        </div>
        <div>
            <p className={`mt-5 text-center ${isLoggedIn ? "text-green-600": 'text-red-400'}`}>{isLoggedIn ? `You have been authenticated.` : `You are Not Authenticated`}</p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="flex items-center flex-col ">
        <button onClick={updateDisplayName} className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update Team Name</button>
          <button onClick={logOut} className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
        </div>
      </div>
    </div>
    
  )
}

export default authenticate;