import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[capitalize]'
})
export class CapitalizeDirective {

  constructor(private element: ElementRef<HTMLElement>) { }

  ngOnInit() {
    let firstString : string = this.element.nativeElement.innerText;
    let finalString : string = firstString.charAt(0).toUpperCase() + firstString.slice(1);
    this.element.nativeElement.innerText = finalString;
    console.log(this.element)
  }

}
