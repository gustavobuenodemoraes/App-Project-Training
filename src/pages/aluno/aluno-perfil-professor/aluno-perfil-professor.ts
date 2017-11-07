import { AlunoSelecaoPage } from './../aluno-selecao/aluno-selecao';
import { ProfessorServiceProvider } from './../../../providers/professor-service/professor-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-aluno-perfil-professor',
  templateUrl: 'aluno-perfil-professor.html',
})
export class AlunoPerfilDoProfessorPage {
  professor = {codigo: "", nome: "", email: "", dtNascimento: "", confef:"", telefone:"", sexo:""};
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private professorService: ProfessorServiceProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {

  }

  deixarProfessor(): void {
    let confirm = this.alertCtrl.create({
      title: 'Deixar Professor',
      message: 'Você tem certeza que não quer mais esse professor?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.abandonarAluno();
            this.goToSelecionarProfessor();
          }
        }
      ]
    });
    confirm.present();
  }

  abandonarAluno(){
    this.showLoader();
    this.professorService.abandonarProfessor(localStorage.getItem('codUsuarioLogado')).then((result) => {
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast("Ocorreu um erro ao tentar salvar o exercicio!");
    });
  }

  showLoader() {
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
    toast.present();
  }

  ionViewDidEnter() {
    this.professorService.mostrarProfessorDoAluno(localStorage.getItem('codUsuarioLogado'))
      .subscribe(resultado => {
        this.professor = resultado
    })
  }

  goToSelecionarProfessor() {
    this.navCtrl.setRoot(AlunoSelecaoPage);
  }

}
