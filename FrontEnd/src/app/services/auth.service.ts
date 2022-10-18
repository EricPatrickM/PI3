import { Injectable } from '@angular/core';
import {
	Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
  updatePassword
} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { sendPasswordResetEmail, updateEmail } from 'firebase/auth';
import { User } from '../models/usuario';


@Injectable({
	providedIn: 'root'
})
export class AuthService {
	p : User;
	
	constructor( private auth: Auth, private database : AngularFirestore) {}


	ranking(){
		return this.database
		.collection('Users').snapshotChanges();
	}

	async register({email, password, nick}) {
		try {
			const us = await createUserWithEmailAndPassword(this.auth, email, password);
      	this.database.collection('Users').doc(us.user.uid).set({
        nick : nick, 
        email : email, 
        password : password,
		gamesinit : 0,
        gameswin: 0,
        papitestotais : 0,
		palpitesfeitos : 0,
      });
			return us;
		} catch (e) {
      		console.log(e);
			return false;
		}
	}

	async login({ email, password }) {
		try {
			const user = await signInWithEmailAndPassword(this.auth, email, password);
			return user;
		} catch (e) {
			return null;
		}
	}

	async getinf(){
		try{
			const user = await this.auth.currentUser.uid;
			return user; 
		}catch(e){
			return null
		}
	}

	checkauth(){
		console.log(this.auth.currentUser.uid)
		return this.auth.currentUser.uid;
	}

	getPerfil(){
		console.log("Entrou 2");
		return this.database
		.collection('Users')
		.doc(this.auth.currentUser.uid).valueChanges();
	}

	updateProfile({ password, nick}){
		updatePassword(this.auth.currentUser, password).then(()=>{
			
		}).catch((error) =>{
			return false;
		});
	}
	async recoverypass({email}) : Promise<boolean>{
		return sendPasswordResetEmail(this.auth, email).then(() => {
			return true;
		}).catch((error) => {
			console.log(error);
			return false;
		});
	}

	logout() {
		if(signOut(this.auth)){
			return false;
		}
		else{
			return true;
		}
	}
}