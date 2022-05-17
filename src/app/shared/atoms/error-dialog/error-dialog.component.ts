import { Component, Input, OnInit } from '@angular/core';
import { ErrorData } from '../../interfaces/atoms/error';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent{

  @Input()errorData:ErrorData={
    title:'¡Oh, oh!',
    message:'No pudimos atender tu solicitud por ahora. Inténtalo después.',
    icon:'cloud-error',
    button:false,
    redirect:'/',
  }

}
