import Head from "next/head"
import { useTimer } from 'react-timer-hook'

function MyTimer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,     
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
    return (
        <div style={{textAlign: 'center'}}>
          <div style={{fontSize: '80px'}} className="mt-10 text-white text-xl font-extrabold">
            <span>{minutes}</span>:<span>{seconds}</span>
          </div>
        </div>
      );
    }
  
  


function timer() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 300);

  return (
    <div className="flex bg-red-500 min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Timer: Treasure Hunt - SOCSE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mr-2 ml-2">
          <h1 className="text-center text-white text-xl font-extrabold">Your are a Little bit Early. Wait For 5 Minutes and Scan the QR Code Again to view your Clue.</h1>

          <MyTimer  expiryTimestamp={time} />

      </main>
      </div>
  )
}

export default timer