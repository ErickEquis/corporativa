import { Component } from '@angular/core';

interface Stat {
  number: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.html',
  styleUrl: './stats.scss'
})
export class StatsComponent {
  stats: Stat[] = [
    { number: '1,000+', label: 'Proyectos completados', icon: '✅' },
    { number: '500+', label: 'Clientes activos', icon: '🤝' },
    { number: '30+', label: 'Años de experiencia', icon: '🏆' },
    { number: '98%', label: 'Satisfacción del cliente', icon: '⭐' }
  ];
}

