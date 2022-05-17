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

  showError:boolean=false;

  errorShow(error:Observable<never>){

    if (error) {
      this.router.navigateByUrl('error')
    }
    
  }

}
