import { ProfessorServiceProvider } from './../../../providers/professor-service/professor-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilAlunoPage } from './perfil-aluno/perfil-aluno';

@Component({
  selector: 'page-alunos',
  templateUrl: 'alunos.html'
})
export class AlunosPage {
  usuarios: any[]

  constructor(public navCtrl: NavController, private professorService: ProfessorServiceProvider) {
  }

  selecionaAluno(id){
    this.navCtrl.push(PerfilAlunoPage, { id: id });
  }

  ngOnInit() {
    this.professorService.listarAlunosDoProfessor()
    .subscribe(resultado => {
      this.usuarios = resultado
    })
  }
}
