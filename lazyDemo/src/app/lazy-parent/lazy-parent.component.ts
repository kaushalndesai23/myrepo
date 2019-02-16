import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lazy-parent',
  templateUrl: './lazy-parent.component.html',
  styleUrls: ['./lazy-parent.component.scss']
})
export class LazyParentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    console.log("LazyParentComponent - constructor");
    this.route.params.subscribe( params => console.log(params) );
  }

  ngOnInit() {
    console.log("LazyParentComponent - ngOnInit");
  }

}
