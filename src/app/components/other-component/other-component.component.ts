import { Component } from '@angular/core';
import { RootServiceService } from '../../services/root-service.service';

@Component({
  selector: 'app-other-component',
  templateUrl: './other-component.component.html',
  styleUrl: './other-component.component.scss'
})
export class OtherComponentComponent {

  public constructor(public readonly rootService: RootServiceService) {}

}
