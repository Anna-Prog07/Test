import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private apiUrl = 'https://6467a872e99f0ba0a814b5ff.mockapi.io/api/Pessoas';
  private alunosSubject = new BehaviorSubject<any[]>([]);
  alunos$ = this.alunosSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadAlunos();
  }

  private loadAlunos() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      localStorage.setItem('alunos', JSON.stringify(data));
      this.alunosSubject.next(data);
    });
  }

  getAlunos() {
    return JSON.parse(localStorage.getItem('alunos') || '[]');
  }

  addAluno(aluno: any) {
    const alunos = this.getAlunos();
    alunos.push(aluno);
    localStorage.setItem('alunos', JSON.stringify(alunos));
    this.alunosSubject.next(alunos);
  }

  updateAluno(index: number, aluno: any) {
    const alunos = this.getAlunos();
    alunos[index] = aluno;
    localStorage.setItem('alunos', JSON.stringify(alunos));
    this.alunosSubject.next(alunos);
  }

  deleteAluno(index: number) {
    const alunos = this.getAlunos();
    alunos.splice(index, 1);
    localStorage.setItem('alunos', JSON.stringify(alunos));
    this.alunosSubject.next(alunos);
  }
}
