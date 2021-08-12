import { Component, OnInit } from '@angular/core';
import { BaseWorld } from '../base-world.component';

@Component({
  selector: 'app-sf-world',
  templateUrl: './sf-world.component.html',
  styleUrls: ['./sf-world.component.scss']
})
export class SfWorldComponent extends BaseWorld implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.maxGems = 3200;
    this.maxOrbs = 22
  }

}
