import { Component } from '@angular/core';
import {EmailService} from './services/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myPortfolio';
  constructor(private emailService: EmailService) {}

  sendEmailToUser(): void {
    this.emailService.sendEmail('code.genius.contact@gmail.com', 'Test Subject', 'Test email body');
  }
}
