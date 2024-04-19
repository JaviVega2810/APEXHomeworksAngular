import { Injectable } from '@angular/core';
import { ProviderInjectableModule } from '../provider-injectable-module/provider-injectable.module';

@Injectable({

  providedIn: ProviderInjectableModule

})

export class ProviderServiceService {

  public data: string[] = [ 'one', 'two' ];

  constructor() { }
}
