import { Component } from '@angular/core';
import { CustomPipeCapitalizePipe } from '../../pipes/custom-pipe-capitalize.pipe';

@Component({
  selector: 'app-pipes-excercise',
  templateUrl: './pipes-excercise.component.html',
  styleUrl: './pipes-excercise.component.scss'
})
export class PipesExcerciseComponent {

  public numericVar: number = 34.22;
  public stringVar: string = "hello world";

}
