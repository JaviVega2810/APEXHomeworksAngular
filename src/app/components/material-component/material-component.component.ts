import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-material-component',
  templateUrl: './material-component.component.html',
  styleUrl: './material-component.component.scss'
})
export class MaterialComponentComponent {

  public text: string = "";

  public constructor(public dialog: MatDialog) {}

  openDialog() {
    const ref = this.dialog.open(InputComponent);

    ref.afterClosed().subscribe(result => {
      this.text = result;
    });

    ref.afterClosed().subscribe(item => {
      console.log(item);
    });

  }

}
