import { Component } from '@angular/core';
import { RootService } from '../../services/root.service';

@Component({
  selector: 'app-other-component',
  templateUrl: './other-component.component.html',
  styleUrl: './other-component.component.scss'
})
export class OtherComponentComponent {

  public constructor(public readonly rootService: RootService) {}

}
