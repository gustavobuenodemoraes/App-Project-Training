import { ProfessorServiceProvider } from './../../../providers/professor-service/professor-service';
import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-configuracao-professor',
  templateUrl: 'configuracao-professor.html',
})
export class ConfiguracaoProfessorPage {

  public base64Image: any;
  public professor = {nome:"", confef:"", dtNascimento: "", codigo:"", foto: ""};
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private professorService: ProfessorServiceProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController) {
  }
  
  ngOnInit() {
    this.atualizarDados();
  }

  atualizarDados(){
        this.professorService.mostrarProfessor(localStorage.getItem('codUsuarioLogado'))
      .subscribe(resultado => this.professor = resultado)
  }

  salvarConfiguracao(){
    this.showLoader();
    this.professorService.salvarProfessor(this.professor).then((result) => {
      this.atualizarDados();
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

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
