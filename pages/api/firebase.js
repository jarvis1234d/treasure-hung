// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
// import { useRouter } from "next/router";
// import { initializeApp } from "firebase/app";
import md5 from "md5";
import { collection, addDoc, getDocs,getDoc, doc, setDoc, Timestamp} from "firebase/firestore"; 
import {db} from "../../firebase-config";
import {adminApp} from "../../adminfire"
import { getAuth } from "firebase-admin/auth";



const checktimer = async(database, data, teamnum, index) =>{

  const settingResponse = await getDoc(doc(database, 'settings', 'a2DOEPbynemlZUGZcA8z')).catch((e)=> {
    console.log('From req to settings document on db', e);
  })
  
  const isEnabled = settingResponse.data().timer;
  if(isEnabled){
    
    const currentTStamp = Timestamp.now()
    if(!data.isTimerSet){
        const delay = settingResponse.data().delay;

       ;  
        const TstampForIndex = new Timestamp(currentTStamp.seconds + delay, 0);
  
        await setDoc(doc(database, teamnum, index), {
          openAfter: TstampForIndex,
          isTimerSet: true
        }, {merge: true}).catch((e)=>{console.log("from setDoc insisde checkTimer: ", e)})
        true
    }else{

      if(data.openAfter.seconds > currentTStamp.seconds){
        return false
      }else{
        
        return true;
      }
    }


    
    // console.log(currentTStamp.seconds, openAfter.seconds);
    

    
  }else{
    return true;
  }

  
}


const allow = async(database, teamnum, index) => {
  await setDoc(doc(database, teamnum, String(Number(index)+1)), {
    isAllowed: true
  }, {merge: true})
}

const getTeam = async(database, teamnum, qrnum) => {
  const docRef = doc(database, teamnum, qrnum);
  const revData = await getDoc(docRef).catch((e)=>{console.log(e)});
      // var dat= {};
      // let index = 1;
      // revData.forEach((doc) => {
      //   dat[String(index)] = doc.data();
      //   index++;
      // })
      return revData.data();
}
const handler = async(req, res) => {
  // const router = useRouter();
  
  
  const {authorization} = req.headers
  const decodedToken = await getAuth(adminApp).verifyIdToken(authorization).catch((erro)=>console.log(erro));
  // console.log("Decoded: ",decodedToken)
  if(decodedToken === undefined){
    res.status(401).send('token_expired');
    return
  }


  // console.log("Authorization:", authorization);

  const team = decodedToken.name;
  const {index, hash} = req.query;
  if(team === undefined || index === undefined || hash === undefined){
    res.status(400).send("unsufficient Parameters");
    return
  }

    try{
      const data = await getTeam(db, team, index);
      // res.status(200).json(data);
      if(md5(data.location) == hash){
        if(data.isAllowed === true){
          const timepassed = await checktimer(db, data, team, index);
          if(timepassed){
            await allow(db, team, index).catch((e)=> console.log(e));
            const response = {
              type: data.type,
              clue: data.clue
            }
            res.status(200).json(response);
            return   
          }else{
            const response = {
              reason: "too_early"
            }
            res.status(403).json(response);
            return
          }
        }else{
          const response = {
            reason: "qr_missed"
          }
          res.status(403).json(response);
          return
        }
        
      }else{
        res.status(401).json({response: "unauthorised_qr"});
        return 
      }
           
    }catch(e){
      res.status(404).json(e)
    }
}

export default handler;
