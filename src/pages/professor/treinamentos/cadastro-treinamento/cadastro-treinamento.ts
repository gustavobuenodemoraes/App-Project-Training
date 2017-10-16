import { listaExercicios } from './cadastro-treinamento.model';
import { Component, ContentChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, Platform } from 'ionic-angular';
import { ExercicioServiceProvider } from '../../../../providers/exercicio-service/exercicio-service';

@IonicPage()
@Component({
  selector: 'page-cadastro-treinamento',
  templateUrl: 'cadastro-treinamento.html',
})
export class CadastroTreinamentoPage {

  exerciciosCadastrados: Array<any> = [];

  alterar: boolean = false;

  exercicios: any;

  /*ngModel*/
  serie: number;
  repeticao: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    private exercicioServiceProvider: ExercicioServiceProvider
  ) { }

  ionViewDidLoad() {
    this.exercicioServiceProvider.listarExercicios()
      .subscribe(resultado => {
        this.exercicios = resultado;
      });
  }

  ngOnInit() {

  }

  /*Parte de cadastro */

  addItem(item: any) {
    this.exerciciosCadastrados.push(item);
    this.limpar();
  }

  removeItem(item: any) {
    this.exerciciosCadastrados.splice(this.exerciciosCadastrados.indexOf(item), 1);
  }



  //#region alterar item de exercicio
  alterarItemExercicio(item: any) {
    let posicao = this.exerciciosCadastrados.indexOf(item);
    let valores: any = this.exerciciosCadastrados[posicao];

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

  private limpar() {
    this.repeticao = null;
    this.serie = null;
  }
}
