import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BackendService {
BaseUrl="http://localhost:3000"
  constructor(private http:HttpClient) { }

  getTableDetails()
  {
    return this.http.get(this.BaseUrl+'/user/userslist');
  }
}
