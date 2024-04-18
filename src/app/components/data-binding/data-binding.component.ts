import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  public hello: string = "Hello World";

  public launchEvent(event: MouseEvent): void {
    alert("I was triggered by an event");
  }
}
