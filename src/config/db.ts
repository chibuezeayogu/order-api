import firebase from 'firebase-admin';
import { config} from 'dotenv';
import firebaseConfig from './config';

config();

firebase.initializeApp({
    credential: firebase.credential.cert(firebaseConfig),
    databaseURL: process.env.DATABASE_URL
})

const db = firebase.firestore();

export default db;
