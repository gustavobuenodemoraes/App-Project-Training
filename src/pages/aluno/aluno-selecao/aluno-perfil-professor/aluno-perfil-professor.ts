import { ProfessorServiceProvider } from './../../../../providers/professor-service/professor-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { LocalService } from '../../../../providers/local/login.service';


@IonicPage()
@Component({
  selector: 'page-aluno-perfil-professor',
  templateUrl: 'aluno-perfil-professor.html',
})
export class AlunoPerfilProfessorPage {
  codigo: any;
  loading: any;
  professor: any = '';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private professorService: ProfessorServiceProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
    this.codigo = navParams.get('codigo');
  }

  ionViewDidLoad() {
    this.professorService.mostrarProfessor(this.codigo)
      .subscribe(resultado => this.professor = resultado);
  }

  enviarSolicitacao(){
    this.showLoader();
    this.professorService.enviarSolicitacaoParaProfessor(this.codigo).then((result) => {
      this.loading.dismiss();
      this.presentToast("Solicitação enviada aguarde o professor responder!");
    }, (err) => {
    	this.loading.dismiss();
        this.presentToast("Ocorreu um erro ao tentar enviar solicitação!");
    });
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Salvando...'
    });

    this.loading.present();
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'bottom',
      dismissOnPageChange: true
  });
  }
}
