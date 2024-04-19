import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RootServiceService {

  public persistentData: string = "I am a variable inside a singleton.";

  constructor() { }
}
