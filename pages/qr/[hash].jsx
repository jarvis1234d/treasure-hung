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
      <main className="">
          <div className={`${!loading && 'hidden'} flex items-center flex-col`}>
            <Oval height={`3em`} fill={`transparent`} stroke={`#06bcee`} strokeWidth={36} />
            <p className="mt-5 text-[#06bcee]" >Verifying...</p>
          </div>
          <div className={`${loading && 'hidden'} flex items-center flex-col`}>
            {
              msg.img !== null && <div className="pl-2  pr-2 w-full"> <Image className="rounded "  src={msg.img} width={100} height={100} priority={true} layout="responsive" objectFit="cover" /> </div>
            }
            {
              msg.hint !== null && <p className="mt-5 text-center text-white text-2xl font-extrabold">Your Key: {msg.hint}</p>
            }

            {
              msg.audio !== null && <div className='w-screen  mt-5 pl-2 pr-2'><AudioPlayer className="!bg-gray-800 rounded" src={msg.audio} preload='metadata' showJumpControls={false} showFilledVolume={false} /></div>
            }
            
          
          <p className="mt-9 text-center text-white text-lg font-extrabold ">QR Code Id: {msg.url}</p>
          </div>
      </main>

    </div>
  )
}

export const getServerSideProps = async(context) => {

  const activeLinks = [
    {
      url: "1",
      hint: "'KEY'",
      img: "/images/Donut.png",
      audio: null
    },
    {
      url: "2",
      hint: "This is hint for 2 🐼",
      img: null,
      audio: "/audio/rickroll.wav"
    },
    {
      url: "3",
      hint: "This is hint for 3 🐘",
      img: null,
      audio: null
    },
    {
      url: "4",
      hint: "This is hint for 4 🦏",
      img: null,
      audio: null
    },
    {
      url: "5",
      hint: "This is hint for 5 🦏",
      img: null,
      audio: null
    },
    {
      url: "6",
      hint: "Hello 🐼",
      img: "/images/Autumn-leaves.jpg",
      audio: null
    },
    {
      url: "7",
      hint: "This is hint for 7 🥑",
      img: null,
      audio: null
    },
    {
      url: "8",
      hint: "This is hint for 8 🥑",
      img: null,
      audio: null
    },
    {
      url: "9",
      hint: "This is hint for 9 🕵🏻‍♀️",
      img: null,
      audio: null
    },
    {
      url: "10",
      hint: "This is hint for 10 🐶",
      img: null,
      audio: null
    },
    {
      url: "11",
      hint: "This is hint for 11 🐶",
      img: null,
      audio: null
    },
    {
      url: "12",
      hint: "This is hint for 12 🐶",
      img: null,
      audio: null
    },
    {
      url: "13",
      hint: "This is hint for 13 🐶",
      img: null,
      audio: null
    },
    {
      url: "14",
      hint: "This is hint for 14 🐶",
      img: null,
      audio: null
    },
    {
      url: "15",
      hint: "This is hint for 15 🐶",
      img: null,
      audio: null
    },
    {
      url: "16",
      hint: "This is hint for 16 🐶",
      img: null,
      audio: null
    },
    {
      url: "17",
      hint: "This is hint for 17 🐶",
      img: null,
      audio: null
    },
    {
      url: "18",
      hint: "This is hint for 18 🐶",
      img: null,
      audio: null
    },
    {
      url: "19",
      hint: "This is hint for 19 🐶",
      img: null,
      audio: null
    },
    {
      url: "20",
      hint: "This is hint for 20 🐶",
      img: null,
      audio: null
    },
    {
      url: "21",
      hint: "This is hint for 21 🐶",
      img: null,
      audio: null
    },
    {
      url: "22",
      hint: "This is hint for 22 🐶",
      img: null,
      audio: null
    },
    {
      url: "23",
      hint: "This is hint for 23 🐶",
      img: null,
      audio: null
    },
    {
      url: "24",
      hint: "This is hint for 24 🐶",
      img: null,
      audio: null
    },
    {
      url: "25",
      hint: "This is hint for 25 🐶",
      img: null,
      audio: null
    },
    {
      url: "26",
      hint: "This is hint for 26 🐶",
      img: null,
      audio: null
    },
    {
      url: "27",
      hint: "This is hint for 27 🐶",
      img: null,
      audio: null
    },
    {
      url: "28",
      hint: "This is hint for 28 🐶",
      img: null,
      audio: null
    },
    {
      url: "29",
      hint: "This is hint for 29 🐶",
      img: null,
      audio: null
    },
    {
      url: "30",
      hint: "This is hint for 30 🐶",
      img: null,
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