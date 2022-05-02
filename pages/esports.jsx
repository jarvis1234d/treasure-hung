import Head from "next/head"
import Image from "next/image"
import {ChevronDownIcon} from "@heroicons/react/solid"


function esports() {
  return (
    <div>
        <div className="">
            <Head>
                <title>Gaming | TechnoHolix - 2K22</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="md:hidden absolute top-0 left-0 -z-10 h-screen w-screen" >
                <Image  priority={true} src="/images/maingame.png" layout="fill" objectFit="cover"/>
            </div>
            <main>
                <div>
                    <h1 className="hidden md:block text-white md:text-black tracking-widest text-center mt-[30vh] mb-5 text-2xl font-extrabold" >GAMING AT TECHNOHOLIX 2K22</h1>
                    <h1 className="text-white md:text-black tracking-widest text-center md:mt-4 mt-[30vh] mb-5 text-2xl font-extrabold">READY.<br />SET.<br />PLAY.<br /></h1>
                   <div className="mt-[25vh] md:mt-5 md:text-black text-white">
                       <div className="md:hidden h-10 w-10 mr-auto ml-auto">
                           <ChevronDownIcon />
                       </div>
                        <p className="text-center mt-9 pl-2 pr-2 text-olg font-bold">Click on the game you want to participate in.</p>
                        <div className="flex space-x-9 items-center justify-center">
                            <p className="text-center hover:cursor-pointer mt-9 mb-5 text-base font-bold"><a href="https://forms.gle/crxVPz7up9NjgdwJ7 ">BGMI</a></p>
                            <p className="text-center hover:cursor-pointer mt-9 mb-5 text-base font-bold"><a href="https://forms.gle/kNFXJ1gJqx2GKhim6 ">CS 1.6</a></p>
                            <p className="text-center hover:cursor-pointer mt-9 mb-5 text-base font-bold"><a href="https://forms.gle/MAr9h3Dg9s1UsBDh9">NFS 2005</a></p>
                        </div>
                   </div>
                        
                    
                </div>
            </main>
        </div>
    </div>
  )
}

export default esports