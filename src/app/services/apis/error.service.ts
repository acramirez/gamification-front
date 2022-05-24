import { Injectable } from '@angular/core';
import {Router} from '@angular/router'
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private router:Router
  ){}

  showError:boolean=false;


    getClientError(error:Error){


      if (!navigator.onLine) {
        return 'No Internet Connection'
      }

      return error.message
    }

  errorShow(error:Observable<never>){

    if (error) {
      this.router.navigateByUrl('error')
    }

    error.subscribe()

  }

}
