import { Component } from '@angular/core';
import { RootService } from '../../services/root.service';

@Component({
  selector: 'app-root-injectable',
  templateUrl: './root-injectable.component.html',
  styleUrl: './root-injectable.component.scss'
})
export class RootInjectableComponent {

  public constructor(public readonly rootService: RootService){}

  public data = this.rootService.persistentData;

}
