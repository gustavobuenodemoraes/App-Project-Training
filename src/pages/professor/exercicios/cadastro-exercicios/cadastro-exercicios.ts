import { ExercicioServiceProvider } from './../../../../providers/exercicio-service/exercicio-service';
import { LocalService } from './../../../../providers/local/login.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro-exercicios',
  templateUrl: 'cadastro-exercicios.html',
})
export class CadastroExerciciosPage {
  exercicio = { nome: '', descricao: '' };;
  id: any;
  loading: any;
  data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private localservice: LocalService, 
    public loadingCtrl: LoadingController, public exercicioService: ExercicioServiceProvider, private toastCtrl: ToastController) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
  }

  ngOnInit() {
    //this.localservice.mostraExercicio(this.id)
    //.subscribe(resultado => this.exercicio = resultado)
  }

  doSalvarExercicio() {
    this.showLoader();
    this.exercicioService.registerExercicio(this.exercicio).then((result) => {
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
  
  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Salvando...'
    });

    this.loading.present();
  }
}
