import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OpaqueToken } from './interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class SsoService {

  constructor(private http:HttpClient) { }

  getValidationToken(tkn:string):Observable<OpaqueToken>{

    const uri=`${environment.tkn.url}/${environment.tkn.apiService.validator}`

    const jsonEntry={
      stokenValidatorRequest: {
          token: tkn,
          ipUsuario: "180.186.107.23",
          idAplicativo: "SNET",
          PAdicional: ""
      }
    }
  
    const params:HttpParams= new HttpParams({
      fromObject:{
        jsonEntrada:JSON.stringify(jsonEntry)
      }
    });

    

    return this.http.get<OpaqueToken>(uri,{params})
  }
}
