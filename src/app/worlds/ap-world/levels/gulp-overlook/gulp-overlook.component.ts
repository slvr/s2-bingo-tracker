import { Component, OnInit } from '@angular/core';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-gulp-overlook',
  templateUrl: './gulp-overlook.component.html',
  styleUrls: ['./gulp-overlook.component.scss']
})
export class GulpOverlookComponent extends BaseLevel implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Gulp's Overlook";
    this.maxOrbs = 0;

    this.skillPoints = [false, false];
  }

}
