import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorData } from 'src/app/shared/interfaces/atoms/error';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private router:Router
  ){}

  showError:boolean=false;
  error:ErrorData={
    title:'',
    message:'',
    icon:'',
    button:false,
    redirect:''

  }

  errorShow(error:Observable<never>){

    if (error) {
      this.router.navigateByUrl('error')
    }
    
  }

}
