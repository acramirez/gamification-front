import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return new Promise((resolve,reject)=>{
      this.http.get('/config.json').subscribe(
        data=>{
          console.log(data);
          resolve(true)
        }
      )
    })
  }
}
