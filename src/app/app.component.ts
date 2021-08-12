import { Component } from '@angular/core';
import { Powerup } from './models/powerup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tracker';

  public tick: boolean | number = true;
  public orbs: String[] = [];
  public gems: Map<string, number> = new Map();
  public spirits: String[] = [];
  public talismans: String[] = [];
  public exits: String[] = [];
  public moneyBags: String[] = [];
  public pinkGems: number = 0;

  public portalStoodOn: Map<string, number> = new Map();
  public powerup: Map<string, Powerup> = new Map();
  public strongChest: number = 0;
  public mysteryJar: number = 0;
  public skillPoint: String[] = [];
  public fireworksBottle: number = 0;
  public rocket: number = 0;
  public headbashChest: number = 0;
  public specialEvent: String[] = [];
  public enteredOOB: String[] = [];
  public butterflyJar: number = 0;
  public zoes: number = 0;

  private flipTick() {
    this.tick = !this.tick;
  }

  onAddOrbs(orbs: String[]) {
    this.orbs = orbs;
    this.flipTick();
  }

  onAddGems(gems: Map<string, number>) {
    this.gems = gems;
    this.flipTick();
  }

  onAddSpirits(spirits: String[]) {
    this.spirits = spirits;
    this.flipTick();
  }

  onAddTalisman(talismans: String[]) {
    this.talismans = talismans;
    this.flipTick();
  }

  onAddExit(exits: String[]) {
    this.exits = exits;
    this.flipTick();
  }

  onAddMoneyBags(moneyBags: String[]) {
    this.moneyBags = moneyBags;
    this.flipTick();
  }

  onAddPinkGems(pinkGems: number) {
    this.pinkGems = pinkGems;
  }

  onStandOnPortal(map: Map<string, number>) {
    this.portalStoodOn = map;
    this.flipTick();
  }

  onAddPowerup(map: Map<string, Powerup>) {
    this.powerup = map;
    this.flipTick();
  }

  onAddStrongChest(strongChests: number) {
    this.strongChest = strongChests;
  }

  onAddMysteryJar(mysteryJars: number) {
    this.mysteryJar = mysteryJars;
  }

  onAddSkillPoint(names: String[]) {
    this.skillPoint = names;
    this.flipTick();
  }

  onAddFireworksBottle(fireworksBottles: number) {
    this.fireworksBottle = fireworksBottles;
  }

  onAddRocket(rockets: number) {
    this.rocket = rockets;
  }

  onAddHeadbashChest(headbashChest: number) {
    this.headbashChest = headbashChest;
  }

  onAddSpecialEvent(names: String[]) {
    this.specialEvent = names;
    this.flipTick();
  }

  onAddEnteredOOB(names: String[]) {
    this.enteredOOB = names;
    this.flipTick();
  }

  onAddButterflyJar(butterflyJars: number) {
    this.butterflyJar = butterflyJars;
  }

  onAddZoe(zoes: number) {
    this.zoes = zoes;
  }

}
