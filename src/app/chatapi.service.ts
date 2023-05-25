import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatapiService {

  public baseurl='http://localhost:3000/api/chat';

  constructor(private httpClient:HttpClient) { }

  public getUsers(message:any):Observable<any>{
    return this.httpClient.post(this.baseurl+'?message='+message,'');
  }
}
