import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environments } from 'src/environments/environments';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _http = inject( HttpClient );
  private _baseUrl: string = environments.api_url;

  getUserById(id: number): Observable<User>{
    const url = `${this._baseUrl}/api/users/${id}`;
    return this._http.get<SingleUserResponse>(url)
    .pipe(
      map( response => response.data),
    );
  }


}
