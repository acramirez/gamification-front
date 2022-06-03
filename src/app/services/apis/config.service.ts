import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'src/app/shared/interfaces/response/config.interface';
import { environment } from 'src/environments/environment';
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

    // return new Promise((resolve,reject)=>{
    //   this.http.get<Config>('https://mx-gamification-front-mx-gamification-web-dev.appls.mex01.mex.dev.mx1.paas.cloudcenter.corp/config.json').subscribe(
    //     data=>{
    //       this.gamificationURL=data['urls']['gamification-service'];
    //       this.tokenURL=data['urls']['gamification-service-sec'];
          
    //       resolve(true)
    //     }
    //   )
    // })
  }
}
