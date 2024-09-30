import { Component, OnInit } from '@angular/core';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent implements OnInit {
  alunos: any[] = [];
  newAluno = { Nome: '', Email: '', DataNascimento: '', Sexo: '' };

  constructor(private alunoService: AlunoService) {}

  ngOnInit() {
    this.alunoService.alunos$.subscribe(data => this.alunos = data);
  }

  addAluno() {
    this.alunoService.addAluno(this.newAluno);
    this.newAluno = { Nome: '', Email: '', DataNascimento: '', Sexo: '' };
  }

  editAluno(index: number) {
    const aluno = this.alunos[index];
    this.newAluno = { ...aluno };
    this.alunoService.deleteAluno(index); // Remove antes de re-adicionar
  }

  deleteAluno(index: number) {
    this.alunoService.deleteAluno(index);
  }
}