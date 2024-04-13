import { Injectable } from '@angular/core';
import * as nodemailer from 'nodemailer';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  private transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'code.genius.contact@gmail.com',
      pass: 'Codegenuis@123'
    }
  });

  public sendEmail(to: string, subject: string, body: string): void {
    const mailOptions = {
      from: 'salaheddineabid99@gmail.com',
      to,
      subject,
      text: body
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  }
}
