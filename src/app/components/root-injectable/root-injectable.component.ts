import { Component } from '@angular/core';
import { RootServiceService } from '../../services/root-service.service';

@Component({
  selector: 'app-root-injectable',
  templateUrl: './root-injectable.component.html',
  styleUrl: './root-injectable.component.scss'
})
export class RootInjectableComponent {

  public constructor(public readonly rootService: RootServiceService){}

}
