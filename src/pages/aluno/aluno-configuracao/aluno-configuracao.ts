import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-aluno-configuracao',
  templateUrl: 'aluno-configuracao.html',
})
export class AlunoConfiguracaoPage {
  base64Image: any;
  aluno: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera ) {

  }
  doSalvarConfigutacao(formulario): void {
    alert(formulario);
  }

  getAlbum() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: 0,
      destinationType: this.camera.DestinationType.DATA_URL,
      /*Escolha a codificação do arquivo de imagem retornado. Definido em Camera.EncodingType. O padrão é JPEG JPEG: 0 Retorne imagem JPEG codificada PNG: 1 Retorne a imagem codificada PNG
        (opcional) */
      encodingType: this.camera.EncodingType.JPEG,
      /*Defina o MediaTypea a ser selecionada. Só funciona quando PictureSourceType é PHOTOLIBRARY ou SAVEDPHOTOALBUM. Definido na Câmera.MediaType IMAGEM: 0 permite a seleção de imagens estáticas apenas. PADRÃO. Vai retornar o formato especificado via DestinationType VIDEO: 1 permite a seleção de vídeo apenas, SEMPRE RETORNAR FILE_URI ALLMEDIA: 2 permite a seleção de todos os tipos de mídia
        (opcional) */
      mediaType: this.camera.MediaType.ALLMEDIA


    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.base64Image.img = base64Image;
    }, (err) => {
      console.log(err);
    });
  }

  getPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      /*Escolha a codificação do arquivo de imagem retornado. Definido em Camera.EncodingType. O padrão é JPEG JPEG: 0 Retorne imagem JPEG codificada PNG: 1 Retorne a imagem codificada PNG
        (opcional) */
      encodingType: this.camera.EncodingType.JPEG,
      /*Defina o tipo de mídia a ser selecionada. Só funciona quando PictureSourceType é PHOTOLIBRARY ou SAVEDPHOTOALBUM. Definido na Câmera.MediaType IMAGEM: 0 permite a seleção de imagens estáticas apenas. PADRÃO. Vai retornar o formato especificado via DestinationType VIDEO: 1 permite a seleção de vídeo apenas, SEMPRE RETORNAR FILE_URI ALLMEDIA: 2 permite a seleção de todos os tipos de mídia
        (opcional) */
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.base64Image.img = base64Image;
    }, (err) => {
      console.log(err);
    });
  }


  ionViewDidLoad() {
  }

  ngOnInit() {
    this.aluno = {
      nomeAluno: ''
    }
  }
}
