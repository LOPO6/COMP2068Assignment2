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
    return this.http.post(`${this.serverUrl}/shoes`,shoe);
  }

  deleteShoe(_id: string){
    return this.http.delete(`${this.serverUrl}/shoes/${_id}`);
  }

  updateShoe(shoe: any){
    return this.http.put(`${this.serverUrl}/shoes/${shoe._id}`, shoe);
  }
  addStoreToShoe(shoe: any, store: any){
    return this.http.put(`${this.serverUrl}/${shoe._id}/store`, store);
  }


}
