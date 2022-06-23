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

    const location = (window.location.hostname === 'localhost')
      ? '/assets/config/config.json'
        : '/config.json';

    this.http.get(location)
      .toPromise()
        .then(resp=>{
          console.log(resp);
        }

        ).catch((err)=>{
          console.warn(err)
          console.log('error');
        }
        )
  }
}
