import { Component, OnInit } from '@angular/core';
import { Powerup, PowerupType } from 'src/app/models/powerup';
import { BaseLevel } from 'src/app/worlds/base-level.component';

@Component({
  selector: 'app-skelos-badlands',
  templateUrl: './skelos-badlands.component.html',
  styleUrls: ['./skelos-badlands.component.scss']
})
export class SkelosBadlandsComponent extends BaseLevel implements OnInit {

  lavaLizards1: boolean = false;
  lavaLizards2: boolean = false;
  demBones: boolean = false;

  constructor() { 
    super();
  }

  ngOnInit(): void {
    this.levelName = "Skelos Badlands";
    this.maxOrbs = 3;
    this.numEnemies = 28;

    this.powerup = new Powerup(PowerupType.Invincibility, 16);
    this.maxPinkGems = 2;
    this.maxStrongChests = 1;
    this.skillPoints = [false, false];
    this.maxFireworksBottles = 1;
    this.specialEvents = [false];
    this.maxButterflyJars = 1;
  }

  completeLavaLizards1(event: Event) {
    event.preventDefault();
    this.getOrb(this.lavaLizards1, "lavaLizards1")
    this.lavaLizards1 = !this.lavaLizards1;
  }

  completeLavaLizards2(event: Event) {
    event.preventDefault();
    this.getOrb(this.lavaLizards2, "lavaLizards2")
    this.lavaLizards2 = !this.lavaLizards2;
  }

  completeDemBones(event: Event) {
    event.preventDefault();
    this.getOrb(this.demBones, "demBones")
    this.demBones = !this.demBones;
  }

}
