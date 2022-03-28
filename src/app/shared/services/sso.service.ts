import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SsoService {

  constructor(private http:HttpClient) { }

  validarToken(tkn:string){

    const uri=`${environment.tkn.url}/${environment.tkn.apiService.validator}`

    const jsonEntry={
      stokenValidatorRequest: {
          token: tkn,
          ipUsuario: "180.186.107.23",
          idAplicativo: "SNET",
          PAdicional: ""
      }
    }

    console.log(JSON.stringify(jsonEntry));
    console.log(uri);
    

    const params:HttpParams= new HttpParams({
      fromObject:{
        jsonEntrada:''
      }
    });


    this.http.get(uri,{params})
  }
}
