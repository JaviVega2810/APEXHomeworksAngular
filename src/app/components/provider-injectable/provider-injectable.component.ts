import { Component } from '@angular/core';
import { ProviderServiceService } from '../../services/provider-service.service';

@Component({
  selector: 'app-provider-injectable',
  templateUrl: './provider-injectable.component.html',
  styleUrl: './provider-injectable.component.scss'
})
export class ProviderInjectableComponent {

  public constructor(public readonly providerService: ProviderServiceService){}

  public data: string[] =  this.providerService.data;

}
