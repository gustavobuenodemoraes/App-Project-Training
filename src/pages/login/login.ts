import { AlunoSelecaoPage } from './../aluno/aluno-selecao/aluno-selecao';
import { AlunoMenuLateralPage } from './../aluno/aluno-menu-lateral/aluno-menu-lateral';
import { MenuLateralPage } from './../professor/menu-lateral/menu-lateral';
import { MenuController } from 'ionic-angular';
import { tipoLogin } from './login.model';
import { cadastroAlunoPage } from './../cadastro-aluno/cadastro-aluno';
import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { cadastroProfessorPage } from '../cadastro-professor/cadastro-professor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginData: FormGroup;

  data;

  conectado: boolean = false;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    private toastCtrl: ToastController,
    private menuCtrl: MenuController,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController
  ) {

  }

  goTocadastroAluno() {
    this.navCtrl.push(cadastroAlunoPage);
  }

  goTocadastroProfessor() {
    this.navCtrl.push(cadastroProfessorPage);
  }

  goToProfessor() {
    this.navCtrl.setRoot(MenuLateralPage);
  }

  goToAluno() {
    this.navCtrl.setRoot(AlunoMenuLateralPage);
  }

  goToSelecionarProfessor() {
    this.navCtrl.setRoot(AlunoSelecaoPage);
  }

  doLogin(formulario: tipoLogin) {
    this.authService.login(formulario).then((result) => {
      this.data = result;
      // console.log(this.data);
      // this.presentLoading();
      localStorage.setItem('token', this.data.Authentication);
      localStorage.setItem('codUsuarioLogado', this.data.codigo);
      localStorage.setItem('nomeUsuarioLogado', this.data.nome);
      if(this.data.tipoUsuario == "PROFESSOR"){
        this.goToProfessor();
      }else if(this.data.tipoUsuario == "ALUNO"){
        if(typeof this.data.professor == "undefined" ){
          this.goToSelecionarProfessor();
        }else{
          this.goToAluno();
        }
      }
    }, (err) => {
      if (err.status == 401) {
        this.presentToast("Email ou senha invalidos!");
      } else {
        this.presentToast("Ocorreu um erro ao tentar logar, tente novamente!");
      }
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.present();
  }


  ManterConectado(login: tipoLogin) {
    if (this.conectado == true) {
      let email: string = String(login.email);
      let senha: string = String(login.senha);
      if (email != '' && senha != '') {
        localStorage.setItem('email', email);
        localStorage.setItem('senha', senha);
      }
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('senha');
    }
  }


  ngOnInit() {
    this.loginData = this.formBuilder.group({
      email: ['', Validators.pattern(this.emailPattern)],
      senha: ['']
    });
  }

  //trava o menu lateral
  ionViewDidLoad() {
    this.menuCtrl.enable(false, 'menuProfessor');
    if (localStorage.length > 2) {
      let item: FormGroup;
      item = this.formBuilder.group({
        email: [localStorage.getItem("email"), Validators.pattern(this.emailPattern)],
        senha: [localStorage.getItem("senha")]
      });
      this.doLogin(item.value);
    }
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }
}
