import Head from "next/head";
import md5 from "md5";
import { useState } from "react";
import {Oval} from "react-loading-icons";
import Image from "next/image";
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

function qr({msg}) {

  const [loading, setLoading] = useState(true);

  function handleLoading(){
    setLoading(false);
  }

   setInterval(handleLoading, 1500);



  return (
    <div className="flex min-h-screen bg-gray-700 flex-col items-center justify-center py-2">
      <Head>
        <title>Success: Treasure Hunt - SOCSE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
          <div className={`${!loading && 'hidden'} flex items-center flex-col`}>
            <Oval height={`3em`} fill={`transparent`} stroke={`#06bcee`} strokeWidth={36} />
            <p className="mt-5 text-[#06bcee]" >Verifying...</p>
          </div>
         
          <div className={`${loading && 'hidden'} flex items-center mt-5  flex-col`}>
            <p className="mt-5 ml-1 mr-1 text-center mb-2 text-white text-2xl font-extrabold">TREASURE HUNT</p>
            {
              msg.img !== null && <div className="pl-2  pr-2 w-full"> <Image className="rounded "  src={msg.img} width={100} height={100} priority={true} layout="responsive" objectFit="contain" /> </div>
            }
            {
              msg.hint !== null && <p className="mt-5 ml-1 mr-1 text-center text-white text-2xl font-extrabold">{msg.hint}</p>
            }

            {
              msg.key !== null && <p className="mt-5 text-center text-white text-2xl font-extrabold">Your Key: {msg.key}</p>
            }

            {
              msg.audio !== null && <div className='w-screen  mt-5 pl-2 pr-2'><AudioPlayer className="!bg-gray-800 rounded" src={msg.audio} preload='metadata' showJumpControls={false} showFilledVolume={false} /></div>
            }
            {
              msg._for !== null && <p className="mt-5 text-center text-white text-base font-bold">For Team(s): {msg._for}</p>
            
            }
             
          <p className="mt-9 text-center text-white text-base font-bold ">For any technical issues contact:<br /> Tarun Suryawanshi - 8308873441</p>
          <div className="pl-2  pr-2 w-[150px] bottom-0 -mb-5 "> <Image className=" "  src="/images/cs0.png" width={100} height={100} priority={true} layout="responsive" objectFit="cover" /> </div>
          
          </div>
      </main>

    </div>
  )
}

export const getServerSideProps = async(context) => {

  const activeLinks = [
    
    {
      url: "demo",
      hint: "This is Demo page",
      img: null,
      key: null,
      _for: null,
      audio: null
    },

  ]

    const {hash} = context.query;
    var msg ={
      url: null,
      hint: null,
      img: null
    };
    
    for(var i = 0; i < activeLinks.length; i++){
      if(md5(activeLinks[i].url) === hash){
        msg = activeLinks[i]
        msg.url = hash
        return {props: {msg}}
      }
    }

    return {
      redirect:{
        premanent: false,
        destination: `/invalidQr`
      }
    }
}

export default qr