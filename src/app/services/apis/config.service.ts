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

    this.http.get('/config.json')
      .toPromise()
        .then(resp=>{
          console.log(resp);
          
        }
          
        ).catch(()=>{
          console.log('error');

        }
          
        )

  }
}
