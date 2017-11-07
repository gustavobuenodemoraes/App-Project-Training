import { AlunoServiceProvider } from './../../../providers/aluno-service/aluno-service';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-aluno-configuracao',
  templateUrl: 'aluno-configuracao.html',
})
export class AlunoConfiguracaoPage {
  base64Image: any;
  aluno = {nome:"", dtNascimento: "", codigo:"", foto: "", email: "", peso: "", altura: ""};
  loading: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private alunoService: AlunoServiceProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController ) {

  }
  doSalvarConfigutacao(formulario): void {
    this.showLoader();
    this.alunoService.salvarAluno(this.aluno).then((result) => {
      this.atualizarDados();
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast("Ocorreu um erro ao tentar salvar o exercicio!");
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 6000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Salvando...'
    });

    this.loading.present();
  }

  ionViewDidLoad() {
  }

  ngOnInit() {
    this.atualizarDados();
  }

  atualizarDados(){
      this.alunoService.mostrarAluno(localStorage.getItem('codUsuarioLogado'))
    .subscribe(resultado => this.aluno = resultado)
  }
}
