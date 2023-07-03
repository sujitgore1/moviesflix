import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {

   }

   getApiData(value:any){
   return this.http.post('https://www.omdbapi.com/?apikey=3aa2114c&t='+value,value)
   }
}
