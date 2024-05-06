import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-slug',
  templateUrl: './slug.component.html',
  styleUrl: './slug.component.scss'
})
export class SlugComponent {

  public slug?: string | null;

  public constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.slug = this.activatedRoute.snapshot.params['slug'];
  }

}
