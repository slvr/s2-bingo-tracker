import { Component, OnInit } from '@angular/core';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-ripto-arena',
  templateUrl: './ripto-arena.component.html',
  styleUrls: ['./ripto-arena.component.scss']
})
export class RiptoArenaComponent extends BaseLevel implements OnInit {

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Ripto's Arena";
    this.maxOrbs = 0;

    this.skillPoints = [false];
  }

}
