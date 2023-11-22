import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MailChimpResponse } from 'src/app/data/models/form';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.scss'],
})
export class ContactameComponent implements OnInit {
  thanks = false;

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private http: HttpClient) {}

  public submit() {
    this.form.disable();

    const payload = this.form.value;
     
    const params = new HttpParams()
      .set('FNAME', payload.firstName)
      .set('LNAME', payload.lastName)
      .set('EMAIL', payload.email)
      .set('MMERGE3', payload.message)
      .set(environment.mailchimp.code, '');

    const mailChimpUrl = environment.mailchimp.endpoint + '&' + params.toString();
    this.http.jsonp<MailChimpResponse>(mailChimpUrl, 'c').subscribe(
      (response) => {
        console.log(response);
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
