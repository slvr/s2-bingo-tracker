import { Component, OnInit } from '@angular/core';
import { BaseWorld } from '../base-world.component';

@Component({
  selector: 'app-ap-world',
  templateUrl: './ap-world.component.html',
  styleUrls: ['./ap-world.component.scss']
})
export class ApWorldComponent extends BaseWorld implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.maxOrbs = 25;
    this.maxGems = 4400;
  }

}
