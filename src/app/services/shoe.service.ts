import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  serverUrl: string = environment.serverUrl;

  constructor(private http: HttpClient) { }

  getShoes(){
    return this.http.get(`${this.serverUrl}/shoes`);
  }

  addShoe(shoe: any){
    return this.http.post(`${this.serverUrl}/shoes`,shoe)
  }
}
