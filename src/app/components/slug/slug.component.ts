import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-slug',
  templateUrl: './slug.component.html',
  styleUrl: './slug.component.scss'
})
export class SlugComponent {

  public Slug: any;

  public constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.Slug = this.activatedRoute.snapshot.params['slug'];
  }

}
