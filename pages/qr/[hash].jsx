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
      url: "11",
      hint: "Room ko dhoondo",
      img: "/images/f116.jpg",
      key: "'M'",
      _for: "alpha1, alpha2",
      audio: null
    },
    {
      url: "12",
      hint: "S-128 ke samne hai khamba, khambe ka hi toh hai saara funda",
      img: null,
      key: "'E'",
      _for: "alpha1, alpha2",
      audio: null
    },
    {
      url: "13",
      hint: "Abhi seedha first floor pe jao, dhoondo waha hardware lab, jiske side me chupa hai last clue ka rap.",
      img: null,
      key: "'V'",
      _for: "alpha1, alpha2",
      audio: null
    },
    {
      url: "14",
      hint: null,
      img: null,
      key: "'T'",
      _for: "alpha1, alpha2",
      audio: "/audio/sherayasher.wav"
    },
    {
      url: "15",
      hint: "Dean office on second floor, O building",
      img: null,
      key: "'Y'",
      _for: "Beta1, Beta2",
      audio: null
    },
    {
      url: "16",
      hint: "Ha bhai aa gaye, ab jao S-126 ke sideme notice board ke niche dekhle, clue mila toh aage badhle",
      img: null,
      key: "'D'",
      _for: "Beta1, Beta2",
      audio: null
    },
    {
      url: "17",
      hint: "When its hot you come towards me, and get water bottles filled, I am permanent resident on first floor",
      img: null,
      key: "'V'",
      _for: "Beta1, Beta2",
      audio: null
    },
    {
      url: "18",
      hint: null,
      img: null,
      key: "'H'",
      _for: "Beta1, Beta2",
      audio: "/audio/sherayasher.wav"
    },
    {
      url: "19",
      hint: "MBA wali didi jo aapko roz dekhti hai (poster).",
      img: "/images/mba.jpg",
      key: "'V'",
      _for: "Gamma1, Gamma2",
      audio: null
    },
    {
      url: "20",
      hint: "Woh bhagta hai par chalta nahi, vo gata hai par bolta nahi, wo tower hai jiske do hath aur ek chehra par sar nahi. ",
      img: null,
      key: "'W'",
      _for: "Gamma1, Gamma2",
      audio: null
    },
    {
      url: "21",
      hint: "Wo fudakta hai lambi challang marta hai, real life mei yeh kida piddi sa hai par saala O building ke bahar itna bada kaise hai.",
      img: null,
      key: "'H'",
      _for: "Gamma1, Gamma2, Sigma1, Sigma2",
      audio: null
    },
    {
      url: "22",
      hint: null,
      img: null,
      key: "'H'",
      _for: "Gamma1, Gamma2, Sigma1, Sigma2",
      audio: "/audio/sherayasher.wav"
    },
    {
      url: "23",
      hint: null,
      img: "/images/f118.jpg",
      key: "'Z'",
      _for: "Delta1, Delta2",
      audio: null
    },
    {
      url: "24",
      hint: "O building reception par jao aur mam ko bolo 'Bad Morning'",
      img: null,
      key: "'E'",
      _for: "Delta1, Delta2",
      audio: null
    },
    {
      url: "25",
      hint: null,
      img: "/images/lawn.jpg",
      key: "'A'",
      _for: "Delta1, Delta2",
      audio: null
    },
    {
      url: "26",
      hint: null,
      img: null,
      key: "'V",
      _for: "Delta1, Delta2, Mu1, Mu2",
      audio: "/audio/sherayasher.wav"
    },
    {
      url: "27",
      hint: "Ek kaam karo, O building ground floor pe jake, Reception ki mam ko bolo 'May I help you Mam'",
      img: null,
      key: "'A'",
      _for: "Sigma1, Sigma2",
      audio: null
    },
    {
      url: "28",
      hint: "Woh bhagta hai par chalta nahi, vo gata hai par bolta nahi, wo tower hai jiske do hath aur ek chehra par sar nahi. ",
      img: null,
      key: "'F'",
      _for: "Sigma1, Sigma2",
      audio: null
    },
    {
      url: "29",
      hint: null,
      img: "/images/kaby.jpg",
      key: "'X'",
      _for: "Mu1, Mu2",
      audio: null
    },
    {
      url: "30",
      hint: "Ek kam karo O building ke reception par jakar mam ko bolo, 'Mam Bhuk lagi hai.'",
      img: null,
      key: "'W'",
      _for: "Mu1, Mu2",
      audio: null
    },
    // {
      // url: "31",
      // hint: null,
      // img: "/images/lawn.jpg",
      // key: "'M'",
      // _for: "Mu1, Mu2",
      // audio: null
    // },
    // {
    //   url: "32",
      // hint: "This is hint for 32 🐶",
      // img: null,
      // key: null,
      // _for: null,
      // audio: null
    // },
    // {
      // url: "33",
      // hint: "This is hint for 33 🐶",
      // img: null,
      // key: null,
      // _for: null,
      // audio: null
    // },
    // {
      // url: "34",
      // hint: "This is hint for 34 🐶",
      // img: null,
      // key: null,
      // _for: null,
      // audio: null
    // },
    // {
      // url: "35",
      // hint: "This is hint for 35 🐶",
      // img: null,
      // key: null,
      // _for: null,
      // audio: null
    // },
    // {
      // url: "36",
      // hint: "This is hint for 36 🐶",
      // img: null,
      // key: null,
      // _for: null,
      // audio: null
    // },
    // {
      // url: "37",
      // hint: "This is hint for 37 🐶",
      // img: null,
      // key: null,
      // _for: null,
      // audio: null
    // },
    // {
      // url: "38",
      // hint: "This is hint for 38 🐶",
      // img: null,
      // key: null,
      // _for: null,
      // audio: null
    // },
    {
      url: "39",
      hint: "Congratulations!!! You've successfully completed treasure hunt. Now go to the Anchors and submit your all keys in sequence",
      img: "/images/winner.gif",
      key: "'C'",
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