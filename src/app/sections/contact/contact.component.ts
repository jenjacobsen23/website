import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './contact.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [ContactService],
})
export class ContactComponent {
  contactForm: FormGroup = this.fb.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });

  constructor(private fb: FormBuilder) {}

  async send() {
    const name: string = this.contactForm.get('name')?.value;
    const email: string = this.contactForm.get('email')?.value;
    const title: string = this.contactForm.get('title')?.value;
    const message: string = this.contactForm.get('message')?.value;

    emailjs.init('vkmnA7KEq9gK2izrw');
    let response = await emailjs.send('service_mtxqiq4', 'template_2qlmwoq', {
      name: name,
      message: message,
      title: title,
      email: email,
      time: Date.now().toLocaleString(),
    });

    console.log(response);
    if (response.status !== 200) {
      console.log('didnt send');
    }

    alert('message sent');
    this.contactForm.reset();
  }
}
