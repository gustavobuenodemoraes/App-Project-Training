import { ExercicioServiceProvider } from './../../../../providers/exercicio-service/exercicio-service';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-cadastro-exercicios',
  templateUrl: 'cadastro-exercicios.html',
})
export class CadastroExerciciosPage {
  titulo: string;
  codigo: number;
  loading: any;
  data: any;

  exercicioList;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public exercicioService: ExercicioServiceProvider,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {
    this.codigo = navParams.get('codigo');
  }

  ionViewDidLoad() {
    if (this.codigo != null) {
      this.exercicioService.findById(this.codigo)
        .subscribe(resultado => this.exercicioList = resultado);
    }
    if (this.codigo != null) {
      this.titulo = "Alterar"
    } else {
      this.titulo = "Novo"
    }
  }

  doSalvarExercicio(exercicio) {
    if (exercicio.codigo == "") {
      exercicio.codigo = 0;
    }
    this.showLoader();
    this.exercicioService.registerExercicio(exercicio).then((result) => {
      this.data = result;
      this.loading.dismiss();
      this.presentToast("Exercicio cadastrado com sucesso!");
      this.navCtrl.pop();
    }, (err) => {
      this.loading.dismiss();
      this.presentToast("Ocorreu um erro ao tentar salvar o exercicio!");
    });
  }

  doExcluirExercicio(exercicio) {
    let mensagem: string = "Você deseja apagar o exercicio: <br/><br/>" + exercicio.nome.toUpperCase() + "<br/><br/>";

    let confirm = this.alertCtrl.create({
      title: "Apagar Exercicio",
      message: mensagem,
      buttons: [
        {
          text: "cancelar",
          role: 'cancel',
        },
        {
          text: "Apagar",
          handler: () => {
            if (exercicio.codigo != null) {
              this.exercicioService.deletarExercicio(exercicio).then((result) => {
                this.presentToast("Exercício excluído com sucesso!");
                this.navCtrl.pop();
              }, (err) => {
                console.log("error: " + err);
                if (err.status == 500) {
                  this.presentToast("Não foi possível excluído o exercício, verifique se o exercício não está vinculado a algum treinamento");
                } else {
                  this.presentToast("Ocorreu um erro ao tentar excluir o exercício, tente novamente!");
                }
              });
            }
          }
        }
      ]
    });
    confirm.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 10000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {

    });

    toast.present();
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Salvando...'
    });

    this.loading.present();
  }

  ngOnInit() {
    this.exercicioList = {
      nome: '',
      musculo: '',
      equipamento: '',
      descricao: '',
      linkVideo: '',
      codigo: ''
    };
  }


}
