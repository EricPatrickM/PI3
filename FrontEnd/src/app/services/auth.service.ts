import { Injectable } from '@angular/core';
import {
	Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
  user
} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private auth: Auth, private database : AngularFirestore) {}

	async register({email, password, nick}) {
		try {
			const us = await createUserWithEmailAndPassword(this.auth, email, password);
      this.database.collection('Users').doc(us.user.uid).set({
        nick : nick, 
        email : email, 
        password : password,
        victory : 0,
        hist : 0, 
      });
			return us;
		} catch (e) {
      console.log(e);
			return null;
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

	logout() {
		return signOut(this.auth);
	}
}