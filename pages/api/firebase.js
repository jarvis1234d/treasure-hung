// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
// import { useRouter } from "next/router";
// import { initializeApp } from "firebase/app";
import md5 from "md5";
import { collection, addDoc, getDocs,getDoc, doc, setDoc} from "firebase/firestore"; 
import {db} from "../../firebase-config";
import {adminApp} from "../../adminfire"
import { getAuth } from "firebase-admin/auth";






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
          await allow(db, team, index).catch((e)=> console.log(e));
          const response = {
            type: data.type,
            clue: data.clue
          }
          res.status(200).json(response);
          return
        }else{
          const response = {
            reason: "You've missed the qr code before this."
          }
          res.status(403).json(response);
        }
      }else{
        res.status(401).json({response: "wrong_hash"}); 
      }
           
    }catch(e){
      res.status(404).json(e)
    }
}

export default handler;
