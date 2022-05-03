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
              msg.hint !== null && <p className="mt-5 ml-1 mr-1 text-center text-white text-2xl font-extrabold">Your Clue is: {msg.hint}</p>
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
             
          <p className="mt-9 text-center text-white text-base font-bold ">For any technical issues contact: Tarun Suryawanshi - 8308873441</p>

          <div className="pl-2  pr-2 w-[150px] bottom-0 -mb-5 absolute"> <Image className=" "  src="/images/cs0.png" width={100} height={100} priority={true} layout="responsive" objectFit="cover" /> </div>
          </div>
      </main>

    </div>
  )
}

export const getServerSideProps = async(context) => {

  const activeLinks = [
    {
      url: "11",
      hint: "This is hint for 11 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "12",
      hint: "This is hint for 12 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "13",
      hint: "This is hint for 13 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "14",
      hint: "This is hint for 14 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "15",
      hint: "This is hint for 15 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "16",
      hint: "This is hint for 16 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "17",
      hint: "This is hint for 17 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "18",
      hint: "This is hint for 18 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "19",
      hint: "This is hint for 19 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "20",
      hint: "This is hint for 20 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "21",
      hint: "This is hint for 21 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "22",
      hint: "This is hint for 22 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "23",
      hint: "This is hint for 23 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "24",
      hint: "This is hint for 24 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "25",
      hint: "This is hint for 25 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "26",
      hint: "This is hint for 26 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "27",
      hint: "This is hint for 27 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "28",
      hint: "This is hint for 28 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "29",
      hint: "This is hint for 29 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "30",
      hint: "This is hint for 30 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "31",
      hint: "This is hint for 30 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "32",
      hint: "This is hint for 32 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "33",
      hint: "This is hint for 33 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "34",
      hint: "This is hint for 34 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "35",
      hint: "This is hint for 35 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "36",
      hint: "This is hint for 36 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "37",
      hint: "This is hint for 37 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "38",
      hint: "This is hint for 38 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
    {
      url: "39",
      hint: "This is hint for 39 🐶",
      img: null,
      key: null,
      _for: null,
      audio: null
    },
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