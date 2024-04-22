import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {

  public text: string = "";

  public constructor(private ref: MatDialogRef<InputComponent>) {}

  public closeDialog(){
    this.ref.close();
  }

}
