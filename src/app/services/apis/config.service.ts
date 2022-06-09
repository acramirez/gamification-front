import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../../shared/interfaces/response/config.interface';
import { environment } from '../../../environments/environment';
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

    return this.http.get<Config>(environment.config)
      .toPromise()
        .then(data=>{
          
          this.gamificationURL=data['urls']['gamification-service'];
          this.tokenURL=data['urls']['gamification-service-sec'];
          
        }).catch(error=>{
          console.log(error);
          
        })
  }
}
