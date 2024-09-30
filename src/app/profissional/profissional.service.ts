import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {
  private profissionaisSubject = new BehaviorSubject<any[]>([]);
  profissionais$ = this.profissionaisSubject.asObservable();

  constructor() {
    this.loadProfissionais();
  }

  private loadProfissionais() {
    const profissionais = JSON.parse(localStorage.getItem('profissionais') || '[]');
    this.profissionaisSubject.next(profissionais);
  }

  getProfissionais() {
    return JSON.parse(localStorage.getItem('profissionais') || '[]');
  }

  addProfissional(profissional: any) {
    const profissionais = this.getProfissionais();
    profissionais.push(profissional);
    localStorage.setItem('profissionais', JSON.stringify(profissionais));
    this.profissionaisSubject.next(profissionais);
  }

  updateProfissional(index: number, profissional: any) {
    const profissionais = this.getProfissionais();
    profissionais[index] = profissional;
    localStorage.setItem('profissionais', JSON.stringify(profissionais));
    this.profissionaisSubject.next(profissionais);
  }

  deleteProfissional(index: number) {
    const profissionais = this.getProfissionais();
    profissionais.splice(index, 1);
    localStorage.setItem('profissionais', JSON.stringify(profissionais));
    this.profissionaisSubject.next(profissionais);
  }
}
