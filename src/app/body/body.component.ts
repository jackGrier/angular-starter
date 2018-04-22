import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @ViewChild('carousel') carousel: any;
  slides: Array<Object> = [];
  options: Object = {
    clicking: true,
    sourceProp: 'src',
    visible: 7,
    perspective: 1,
    startSlide: 0,
    border: 3,
    dir: 'ltr',
    width: 360,
    height: 270,
    space: 220,
    autoRotationSpeed: 5000,
    loop: true
  };

  constructor() {
  }

  ngOnInit() {
  }

  slideClicked(index) {
    this.carousel.slideClicked(index);
  }
}
