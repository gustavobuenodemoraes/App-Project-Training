import { cadastroProfessorPageModule } from './../pages/cadastro-professor/cadastro-professor.module';
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
import { HttpModule } from '@angular/http';
import { RlTagInputModule } from 'angular2-tag-input';
import { CadastroExerciciosPageModule } from '../pages/professor/exercicios/cadastro-exercicios/cadastro-exercicios.module';
import { AuthService } from '../providers/auth-service/auth-service';
import { CadastroTreinamentoPageModule } from '../pages/professor/treinamentos/cadastro-treinamento/cadastro-treinamento.module';
import { ProfessorServiceProvider } from '../providers/professor-service/professor-service';
import { ExercicioServiceProvider } from '../providers/exercicio-service/exercicio-service';
import { ConfiguracaoProfessorPageModule } from '../pages/professor/configuracao-professor/configuracao-professor.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataFormatPipe } from '../pipes/data-format/data-format';
/* camera */
import { Camera } from '@ionic-native/camera';
import { TreinamentoServiceProvider } from '../providers/treinamento-service/treinamento-service';
import { AlunoSelecaoPageModule } from '../pages/aluno/aluno-selecao/aluno-selecao.module';
import { MenuLateralPageModule } from '../pages/professor/menu-lateral/menu-lateral.module';
import { AlunoPerfilProfessorPageModule } from '../pages/aluno/aluno-perfil-professor/aluno-perfil-professor.module';



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    AlunosPage,
    ExerciciosPage,
    TreinamentosPage,
    DataFormatPipe,
  ],
  imports: [
    BrowserModule, HttpModule,
    cadastroProfessorPageModule,
    cadastroAlunoPageModule,
    CadastroExerciciosPageModule,
    PerfilAlunoPageModule,
    ProfessorTabsPageModule,
    CadastroTreinamentoPageModule,
    ConfiguracaoProfessorPageModule,
    IonicModule.forRoot(MyApp, {
      swipeEnabled: "false"
    }),
    RlTagInputModule,
    ReactiveFormsModule,
    FormsModule,
    AlunoSelecaoPageModule,
    MenuLateralPageModule,
    AlunoPerfilProfessorPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AlunosPage,
    ExerciciosPage,
    TreinamentosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    LocalService,
    ProfessorServiceProvider,
    LocalService,
    Camera,
    ExercicioServiceProvider,
    TreinamentoServiceProvider,
  ],
})
export class AppModule { }
