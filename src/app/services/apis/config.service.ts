import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http:HttpClient
  ) { }

  gamificationURL!:string;
  tokenURL!:string;

  getConfig(){
    const headers = new HttpHeaders({
      token:'er'
    })
    return new Promise((resolve,reject)=>{
      this.http.get('/config.json',{responseType:'text'}).pipe(
        map(resp=>{
          console.log(resp);
          
          return JSON.stringify(resp)
        })
      ).subscribe(
        data=>{
          console.log(data);
          resolve(true)
        }
      )
    })
  }
}
