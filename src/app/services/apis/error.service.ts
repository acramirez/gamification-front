import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private router:Router
  ){}

  showError=false;


  getClientError(error:Error){


    if (!navigator.onLine) {
      return 'No Internet Connection'
    }

    return error.message
  }

  errorShow(error:Observable<never>,errorId='1'){

    this.showError=true
    if (error && this.showError===true) {
      this.router.navigate(['error',errorId])
      this.showError=false
    }
  }

}
