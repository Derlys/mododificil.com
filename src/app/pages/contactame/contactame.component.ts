import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

interface MailChimpResponse {
  result: string;
  msg: string;
}

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.scss'],
})
export class ContactameComponent implements OnInit {
  thanks = false;
  // The form group defines the fields used in the form
  form = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
  });
  // Inject the router so we can navigate after a successful contact
  constructor(private http: HttpClient) {}

  public submit() {
    this.form.disable();
    const payload = this.form.value;
    // Logic found here: https://medium.com/briebug-blog/mailchimp-subscribe-form-with-angular-5-using-jsonp-f5f54193f8d1
    const params = new HttpParams()
      .set('FNAME', payload.name)
      .set('EMAIL', payload.email)
      .set(environment.mailchimp.code, '');

    const mailChimpUrl = environment.mailchimp.endpoint + params.toString();

    this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(
      (response) => {
        this.form.enable();
        if (response.result && response.result !== 'error') {
          this.thanks = true;
          // this.ui.toastSuccess(`You are signed up to our newsletter!`);
        } else {
          alert('ohh ohh hubo un error :(');
        }
      },
      (error) => {
        this.form.enable();
        console.error(error);
        alert('ohh ohh hubo un error :(');
      }
    );
  }

  ngOnInit(): void {}
}
