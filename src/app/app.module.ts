import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { LocalService } from './../providers/local/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HttpModule } from '@angular/http';
import { RlTagInputModule } from 'angular2-tag-input';
import { AuthService } from '../providers/auth-service/auth-service';
import { ProfessorServiceProvider } from '../providers/professor-service/professor-service';
import { ExercicioServiceProvider } from '../providers/exercicio-service/exercicio-service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataFormatPipe } from '../pipes/data-format/data-format';
import { TreinamentoServiceProvider } from '../providers/treinamento-service/treinamento-service';
/* camera */
import { Camera } from '@ionic-native/camera';
import { AlunosPage } from './../pages/professor/alunos/alunos';
import { TreinamentosPage } from './../pages/professor/treinamentos/treinamentos';
import { ExerciciosPage } from './../pages/professor/exercicios/exercicios';
import { AlunoTreinamentoServiceProvider } from '../providers/aluno-treinamento-service/aluno-treinamento-service';
import { AlunoServiceProvider } from '../providers/aluno-service/aluno-service';
import { CadastroTreinamentoPage } from '../pages/professor/treinamentos/cadastro-treinamento/cadastro-treinamento';
import { ConfiguracaoProfessorPage } from '../pages/professor/configuracao-professor/configuracao-professor';
import { cadastroProfessorPage } from '../pages/cadastro-professor/cadastro-professor';
import { cadastroAlunoPage } from '../pages/cadastro-aluno/cadastro-aluno';
import { CadastroExerciciosPage } from '../pages/professor/exercicios/cadastro-exercicios/cadastro-exercicios';
import { PerfilAlunoPage } from '../pages/professor/alunos/perfil-aluno/perfil-aluno';
import { ProfessorTabsPage } from '../pages/professor/professor-tabs/professor-tabs';
import { AlunoSelecaoPage } from '../pages/aluno/aluno-selecao/aluno-selecao';
import { MenuLateralPage } from '../pages/professor/menu-lateral/menu-lateral';
import { AlunoPerfilProfessorPage } from '../pages/aluno/aluno-selecao/aluno-perfil-professor/aluno-perfil-professor';
import { AlunoTreinamentoPage } from '../pages/aluno/aluno-treinamento/aluno-treinamento';
import { AlunoExercicioPage } from '../pages/aluno/aluno-exercicio/aluno-exercicio';
import { AlunoExercicioDetalhesPage } from '../pages/aluno/aluno-exercicio/aluno-exercicio-detalhes/aluno-exercicio-detalhes';
import { AlunoMenuLateralPage } from '../pages/aluno/aluno-menu-lateral/aluno-menu-lateral';
import { AlunoConfiguracaoPage } from '../pages/aluno/aluno-configuracao/aluno-configuracao';
import { AlertConfirmComponent } from '../components/alert-confirm/alert-confirm';
import { SelecaoAlunoProfessorPage } from '../pages/professor/selecao-aluno-professor/selecao-aluno-professor';
import { DetalhesSelecaoAlunoProfessorPage } from '../pages/professor/selecao-aluno-professor/detalhes-selecao-aluno-professor/detalhes-selecao-aluno-professor';


@NgModule({
  declarations: [
    MyApp,
    /*Page*/
    LoginPage,
    AlunosPage,
    ExerciciosPage,
    TreinamentosPage,
    CadastroTreinamentoPage,
    ConfiguracaoProfessorPage,
    cadastroProfessorPage,
    cadastroAlunoPage,
    CadastroExerciciosPage,
    PerfilAlunoPage,
    ProfessorTabsPage,
    AlunoSelecaoPage,
    MenuLateralPage,
    AlunoPerfilProfessorPage,
    AlunoTreinamentoPage,
    AlunoExercicioPage,
    AlunoExercicioDetalhesPage,
    AlunoMenuLateralPage,
    AlunoConfiguracaoPage,
    SelecaoAlunoProfessorPage,
    DetalhesSelecaoAlunoProfessorPage,
    /*Pipe*/
    DataFormatPipe,
    AlertConfirmComponent
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp, {
      swipeEnabled: "false"
    }),
    RlTagInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AlunosPage,
    ExerciciosPage,
    TreinamentosPage,
    CadastroTreinamentoPage,
    ConfiguracaoProfessorPage,
    cadastroProfessorPage,
    cadastroAlunoPage,
    CadastroExerciciosPage,
    PerfilAlunoPage,
    ProfessorTabsPage,
    AlunoSelecaoPage,
    MenuLateralPage,
    AlunoPerfilProfessorPage,
    AlunoTreinamentoPage,
    AlunoExercicioPage,
    AlunoExercicioDetalhesPage,
    AlunoMenuLateralPage,
    AlunoConfiguracaoPage,
    SelecaoAlunoProfessorPage,
    DetalhesSelecaoAlunoProfessorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    LocalService,
    ProfessorServiceProvider,
    ExercicioServiceProvider,
    TreinamentoServiceProvider,
    AlunoTreinamentoServiceProvider,
    AlunoServiceProvider,
    Camera,
    YoutubeVideoPlayer
  ],
})
export class AppModule { }
