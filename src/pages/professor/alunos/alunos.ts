import { ProfessorServiceProvider } from './../../../providers/professor-service/professor-service';
import { PerfilAlunoPage } from './perfil-aluno/perfil-aluno';
import { LocalService } from './../../../providers/local/login.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos.html'
})
export class AlunosPage {
  usuarios: any[]

  constructor(public navCtrl: NavController, private localService: LocalService, private professorService: ProfessorServiceProvider) {
  }

  selecionaAluno(id){
    this.navCtrl.push(PerfilAlunoPage , {id : id});
  }

  ngOnInit() {
    this.professorService.listarAlunosDoProfessor()
      .subscribe(resultado => {
        this.usuarios = resultado
      })
  }
}
