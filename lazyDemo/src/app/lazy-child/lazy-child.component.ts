import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lazy-child',
  templateUrl: './lazy-child.component.html',
  styleUrls: ['./lazy-child.component.scss']
})
export class LazyChildComponent implements OnInit {

  constructor(private route: ActivatedRoute) { 
    console.log("LazyChildComponent - constructor");
    this.route.params.subscribe( params => console.log(params) );

  }

  ngOnInit() {
    console.log("LazyChildComponent - ngOnInit");
  }

}
