import Head from "next/head";
import md5 from "md5";
import { useState } from "react";
import {Oval} from "react-loading-icons";

function qr({msg}) {

  const [loading, setLoading] = useState(true);

  function handleLoading(){
    setLoading(false);
  }

   setInterval(handleLoading, 2000);



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
            <p className="text-center text-white text-2xl font-extrabold">Your Clue: {msg.hint}</p>
          <br /><br /><br />
          <p className="text-center text-white text-lg font-extrabold ">QR Code Id: {msg.url}</p>
          </div>
      </main>

    </div>
  )
}

export const getServerSideProps = async(context) => {

  const activeLinks = [
    {
      url: "1",
      hint: "This is hint for 1 🇮🇳"
    },
    {
      url: "2",
      hint: "This is hint for 2 🐼"
    },
    {
      url: "3",
      hint: "This is hint for 3 🐘"
    },
    {
      url: "4",
      hint: "This is hint for 4 🦏"
    },
    {
      url: "5",
      hint: "This is hint for 5 💔"
    },
    {
      url: "6",
      hint: "This is hint for 6 🥑"
    },
    {
      url: "7",
      hint: "This is hint for 7 🥑"
    },
    {
      url: "8",
      hint: "This is hint for 8 🥑"
    },
    {
      url: "9",
      hint: "This is hint for 9 🕵🏻‍♀️"
    },
    {
      url: "10",
      hint: "This is hint for 10 🐶"
    },
  ]

    const {hash} = context.query;
    var msg ={
      url: "blank",
      hint: "blank"
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