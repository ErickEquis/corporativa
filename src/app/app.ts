import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { AboutComponent } from './components/about/about';
import { ServicesComponent } from './components/services/services';
import { StatsComponent } from './components/stats/stats';
import { TeamComponent } from './components/team/team';
import { PartnersComponent } from './components/partners/partners';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    StatsComponent,
    TeamComponent,
    PartnersComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Corporación Empresarial';
}

