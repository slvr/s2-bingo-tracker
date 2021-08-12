import { Component, OnInit } from '@angular/core';
import { BaseWorld } from '../base-world.component';

@Component({
  selector: 'app-wt-world',
  templateUrl: './wt-world.component.html',
  styleUrls: ['./wt-world.component.scss']
})
export class WtWorldComponent extends BaseWorld implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.maxGems = 2400;
    this.maxOrbs = 17;
  }



}
