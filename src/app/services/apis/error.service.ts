import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorData } from 'src/app/shared/interfaces/atoms/error';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  showError:boolean=false;
  error:ErrorData={
    title:'',
    message:'',
    icon:'',
    button:false,
    redirect:''

  }

  constructor() { 
    
  }

  errorShow(error:HttpErrorResponse){
    console.error(error);
    if (error.error!=='') {
      console.log(error);
      this.showError=true
    }else{
      this.showError=false
    }

    console.log(this.showError);
    
  }

}
