import { credential } from 'firebase-admin'
import { initializeApp} from 'firebase-admin/app' 
import {getAuth} from "firebase-admin/auth"
import { firebaseAdminConfig } from './firebase-admin-config'



var adminApp = undefined


try{
    adminApp = initializeApp({
        credential: credential.cert(firebaseAdminConfig)
    })
} catch (error) {
    if (!/already exists/u.test(error.message)) {
        console.error('Firebase admin initialization error', error.stack)
    }
}

// try {
//   admin.initializeApp({
//     credential: admin.credential.cert(firebaseAdminConfig),
//   })
//   console.log('Initialized.')
// } catch (error) {
//   /*
//    * We skip the "already exists" message which is
//    * not an actual error when we're hot-reloading.
//    */
//   if (!/already exists/u.test(error.message)) {
//     console.error('Firebase admin initialization error', error.stack)
//   }
// }

export default adminApp;