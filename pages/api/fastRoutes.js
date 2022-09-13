import { collection, addDoc, getDocs,getDoc, doc, setDoc} from "firebase/firestore"; 
import {db} from "../../firebase-config";
// import { getAuth } from "firebase-admin/auth";


const handler = async(req, res) => {

    const {team, qrnum, location, type, clue} = req.query;
    console.log(team, qrnum, location, type, clue)
    const qrDoc = doc(db, team, qrnum); 
    const some = await setDoc(qrDoc, {
        location: location,
        type: type,
        clue: clue
    }, {merge: true})

    res.status(200).send("Done");

}

export default handler;