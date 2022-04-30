import Head from 'next/head'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

function audio() {
  return (
    
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Audio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='w-screen pl-2 pr-2'>
            <AudioPlayer src="/audio/rickroll.wav" preload='metadata' showJumpControls={false} showFilledVolume={false} />
        </div>
      </main>
    </div>
  )
}

export default audio