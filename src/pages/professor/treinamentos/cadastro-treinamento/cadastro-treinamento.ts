import { listaExercicios } from './cadastro-treinamento.model';
import { Component, ContentChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControlName } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-cadastro-treinamento',
  templateUrl: 'cadastro-treinamento.html',
})
export class CadastroTreinamentoPage {

  @ContentChild(FormControlName) control: FormControlName;

  posicao: any;

  numberPattern = /^[0-9]*$/

  formTreinamento: FormGroup

  exerciciosCadastrados: Array<listaExercicios> = [];

  alterar: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public alertCtrl: AlertController) {

  }

  ngOnInit() {
    this.formTreinamento = this.formBuilder.group({
      treinamento: [''],
      exercicio: [''],
      serie: [''],
      repeticao: [''],
    });
  }
/*Parte de cadastro */
  private camposErequisitos() {
    this.formTreinamento = this.formBuilder.group({
      treinamento: [''],
      exercicio: [''],
      serie: [''],
      repeticao: [''],
    });
  }


  addItem(item: listaExercicios) {
    this.exerciciosCadastrados.push(item);
    this.camposErequisitos();
  }

  removeItem(item: listaExercicios) {
    this.exerciciosCadastrados.splice(this.exerciciosCadastrados.indexOf(item), 1);
  }

  alterarItem(item: listaExercicios) {
    this.posicao = this.exerciciosCadastrados.indexOf(item);
    let valores: listaExercicios = this.exerciciosCadastrados[this.posicao];

    let prompt = this.alertCtrl.create({
      title: 'Alterar',
      inputs: [
        {
          name: 'exercicio',
          placeholder: 'Exercicio',
          value: valores.exercicio
        },
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
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.Itemalterado(data.exercicio, data.serie, data.repeticao);
          }
        }
      ]
    });
    prompt.present();
  }

  Itemalterado(exericio, serie, repeticao) {
    this.exerciciosCadastrados[this.posicao].exercicio = exericio;
    this.exerciciosCadastrados[this.posicao].serie = serie;
    this.exerciciosCadastrados[this.posicao].repeticao = repeticao;
  }
}
