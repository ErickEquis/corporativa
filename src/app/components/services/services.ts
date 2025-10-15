import { Component } from '@angular/core';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 1,
      icon: '📊',
      title: 'Consultoría Estratégica',
      description: 'Diseñamos estrategias corporativas que impulsan el crecimiento sostenible y la competitividad de su organización.'
    },
    {
      id: 2,
      icon: '💼',
      title: 'Gestión Empresarial',
      description: 'Optimizamos procesos y estructuras organizacionales para maximizar la eficiencia operativa y la rentabilidad.'
    },
    {
      id: 3,
      icon: '🔄',
      title: 'Transformación Digital',
      description: 'Implementamos soluciones tecnológicas que modernizan su negocio y mejoran la experiencia del cliente.'
    },
    {
      id: 4,
      icon: '📈',
      title: 'Desarrollo Organizacional',
      description: 'Fortalecemos el capital humano y la cultura corporativa para construir equipos de alto rendimiento.'
    },
    {
      id: 5,
      icon: '🎯',
      title: 'Gestión de Proyectos',
      description: 'Ejecutamos proyectos complejos con metodologías ágiles, garantizando cumplimiento de plazos y presupuestos.'
    },
    {
      id: 6,
      icon: '🔒',
      title: 'Auditoría y Compliance',
      description: 'Aseguramos el cumplimiento normativo y la gestión de riesgos para proteger los intereses de su empresa.'
    }
  ];
}

