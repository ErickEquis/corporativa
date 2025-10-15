import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit() {
    console.log('Solicitud de consultoría enviada:', this.formData);
    alert('Gracias por su interés. Un consultor se pondrá en contacto con usted en las próximas 24 horas.');
    
    this.formData = {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}

