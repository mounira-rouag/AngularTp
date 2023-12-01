import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { EtudiantEvalComponent } from './etudiant-eval/etudiant-eval.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewEvalComponent } from './new-eval/new-eval.component';
import { EtudiantEvalListComponent } from './etudiant-eval-list/etudiant-eval-list.component';
import { HeaderComponent } from './header/header.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { EtudiantEvalDetailsComponent } from './etudiant-eval-details/etudiant-eval-details.component';


@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
    EtudiantEvalComponent,
    NewEvalComponent,
    EtudiantEvalListComponent,
    HeaderComponent,
    
    LandingPageComponent,
         EtudiantEvalDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
