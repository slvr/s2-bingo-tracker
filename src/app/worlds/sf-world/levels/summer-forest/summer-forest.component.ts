import { Component, OnInit } from '@angular/core';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-summer-forest',
  templateUrl: './summer-forest.component.html',
  styleUrls: ['./summer-forest.component.scss']
})
export class SummerForestComponent extends BaseLevel implements OnInit {

  huntersChallenge: boolean = false;
  atopALadder: boolean = false;
  onASercretLedge: boolean = false;
  behindTheDoor: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Summer Forest";
    this.maxOrbs = 4;
    this.moneyBags = [false, false];

    this.powerup = null;
    this.maxPinkGems = 1;
    this.maxStrongChests = 0;
    this.skillPoints = [];
    this.maxFireworksBottles = 0;
    this.specialEvents = [];
    this.maxButterflyJars = 3;
    this.maxZoes = 2;
  }

  completeHuntersChallenge(event: Event) {
    event.preventDefault();
    this.getOrb(this.huntersChallenge, "huntersChallenge")
    this.huntersChallenge = !this.huntersChallenge;
  }

  completeAtopALadder(event: Event) {
    event.preventDefault();
    this.getOrb(this.atopALadder, "atopALadder")
    this.atopALadder = !this.atopALadder;
  }

  completeOnASecretLedge(event: Event) {
    event.preventDefault();
    this.getOrb(this.onASercretLedge, "onASercretLedge")
    this.onASercretLedge = !this.onASercretLedge;
  }

  completeBehindTheDoor(event: Event) {
    event.preventDefault();
    this.getOrb(this.behindTheDoor, "behindTheDoor")
    this.behindTheDoor = !this.behindTheDoor;
  }

}
