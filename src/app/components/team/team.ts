import { Component } from '@angular/core';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  initials: string;
  color: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.scss'
})
export class TeamComponent {
  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Dr. Roberto Sánchez',
      position: 'Director General',
      initials: 'RS',
      color: '#003d82'
    },
    {
      id: 2,
      name: 'Lic. María Elena Torres',
      position: 'Directora de Operaciones',
      initials: 'MT',
      color: '#0052ad'
    },
    {
      id: 3,
      name: 'Ing. Carlos Mendoza',
      position: 'Director de Tecnología',
      initials: 'CM',
      color: '#003d82'
    },
    {
      id: 4,
      name: 'Mtra. Patricia Ruiz',
      position: 'Directora de Recursos Humanos',
      initials: 'PR',
      color: '#0052ad'
    }
  ];
}

