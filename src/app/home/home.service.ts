import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }

  getMessages = function () {
    return this.http
    .get('http://localhost:8080/api/v1/message') // environment.apiBaseUrl + '/api/v1/message'
    .toPromise()
    .then(function(res){
      return res.json().messages;
    })
    .catch(function(res){
      console.log(res);
    });
  };

  sendMessage = function (name, message) {
    let now = new Date();
    return this.http
    .post('http://localhost:8080/api/v1/message', {'name': name, 'message': message, 'time': now.toLocaleString()})
    .toPromise()
    .then(function(res){
      console.log(res);
    })
    .catch(function(res){
      console.log(res);
    });
  };
}
