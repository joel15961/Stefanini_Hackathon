import { ProfessorService } from './../../../../services/professor.service';
import { Professor } from './../../../../models/professor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastroprofessor',
  templateUrl: './cadastroprofessor.component.html',
  styleUrls: ['./cadastroprofessor.component.css']
})
export class CadastroprofessorComponent implements OnInit {

  registerForm: FormGroup;
  professor = {} as  Professor;
  formProfessor: FormGroup;

  constructor(
    private professorService: ProfessorService    ) {             
  }

  ngOnInit() {
    this.createForm(new Professor());
  }

  onSubmit(form: NgForm) {
    this.professorService.incluir(this.formProfessor.value).subscribe(() => {
    });
  }

 createForm(professor: Professor) {
  this.formProfessor = new FormGroup({
    nome: new FormControl(professor.nome),
    email: new FormControl(professor.email),
    senha: new FormControl(professor.senha),
    sobrenome: new FormControl(professor.sobrenome)
  
  })
}

}
