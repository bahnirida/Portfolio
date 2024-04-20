import { Component } from '@angular/core';
import {EmailService} from './services/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private emailService: EmailService) {}


}
