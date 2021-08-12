import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-mystic-marsh',
  templateUrl: './mystic-marsh.component.html',
  styleUrls: ['./mystic-marsh.component.scss']
})
export class MysticMarshComponent extends BaseLevel implements OnInit {

  fixTheFountain: boolean = false;
  veryVersatileThieves: boolean = false;
  retrieveProfessorsPencil: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Mystic Marsh";
    this.maxOrbs = 3;
    this.numEnemies = 36;

    this.powerup = new Powerup(PowerupType.Superbounce, 20);
    this.maxPinkGems = 0;
    this.maxStrongChests = 0;
    this.skillPoints = [];
    this.maxFireworksBottles = 3;
    this.maxHeadbashChest = 0;
    this.specialEvents = [];
    this.maxButterflyJars = 2;
  }

  completeFixTheFountain(event: Event) {
    event.preventDefault();
    this.getOrb(this.fixTheFountain, "fixTheFountain")
    this.fixTheFountain = !this.fixTheFountain;
  }

  completeVeryVersatileThieves(event: Event) {
    event.preventDefault();
    this.getOrb(this.veryVersatileThieves, "veryVersatileThieves")
    this.veryVersatileThieves = !this.veryVersatileThieves;
  }

  completeRetrieveProfessorsPencil(event: Event) {
    event.preventDefault();
    this.getOrb(this.retrieveProfessorsPencil, "retrieveProfessorsPencil")
    this.retrieveProfessorsPencil = !this.retrieveProfessorsPencil;
  }
}
