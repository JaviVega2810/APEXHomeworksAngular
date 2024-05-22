import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit{

  @Input() public totalItems: number = 0;

  public pageSize: number = 5;

  public totalPages: number[] = [];

  public page: number =  0;

  @Output() changePage = new EventEmitter<number>();

  ngOnInit(): void {
    this.totalPages = new Array(Math.ceil(this.totalItems / this.pageSize));
    console.log(this.totalPages);
  }

  public switchPage(currentPage: number){
    this.page = currentPage;
    this.changePage.emit(this.page);
  }


}
