import { ProfessorPage } from './../pages/professor/professor';
import { TreinamentosPage } from './../pages/professor/treinamentos/treinamentos';
import { ExerciciosPage } from './../pages/professor/exercicios/exercicios';
import { AlunosPage } from './../pages/professor/alunos/alunos';
import { ProfessorPageModule } from './../pages/cadastro-professor/cadastro-professor.module';
import { AlunoPageModule } from './../pages/cadastro-aluno/cadastro-aluno.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http'; 
import {RlTagInputModule} from 'angular2-tag-input';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AlunosPage,
    ExerciciosPage,
    TreinamentosPage,
    ProfessorPage,
  ],
  imports: [
    BrowserModule, HttpModule,
    AlunoPageModule,
    ProfessorPageModule,
    IonicModule.forRoot(MyApp),
    RlTagInputModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AlunosPage,
    ExerciciosPage,
    TreinamentosPage,
    ProfessorPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ],
})
export class AppModule {}
