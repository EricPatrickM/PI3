import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { query, where } from "firebase/firestore";

var crypto = require('crypto');
var hash = crypto.createHash('sha512');

export default class users{
    private firebaseConfig = {
        apiKey: "AIzaSyA0FFKTkXUdXhYSi_IcNz0COgkHOE0wtAU",
        authDomain: "projetointegrador3-fdbe1.firebaseapp.com",
        projectId: "projetointegrador3-fdbe1",
        storageBucket: "projetointegrador3-fdbe1.appspot.com",
        messagingSenderId: "30699496885",
        appId: "1:30699496885:web:219c5436132ae9794365fc"
    };
    
    private app = initializeApp(this.firebaseConfig);
    private db = getFirestore(this.app);

    constructor(){

    }
    
    public async Consult(id:string){
        try{
            const result = query(collection(this.db, "Users"), 
            where('__name__', "==", id));
            const querySnapshot = await getDocs(result);

            if(querySnapshot.empty){
                throw 'vazio'
            }
            let data=querySnapshot.docs[0].data()
            delete data.password;
            delete data.email;
            data.exist=true
            return JSON.stringify(data)
        } catch(e){
            console.log(e)
        }
    } 

    public async Register(nickname:string, password:string, email:string) {
        const d = new Date();
        const time = d.getTime();
        try {
            let data = hash.update(password, 'utf-8');
            let gen_hash= data.digest('hex');

            const docRef = await addDoc(collection(this.db, "Users"), {
                nickName: nickname,
                password: gen_hash,
                createDate: time,
                email: email,
                gameStarted: 0,
                gameWon: 0,
                totalPredict: 0,
                predictDid: 0,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}