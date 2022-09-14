import Head from "next/head";
// import md5 from "md5";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth"
import {auth} from "../firebase-config";
import {Oval} from "react-loading-icons";
import Image from "next/image";
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { query } from "firebase/firestore";

const fetchData = async (token, index, hash) => {
  const MyHeaders = new Headers();
  MyHeaders.append('authorization', token)

  const res = await fetch(`https://treasure-hunt007.herokuapp.com/api/firebase?index=${index}&hash=${hash}`,{
    method: 'GET',
    headers: MyHeaders
  })
  const response = await res.json();
  console.log(response)
  // if(res.status == 401) router.push('/unauthorised');
  return response;
}

function qr() {
  const router = useRouter();
  const index = router.query.index;
  const hash = router.query.hash;
  // const {index, hash} = router.query;
  // console.log(router);

  // const [loading, setLoading] = useState(true);

  // const [token, settoken] = useState('')
  const [data, setData] = useState({});
  let updatedData = {};



    // useEffect(() => {

            
    //     onAuthStateChanged(auth,(user)=>{
    //         if( user ){
    //           user.getIdToken(true).then((idToken) => {

    //             if(idToken !== undefined && query.index !== undefined && query.hash !== undefined){
    //               fetchData(idToken, query.index, query.hash).then(res => {
    //                 console.log(res);
    //               });
    //             }

    //           })
              
                
    //         }else{
              
    //         }
    //     })
    // }, [])

    // useEffect(() => {
    //   console.log(router.query);
    // }, [router.isReady]);

    useEffect(() => {
      if(!router.isReady) return
      onAuthStateChanged(auth,(user)=>{
        if( user ){
          user.getIdToken().then((idToken) => {
            // console.log(index);
            
            
            if(idToken !== undefined && index !== undefined && hash !== undefined){
              
              fetchData(idToken, index, hash).then(res => {
                updatedData = res;
                setData(data =>({
                    ...data,
                    ...updatedData
                  }))
                  
                }).catch((error)=>{
                  console.log("From fetch Data: ", error);
                })
              }else{
              console.log("problem with id token")
            }
            

          }).catch((error) =>{
            console.log("From getIdToken: ",error);
          })    
        }else{
          router.push("/unauthorised");
          console.log("Unauthorized");  
        }
      })
    },[router.isReady])
    
    
    
  // function handleLoading(){
  //   setLoading(false);
  // }

  //  setInterval(handleLoading, 1500);

   
  


  return (
    <div className="flex min-h-screen bg-gray-700 flex-col items-center justify-center py-2">
      <Head>
        <title>Success: Treasure Hunt - SOCSE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        {/* <div className={`${!loading && 'hidden'} flex items-center flex-col`}>
            <Oval height={`3em`} fill={`transparent`} stroke={`#06bcee`} strokeWidth={36} />
            <p className="mt-5 text-[#06bcee]" >Verifying...</p>
          </div> */}
         
          <div className={`${/*loading && 'hidden'*/ ''} flex items-center mt-5  flex-col`}>
            <p className="mt-5 ml-1 mr-1 text-center mb-2 text-white text-2xl font-extrabold">TREASURE HUNT</p>
            {
              data.type === 'img' && <div className="pl-2  pr-2 w-full"> <Image className="rounded "  src={data.clue} width={100} height={100} priority={true} layout="responsive" objectFit="contain" /> </div>
            }
            {
              data.type === 'text' && <p className="mt-5 ml-1 mr-1 text-center text-white text-2xl font-extrabold">{data.clue}</p>
            }

            {/* {
              msg.key !== null && <p className="mt-5 text-center text-white text-2xl font-extrabold">Your Key: {msg.key}</p>
            } */}

            {
              data.type === 'audio' && <div className='w-screen  mt-5 pl-2 pr-2'><AudioPlayer className="!bg-gray-800 rounded" src={data.clue} preload='metadata' showJumpControls={false} showFilledVolume={false} /></div>
            }
            {/* {
              msg._for !== null && <p className="mt-5 text-center text-white text-base font-bold">For Team(s): {msg._for}</p>
            
            } */}
             
          <p className="mt-9 text-center text-white text-base font-bold ">For any technical issues contact:<br /> Tarun Suryawanshi - 8308873441</p>
          <div className="pl-2  pr-2 w-[150px] bottom-0 -mb-5 "> <Image className=" "  src="/images/cs0.png" width={100} height={100} priority={true} layout="responsive" objectFit="cover" /> </div>
          
          </div>
          
      </main>

    </div>
  )
}



export default qr