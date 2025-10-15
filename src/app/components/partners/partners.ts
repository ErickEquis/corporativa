import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [],
  templateUrl: './partners.html',
  styleUrl: './partners.scss'
})
export class PartnersComponent {
  partners = [
    { name: 'Fortune 500', icon: '🏢' },
    { name: 'Tech Giants', icon: '💻' },
    { name: 'Banking Sector', icon: '🏦' },
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Education', icon: '🎓' }
  ];
}

