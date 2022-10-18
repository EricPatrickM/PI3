import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class UserFirebaseService {
  private PATH : string = "Users";
  private uid : string;
  
  constructor(private afs : AngularFirestore, private afa : AngularFireAuth) { }

   async getuser() {
    const auth = getAuth();
     await this.afa.onAuthStateChanged( (user) => {
      this.uid = user.uid
  },) 
   }

  getProfile(){
    this.getuser();
    console.log(this.uid);
    return this.afs.collection(this.PATH).doc(this.uid).valueChanges();

  }
}
