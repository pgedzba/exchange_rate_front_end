import { Component, OnInit, Input } from '@angular/core';
import { SlideData } from 'src/app/models/SlideData';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() public slideData: SlideData = null;

  constructor() { }

  ngOnInit() {
  }

}
