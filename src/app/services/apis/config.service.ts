import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Config } from '../../shared/interfaces/response/config.interface';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private http:HttpClient
  ) { }

  getConfig(){

    return this.http.get<Config>(environment.config)
  }
}
