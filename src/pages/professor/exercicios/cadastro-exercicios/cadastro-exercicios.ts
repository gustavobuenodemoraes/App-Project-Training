import { ExercicioServiceProvider } from './../../../../providers/exercicio-service/exercicio-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro-exercicios',
  templateUrl: 'cadastro-exercicios.html',
})
export class CadastroExerciciosPage {
  codigo: number;
  loading: any;
  data: any;

  exercicioList: any = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public exercicioService: ExercicioServiceProvider,
    private toastCtrl: ToastController) {
    this.codigo = navParams.get('codigo');
  }

  ionViewDidLoad() {
    if (this.codigo == null) {
      /* só colocar */
      // this.exercicioService.mostraExercicio(this.codigo)
      //   .subscribe(resultado => this.exercicioList = resultado);
    }else{
      this.exercicioList = "Esse é o Codigo: " + this.codigo;
    }
  }

  ngOnInit() {

  }

  doSalvarExercicio(exercicio) {
    this.showLoader();
    this.exercicioService.registerExercicio(exercicio).then((result) => {
      this.data = result;
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
}
