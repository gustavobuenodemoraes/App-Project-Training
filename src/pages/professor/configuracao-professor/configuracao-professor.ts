import { Camera } from '@ionic-native/camera';
import { CameraOptions } from '@ionic-native/camera';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-configuracao-professor',
  templateUrl: 'configuracao-professor.html',
})
export class ConfiguracaoProfessorPage {
  /**
     * Declarando a variável onde será adicionado o base64 da foto
     */
  currentPhoto;

  /**
   * Adicionamos o módulo de câmera no construtor
   *
   * @param navCtrl
   * @param navParams
   * @param camera
   */

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TakePicture');
  }

  /**
   * Criamos o método getPhoto que foi declarado na interface. Cada parâmetro aqui é importante e vai definir o funcionamento da câmera. Nesse exemplo vamos tirar uma foto em JPEG e que vai vir como resultado o base64 da imagem em qualidade 100. Em celulares com menos memória é melhor diminuir um pouco a qualidade
   *
   * @param type - photo or gallery
   */
  getPhoto(type) {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: type == "picture" ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {

      this.currentPhoto = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      // Handle error
    });
  }

}
