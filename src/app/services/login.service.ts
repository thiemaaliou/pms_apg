import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()

export class LoginService {
 	  constructor (private http: Http, private httpClient: HttpClient) {}
    login(credentials)  {
             let url = environment.baseApiUrl+'login';
             return this.httpClient.post(url, credentials)
                   .map(response => response); //call method to parse json
    }

		private handleError(error: any): void {
		  console.error('An error occurred', error);
		}

}
