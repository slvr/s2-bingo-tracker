import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Powerup } from '../models/powerup';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss']
})
export class TotalsComponent implements OnInit {

  totalGems: number = 0;
  maxGems: number = 10000;
  totalOrbs: number = 0;
  maxOrbs: number = 64;

  levelsWithAllSpirits: number = 0;
  talismansAcquired: number = 0;
  exitPortals: number = 0;
  moneybagsPaid: number = 0;

  allCollectedOrbs: String[] = [];
  levelNamesWithAllSpirits: String[] = [];
  TalismanNames: String[] = [];
  ExitPortalsGoneThrough: String[] = [];
  moneyBagsInstancesPaid: String[] = [];
  gemsMap: Map<string, number> = new Map();
  portalsStoodOn: Map<string, number> = new Map();
  powerupsUsed: Map<string, Powerup> = new Map();
  skillPointsAcquired: String[] = [];
  specialEventsTriggered: String[] = [];
  portalsEnteredOOB: String[] = [];

  numPinkGems: number = 0;
  numStrongChests: number = 0;
  numMysteryJars: number = 0;
  numFireworksBottles: number = 0;
  numRockets: number = 0;
  numHeadbashChests: number = 0;
  numButterflyJars: number = 0;
  numSkillPoints: number = 0;
  numPortalsEnteredOOB: number = 0;
  numPortalsStoodOn: number = 0;
  numZoes: number = 0;

  @Output() addOrbs = new EventEmitter<String[]>();
  @Output() addGems = new EventEmitter<Map<string, number>>();
  @Output() addSpirits = new EventEmitter<String[]>();
  @Output() addTalisman = new EventEmitter<String[]>();
  @Output() addExit = new EventEmitter<String[]>();
  @Output() addMoneyBags = new EventEmitter<String[]>();
  @Output() addPortalStoodOn = new EventEmitter<Map<string, number>>();
  @Output() addPowerup = new EventEmitter<Map<string, Powerup>>();
  @Output() addPinkGem = new EventEmitter<number>();
  @Output() addStrongChest = new EventEmitter<number>();
  @Output() addMysteryJar = new EventEmitter<number>();
  @Output() addSkillPoint = new EventEmitter<String[]>();
  @Output() addFireworksBottle = new EventEmitter<number>();
  @Output() addRocket = new EventEmitter<number>();
  @Output() addHeadbashChest = new EventEmitter<number>();
  @Output() addSpecialEvent = new EventEmitter<String[]>();
  @Output() addEnteredOOB = new EventEmitter<String[]>();
  @Output() addButterflyJar = new EventEmitter<number>();
  @Output() addZoe = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddOrbs(names: String[]) {
    this.allCollectedOrbs = names;
    this.totalOrbs = names.length;
    this.addOrbs.emit(this.allCollectedOrbs);
  }

  onAddGems(map: Map<string, number>) {
    this.gemsMap = map;
    this.totalGems = 0;
    for (let [key, value] of this.gemsMap) {
      this.totalGems = this.totalGems + value;
    } 
    this.addGems.emit(this.gemsMap);
  }

  onAddSpirits(names: String[]) {
    this.levelNamesWithAllSpirits = names;
    this.levelsWithAllSpirits = names.length;
    this.addSpirits.emit(this.levelNamesWithAllSpirits);
  }

  onAddTalisman(names: String[]) {
    this.TalismanNames = names;
    this.talismansAcquired = names.length;
    this.addTalisman.emit(this.TalismanNames);
  }

  onAddExit(names: String[]) {
    this.ExitPortalsGoneThrough = names;
    this.exitPortals = names.length;
    this.addExit.emit(this.ExitPortalsGoneThrough);
  }

  onAddMoneyBags(names: String[]) {
    this.moneyBagsInstancesPaid = names;
    this.moneybagsPaid = names.length;
    this.addMoneyBags.emit(this.moneyBagsInstancesPaid);

  }

  onAddPinkGems(num: number) {
    this.numPinkGems = num;
    this.addPinkGem.emit(this.numPinkGems);
  }

  onStandOnPortal(map: Map<string, number>) {
    this.portalsStoodOn = map;
    this.numPortalsStoodOn = map.size;
    this.addPortalStoodOn.emit(this.portalsStoodOn);
  }

  onAddPowerup(map: Map<string, Powerup>) {
    this.powerupsUsed = map;
    this.addPowerup.emit(this.powerupsUsed);
  }

  onAddStrongChest(num: number) {
    this.numStrongChests = num;
    this.addStrongChest.emit(this.numStrongChests);
  }

  onAddMysteryJar(num: number) {
    this.numMysteryJars = num;
    this.addMysteryJar.emit(this.numMysteryJars);
  }

  onAddSkillPoint(names: String[]) {
    this.skillPointsAcquired = names;
    this.numSkillPoints = names.length;
    this.addSkillPoint.emit(this.skillPointsAcquired);
  }

  onAddFireworksBottle(num: number) {
    this.numFireworksBottles = num;
    this.addFireworksBottle.emit(this.numFireworksBottles);
  }

  onAddRocket(num: number) {
    this.numRockets = num;
    this.addRocket.emit(this.numRockets);
  }

  onAddHeadbashChest(num: number) {
    this.numHeadbashChests = num;
    this.addHeadbashChest.emit(this.numHeadbashChests);
  }

  onAddSpecialEvent(names: String[]) {
    this.specialEventsTriggered = names;
    this.addSpecialEvent.emit(this.specialEventsTriggered);
  }

  onAddEnteredOOB(names: String[]) {
    this.portalsEnteredOOB = names
    this.numPortalsEnteredOOB = names.length;
    this.addEnteredOOB.emit(this.portalsEnteredOOB);
  }

  onAddButterflyJar(num: number) {
    this.numButterflyJars = num;
    this.addButterflyJar.emit(this.numButterflyJars);
  }

  onAddZoe(num: number) {
    this.numZoes = num;
    this.addZoe.emit(this.numZoes)
  }

}
