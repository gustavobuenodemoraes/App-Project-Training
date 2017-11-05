import { TreinamentoServiceProvider } from './../../../../providers/treinamento-service/treinamento-service';
import { ExercicioServiceProvider } from './../../../../providers/exercicio-service/exercicio-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, Platform, LoadingController, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cadastro-treinamento',
  templateUrl: 'cadastro-treinamento.html',
})
export class CadastroTreinamentoPage {
  id: any;
  titulo = '';

  exerciciosCadastrados: Array<any> = [];

  alterar: boolean = false;

  exercicios: any;

  /*ngModel*/
  serie: number;
  repeticao: number;

  loading: any;

  dataTreinamento = <any>{};
  treinamento: any = { nome: '', codigo: null }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    private exercicioServiceProvider: ExercicioServiceProvider,
    private treinamentoServiceProvider: TreinamentoServiceProvider,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {
    this.id = navParams.get('id');
  }


  /*Parte de cadastro */

  addItem(item: any) {
    this.exerciciosCadastrados.push(item);
    this.limpar();
  }

  removeItem(item: any) {
    console.log(item.codigo);

    let mensagem: string = "Você deseja excluir o exercicio: <br/><br/>" + item.exercicio.nome.toUpperCase() + "<br/><br/>";
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
            if (item.treinamento) {
              this.treinamentoServiceProvider.excluirOrdemTreinos(item).then((result) => {
                this.exerciciosCadastrados.splice(this.exerciciosCadastrados.indexOf(item), 1);
              }, (err) => {
                this.presentToast("Ocorreu um erro ao tentar apagar o exercício da lista, tente novamente!");
              });
            } else {
              this.exerciciosCadastrados.splice(this.exerciciosCadastrados.indexOf(item), 1);
            }
          }
        }
      ]
    });
    confirm.present();
  }

  //#region alterar item de exercicio
  alterarItemExercicio(item: any) {
    let posicao = this.exerciciosCadastrados.indexOf(item);
    // let valores: any = this.exerciciosCadastrados[posicao];

    let alert = this.alertCtrl.create();
    alert.setTitle('Escolha um novo exercicio');

    this.exercicios.forEach(itens => {
      alert.addInput({
        type: 'radio',
        label: itens.nome,
        value: itens
      });
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Salvar',
      handler: data => {
        this.Itemalterado(posicao, data, null, null);
      }
    });
    alert.present();
  }
  //#endregion 

  //#region alterar item de exercicio e serie
  alterarItemSerieExercicio(item: any) {
    let posicao = this.exerciciosCadastrados.indexOf(item);
    let valores: any = this.exerciciosCadastrados[posicao];

    let prompt = this.alertCtrl.create({
      title: 'Alterar',
      inputs: [
        {
          name: 'serie',
          placeholder: 'Série',
          value: String(valores.serie),
          type: 'number'
        },
        {
          name: 'repeticao',
          placeholder: 'Repetição',
          value: String(valores.repeticao),
          type: 'number'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
        },
        {
          text: 'Salvar',
          handler: data => {
            this.Itemalterado(posicao, null, data.serie, data.repeticao);
          }
        }
      ]
    });
    prompt.present();
  }
  //#endregion 

  private Itemalterado(posicao, exericio?, serie?, repeticao?) {
    if (exericio && exericio != null) {
      this.exerciciosCadastrados[posicao].exercicio = exericio;
    } else {
      this.exerciciosCadastrados[posicao].serie = serie;
      this.exerciciosCadastrados[posicao].repeticao = repeticao;
    }
  }


  private alterarTreinamento() {
    this.treinamentoServiceProvider.listarOrdemDeTreinamentosExercicios(this.id)
      .subscribe(resultado => {
        this.exerciciosCadastrados = resultado
        this.exerciciosCadastrados.filter(resultado => {
          this.treinamento.nome = resultado.treinamento.nome;
          this.treinamento.codigo = resultado.treinamento.codigo;
        });
      })
  }

  private limpar() {
    this.repeticao = null;
    this.serie = null;
  }

  salvarTreinamento() {
    this.showLoader();
    this.treinamentoServiceProvider.salvarTreinamentos(this.treinamento)
      .then((result) => {
        this.dataTreinamento = result;
        this.salvarOrdemTreinos(this.dataTreinamento.codigo);
        this.loading.dismiss();
      }, (err) => {
        this.loading.dismiss();
        this.presentToast("Ocorreu um erro ao tentar salvar o treinamento!");
      });
  }

  salvarOrdemTreinos(codTreino) {
    // console.log(codTreino, this.exerciciosCadastrados);
    this.treinamentoServiceProvider.salvarOrdemTreinos(codTreino, this.exerciciosCadastrados).then((result) => {

    }, (err) => {
      this.presentToast("Ocorreu um erro ao tentar salvar o exercicio no treinamento!");
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

  ionViewDidEnter() {
    this.exercicioServiceProvider.listarExercicios()
      .subscribe(resultado => {
        this.exercicios = resultado;
      });
    if (this.id == null) {
      this.titulo = "Novo"
    } else {
      this.titulo = "Alterar"
      this.alterarTreinamento();
    }
  }

}
