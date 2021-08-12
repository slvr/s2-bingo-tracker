import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-robotica-farms',
  templateUrl: './robotica-farms.component.html',
  styleUrls: ['./robotica-farms.component.scss']
})
export class RoboticaFarmsComponent extends BaseLevel implements OnInit {

  switchOnBugLight: boolean = false;
  clearTractorPath: boolean = false;
  exterminateCrowBugs: boolean = false;

  constructor() {
    super();
   }

  ngOnInit(): void {
    this.levelName = "Robotica Farms";
    this.maxOrbs = 3;
    this.numEnemies = 20;

    this.powerup = new Powerup(PowerupType.Supercharge, 15);
    this.maxPinkGems = 0;
    this.maxStrongChests = 1;
    this.skillPoints = [];
    this.maxFireworksBottles = 0;
    this.maxHeadbashChest = 0;
    this.specialEvents = [];
    this.maxButterflyJars = 0;
  }

  completeSwitchOnBugLight(event: Event) {
    event.preventDefault();
    this.getOrb(this.switchOnBugLight, "switchOnBugLight")
    this.switchOnBugLight = !this.switchOnBugLight;
  }

  completeClearTractorPath(event: Event) {
    event.preventDefault();
    this.getOrb(this.clearTractorPath, "clearTractorPath")
    this.clearTractorPath = !this.clearTractorPath;
  }

  completeExterminateCrowBugs(event: Event) {
    event.preventDefault();
    this.getOrb(this.exterminateCrowBugs, "exterminateCrowBugs")
    this.exterminateCrowBugs = !this.exterminateCrowBugs;
  }

}
