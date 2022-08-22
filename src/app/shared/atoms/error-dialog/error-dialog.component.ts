import { Component, Input } from '@angular/core';
import { GamificationCallbacksService } from '../../../services/gamification-callbacks.service';
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

  constructor(
    private callback:GamificationCallbacksService
  ){}

  close(){
    this.callback.close()
  }

}
