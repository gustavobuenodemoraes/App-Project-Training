import { ProfessorTabsPageModule } from './../pages/professor/professor-tabs/professor-tabs.module';
import { PerfilAlunoPageModule } from './../pages/professor/alunos/perfil-aluno/perfil-aluno.module';
import { LocalService } from './../providers/local/login.service';
import { TreinamentosPage } from './../pages/professor/treinamentos/treinamentos';
import { ExerciciosPage } from './../pages/professor/exercicios/exercicios';
import { AlunosPage } from './../pages/professor/alunos/alunos';
import { cadastroAlunoPageModule } from './../pages/cadastro-aluno/cadastro-aluno.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';
import { RlTagInputModule } from 'angular2-tag-input';
import { MenuLateralPageModule } from '../pages/professor/menu-lateral/menu-lateral.module';
import { ImagensComponent } from '../components/imagens/imagens';
import { CadastroExerciciosPageModule } from '../pages/professor/exercicios/cadastro-exercicios/cadastro-exercicios.module';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AlunosPage,
    ExerciciosPage,
    TreinamentosPage,
    ImagensComponent,
  ],
  imports: [
    BrowserModule, HttpModule,
    cadastroAlunoPageModule,
    cadastroAlunoPageModule,
    IonicModule.forRoot(MyApp),
    RlTagInputModule,
    PerfilAlunoPageModule,
    MenuLateralPageModule,
    ProfessorTabsPageModule,
    CadastroExerciciosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AlunosPage,
    ExerciciosPage,
    TreinamentosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    LocalService
  ],
})
export class AppModule { }
