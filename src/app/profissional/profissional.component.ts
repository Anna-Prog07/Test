import { Component } from '@angular/core';
import { ProfissionalService } from './profissional.service';

@Component({
  selector: 'app-profissional',
  standalone: true,
  imports: [],
  templateUrl: './profissional.component.html',
  styleUrl: './profissional.component.css'
})
export class ProfissionalComponent implements OnInit {
  profissionais: any[] = [];
  newProfissional = { Nome: '', Email: '', Cargo: '' };

  constructor(private profissionalService: ProfissionalService) {}

  ngOnInit() {
    this.profissionalService.profissionais$.subscribe(data => this.profissionais = data);
  }

  addProfissional() {
    this.profissionalService.addProfissional(this.newProfissional);
    this.newProfissional = { Nome: '', Email: '', Cargo: '' };
  }

  editProfissional(index: number) {
    const profissional = this.profissionais[index];
    this.newProfissional = { ...profissional };
    this.profissionalService.deleteProfissional(index); // Remove antes de re-adicionar
  }

  deleteProfissional(index: number) {
    this.profissionalService.deleteProfissional(index);
  }
}