import { AlunoService } from './../../../services/aluno.service';
import { Aluno } from './../../../models/aluno';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  registerForm: FormGroup;
  aluno: Aluno;
  formAluno: FormGroup;

  constructor(
    private alunoService: AlunoService    ) {             
  }

  ngOnInit() {
    this.createForm(new Aluno());
  }

  onSubmit() {
    this.alunoService.saveAluno(this.formAluno.value);
  }

 createForm(aluno: Aluno) {
  this.formAluno = new FormGroup({
    nome: new FormControl(aluno.nome),
    email: new FormControl(aluno.email),
    senha: new FormControl(aluno.senha)
  
  })
}

}
