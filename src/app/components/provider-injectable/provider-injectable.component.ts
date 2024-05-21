import { Component } from '@angular/core';
import { RandomService } from '../../services/random.service';

@Component({
  selector: 'app-provider-injectable',
  templateUrl: './provider-injectable.component.html',
  styleUrl: './provider-injectable.component.scss'
})
export class ProviderInjectableComponent {

  public constructor(public readonly randomService: RandomService){}

  public data: string[] =  this.randomService.data;

}
