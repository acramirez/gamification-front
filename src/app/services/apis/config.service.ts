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

  getConfig(){

    return this.http.get<Config>(environment.config)
  }
}
