import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Powerup } from '../models/powerup';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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

  onAddOrbs(name: string) {
    if (!this.allCollectedOrbs.includes(name)) {
      this.totalOrbs++;
      this.allCollectedOrbs.push(name);
    } else {
      this.totalOrbs--;
      this.allCollectedOrbs.splice(this.allCollectedOrbs.indexOf(name), 1);
    }
    this.addOrbs.emit(this.allCollectedOrbs);
  }

  onAddGems(map: Map<string, number>) {
    let mapKey: string = "";
    let mapValue: number = 0;
    if (map.size == 1) {
      for (let [key, value] of map) {
        this.totalGems = this.totalGems + value;
        mapKey = key;
        mapValue = value;
      }
      if (this.gemsMap.has(mapKey)) {
        let oldCount = this.gemsMap.get(mapKey);
        if (typeof oldCount !== 'undefined') {
          this.gemsMap.set(mapKey, (oldCount + mapValue));
        }
      } else {
        this.gemsMap.set(mapKey, mapValue);
      }
    }
    this.addGems.emit(this.gemsMap);
  }

  onAddSpirits(name: string) {
    if (!this.levelNamesWithAllSpirits.includes(name)) {
      this.levelsWithAllSpirits++;
      this.levelNamesWithAllSpirits.push(name);
    } else {
      this.levelsWithAllSpirits--;
      this.levelNamesWithAllSpirits.splice(this.levelNamesWithAllSpirits.indexOf(name), 1);
    }
    this.addSpirits.emit(this.levelNamesWithAllSpirits);
  }

  onAddTalisman(name: string) {
    if (!this.TalismanNames.includes(name)) {
      this.talismansAcquired++;
      this.TalismanNames.push(name);
    } else {
      this.talismansAcquired--;
      this.TalismanNames.splice(this.TalismanNames.indexOf(name), 1);
    }
    this.addTalisman.emit(this.TalismanNames);
  }

  onAddExit(name: string) {
    if (!this.ExitPortalsGoneThrough.includes(name)) {
      this.exitPortals++;
      this.ExitPortalsGoneThrough.push(name);
    } else {
      this.exitPortals--;
      this.ExitPortalsGoneThrough.splice(this.ExitPortalsGoneThrough.indexOf(name), 1);
    }
    this.addExit.emit(this.ExitPortalsGoneThrough);
  }

  onAddMoneyBags(name: string) {
    if (!this.moneyBagsInstancesPaid.includes(name)) {
      this.moneybagsPaid++;
      this.moneyBagsInstancesPaid.push(name);
      if (name == 'swimMoneyBags' && this.totalOrbs >= 8) {
        this.onAddSpecialEvent('buySwimWith8+Orbs');
      }
    } else {
      this.moneybagsPaid--;
      this.moneyBagsInstancesPaid.splice(this.moneyBagsInstancesPaid.indexOf(name), 1);
      if (name == 'swimMoneyBags') {
        this.onAddSpecialEvent('buySwimWith8+Orbs');
      }
    }
    this.addMoneyBags.emit(this.moneyBagsInstancesPaid);

  }

  onAddPinkGem(num: number) {
    this.numPinkGems = this.numPinkGems + num;
    this.addPinkGem.emit(this.numPinkGems);
  }

  onStandOnPortal(map: Map<string, number>) {
    for (let [key, value] of map) {
      if (this.portalsStoodOn.get(key) == null) {
        this.portalsStoodOn.set(key, value);
      } else {
        this.portalsStoodOn.delete(key);
      }
    }
    this.addPortalStoodOn.emit(this.portalsStoodOn);
  }

  onAddPowerup(map: Map<string, Powerup>) {
    for (let [key, value] of map) {
      if (this.powerupsUsed.get(key) == null) {
        this.powerupsUsed.set(key, value);
      } else {
        this.powerupsUsed.delete(key);
      }
    }
    this.addPowerup.emit(this.powerupsUsed);
  }

  onAddStrongChest(num: number) {
    this.numStrongChests = this.numStrongChests + num;
    this.addStrongChest.emit(this.numStrongChests);
  }

  onAddMysteryJar(num: number) {
    this.numMysteryJars = this.numMysteryJars + num;
    this.addMysteryJar.emit(this.numMysteryJars);
  }

  onAddSkillPoint(name: string) {
    if (!this.skillPointsAcquired.includes(name)) {
      this.numSkillPoints++;
      this.skillPointsAcquired.push(name);
    } else {
      this.numSkillPoints--;
      this.skillPointsAcquired.splice(this.skillPointsAcquired.indexOf(name), 1);
    }
    this.addSkillPoint.emit(this.skillPointsAcquired);
  }

  onAddFireworksBottle(num: number) {
    this.numFireworksBottles = this.numFireworksBottles + num;
    this.addFireworksBottle.emit(this.numFireworksBottles);
  }

  onAddRocket(num: number) {
    this.numRockets = this.numRockets + num;
    this.addRocket.emit(this.numRockets);
  }

  onAddHeadbashChest(num: number) {
    this.numHeadbashChests = this.numHeadbashChests + num;
    this.addHeadbashChest.emit(this.numHeadbashChests);
  }

  onAddSpecialEvent(name: string) {
    if (name == "talkToBrotherCurtis") {
      this.brotherCurtis();
    } else {
      if (!this.specialEventsTriggered.includes(name)) {
        this.specialEventsTriggered.push(name);
      } else {
        this.specialEventsTriggered.splice(this.specialEventsTriggered.indexOf(name), 1);
      }
      this.addSpecialEvent.emit(this.specialEventsTriggered);
    }
  }

  private brotherCurtis() {
    let name = "talkToBrotherCurtis";
    let element = document.getElementById(name);
    if (this.specialEventsTriggered.includes(name) && element != null && !element.classList.contains("not-opaque")) {
      this.specialEventsTriggered.splice(this.specialEventsTriggered.indexOf(name), 1);
      this.addSpecialEvent.emit(this.specialEventsTriggered);
    } else if (!this.specialEventsTriggered.includes(name) && this.talismansAcquired >= 4 && this.totalOrbs >= 4 && element != null && element.classList.contains("not-opaque")) {
      this.specialEventsTriggered.push(name);
      this.addSpecialEvent.emit(this.specialEventsTriggered);
    }
  }

  onAddEnteredOOB(name: string) {
    if (!this.portalsEnteredOOB.includes(name)) {
      this.numPortalsEnteredOOB++;
      this.portalsEnteredOOB.push(name);
    } else {
      this.numPortalsEnteredOOB--;
      this.portalsEnteredOOB.splice(this.portalsEnteredOOB.indexOf(name), 1);
    }
    this.addEnteredOOB.emit(this.portalsEnteredOOB);
  }

  onAddButterflyJar(num: number) {
    this.numButterflyJars = this.numButterflyJars + num;
    this.addButterflyJar.emit(this.numButterflyJars);
  }

  onAddZoe(num: number) {
    this.numZoes = this.numZoes + num;
    this.addZoe.emit(this.numZoes)
  }

}
