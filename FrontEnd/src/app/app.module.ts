import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';

import { AngularFireDatabaseModule }
from '@angular/fire/compat/database';
import { AngularFirestoreModule }
from '@angular/fire/compat/firestore';
import { environment }
from 'src/environments/environment.prod';
import { AngularFireModule } from '@angular/fire/compat';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { RulesComponent } from './components/rules/rules.component';
import { RecoveryPage } from './pages/recovery/recovery.page';
import { ProfilePageModule } from './pages/profile/profile.module';
import { ProfilePage } from './pages/profile/profile.page';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RankingPage } from './pages/ranking/ranking.page';

 
@NgModule({
  declarations: [AppComponent, AboutUsComponent, RulesComponent, ProfilePage, RankingPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
		provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
		provideAuth(() => getAuth()),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
		provideStorage(() => getStorage())],
  providers: [ { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
