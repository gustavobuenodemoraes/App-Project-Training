import { listaExercicios } from './cadastro-treinamento.model';
import { Component, ContentChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController, Platform } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControlName, Validators } from '@angular/forms';

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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) {

  }

  ngOnInit() {
    this.formTreinamento = this.formBuilder.group({
      treinamento: [''],
      exercicio: [''],
      serie: ['', Validators.pattern(this.numberPattern)],
      repeticao: ['', Validators.pattern(this.numberPattern)],
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


  openMenu(exercicios) {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Alterar',
          icon: !this.platform.is('ios') ? 'create' : null,
          handler: () => {
            this.alterarItem(exercicios);
          }
        },
        {
          text: 'Deletar',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            this.removeItem(exercicios);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
        }
      ]
    });
    actionSheet.present();
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
