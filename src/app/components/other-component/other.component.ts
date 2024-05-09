import { Component } from '@angular/core';
import { RootService } from '../../services/root.service';

@Component({
  selector: 'app-other-component',
  templateUrl: './other.component.html',
  styleUrl: './other.component.scss'
})
export class OtherComponent {

  public constructor(public readonly rootService: RootService) {}

  public data = this.rootService.persistentData;

}
