import { Injectable } from "@angular/core";
import { ConfigService } from "../apis/config.service";

@Injectable({
    providedIn:'root'
})

export class ConfigFacade{

    gamificationURL!:string;
    tokenURL!:string;
  
    constructor(
        private confService:ConfigService
    ){}

    getConfig(){
        return this.confService.getConfig().toPromise().then(data=>{
          
            this.gamificationURL=data['urls']['gamification-service'];
            this.tokenURL=data['urls']['gamification-service-sec'];
            
          }).catch(error=>{
            console.log(error);
          })
    }




}