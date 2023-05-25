import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatapiService {

  public baseurl='https://open-ai-frontend-tau.vercel.app/api/chat';

  constructor(private httpClient:HttpClient) { }

  public getUsers(message:any):Observable<any>{
    return this.httpClient.post(this.baseurl+'?message='+message,'');
  }
}
