import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notification } from "../../shared/interfaces/notification";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  notification:Notification={
    icon:'',
    title:'',
    subtitle:'',
    description:''
  }

  constructor(
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    let message = ''

    this.activatedRoute.params.subscribe(param=>{
      message=param.message
    })

    console.log(message);
    
    switch (message) {
      case 'lo-sentimos':
        this.notification.icon='challenge-no-complete'
        this.notification.title='¡Lo sentimos!'
        this.notification.subtitle='No has logrado completar el reto LikeU'
        this.notification.description='Desafortunadamente no podrás continuar participando en el reto. Recuerda que puedes continuar usando tu tarjeta.'

        break;
      case 'mision-cumplida':
        this.notification.icon='mission-complete'
        this.notification.title='¡Misión cumplida!'
        this.notification.subtitle='Estás más cerca de alcanzar tu límite potencial'
        this.notification.description='Continúa con los retos de la siguiente misión para avanzar.'

        break;
      case 'lo-has-logrado':
        this.notification.icon='challenge-complete'
        this.notification.title='¡Lo has logrado!'
        this.notification.subtitle='Tu límite de crédito ha aumentado'
        this.notification.description='Completaste todas las misiones del reto LikeU y tu límite ha alcanzado su potencial completo.'

        break;
    
      default:
        break;
    }

  }


}
