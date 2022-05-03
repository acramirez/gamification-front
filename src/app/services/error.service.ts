import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  showError:boolean=false;

  constructor() { 

  }

  errorShow(error:string){
    console.error(error);
    if (error!=='') {
      console.log(error);
      this.showError=true
    }else{
      this.showError=false
    }

    console.log(this.showError);
    
  }

}
