import {auth} from "../firebase-config";
import {onAuthStateChanged} from "firebase/auth";
import {useEffect, useState} from "react"
// import { GetServerSideProps } from "next"


function restricted() {
    const [msg, setMsg] = useState('')

    useEffect(() => {
        onAuthStateChanged(auth,(user)=>{
            if( user && user.displayName === "admin"){
                setMsg(user.email ? user.email : '');
                
            }else{
                setMsg("You are not authorised to access this page. Please Login")
            }
        })
    },[])

    return (
        <div>{msg}</div>
    )
}

export default restricted