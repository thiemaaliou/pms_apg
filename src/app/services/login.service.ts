import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions} from '@angular/http';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';
import { httpOptions } from '../classes/headers';

@Injectable()

export class LoginService {
   
 	  constructor (private http: Http, private httpClient: HttpClient) {}
    login(credentials)  {
     let user = {"username":credentials.username, "password": credentials.password};
     let url = environment.baseApiUrl+'login';
        return this.httpClient.post(url, user, httpOptions)
            .pipe(response => response)
            .catch(this.handleError);
    }

    submitToken(token){
      return this.httpClient.post(environment.baseApiUrl+'token', {token: token}, httpOptions)
        .pipe(response => response)
        .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    };

}
