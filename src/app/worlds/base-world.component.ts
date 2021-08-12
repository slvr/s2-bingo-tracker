import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Powerup } from "../models/powerup";

@Component({
    template: ''
})
export abstract class BaseWorld implements OnInit {

    @Output() addOrbs = new EventEmitter<string>();
    @Output() addGems = new EventEmitter<Map<string, number>>();
    @Output() addSpirits = new EventEmitter<string>();
    @Output() addTalisman = new EventEmitter<string>();
    @Output() addExit = new EventEmitter<string>();
    @Output() addMoneyBags = new EventEmitter<string>();
    @Output() addPinkGem = new EventEmitter<number>();

    @Output() addPortalStoodOn = new EventEmitter<Map<string, number>>();
    @Output() addPowerup = new EventEmitter<Map<string, Powerup>>();
    @Output() addStrongChest = new EventEmitter<number>();
    @Output() addMysteryJar = new EventEmitter<number>();
    @Output() addSkillPoint = new EventEmitter<string>();
    @Output() addFireworksBottle = new EventEmitter<number>();
    @Output() addRocket = new EventEmitter<number>();
    @Output() addHeadbashChest = new EventEmitter<number>();
    @Output() addSpecialEvent = new EventEmitter<string>();
    @Output() addEnteredOOB = new EventEmitter<string>();
    @Output() addButterflyJar = new EventEmitter<number>();
    @Output() addZoe = new EventEmitter<number>();

    totalGems: number = 0;
    maxGems: number = 0;
    totalOrbs: number = 0;
    maxOrbs: number = 0;

    levelsWithAllSpirits: number = 0;
    talismansAcquired: number = 0;
    exitPortals: number = 0;
    moneybagsPaid: number = 0;

    allCollectedOrbs: String[] = [];
    levelNamesWithAllSpirits: String[] = [];
    TalismanNames: String[] = [];
    ExitPortalsGoneThrough: String[] = [];
    moneyBagsInstancesPaid: String[] = [];

    constructor() { }

    ngOnInit(): void {

    }

    onAddOrbs(name: string) {
        if (!this.allCollectedOrbs.includes(name)) {
            this.totalOrbs++;
            this.allCollectedOrbs.push(name);
            this.addOrbs.emit(name);
        } else {
            this.totalOrbs--;
            this.allCollectedOrbs.splice(this.allCollectedOrbs.indexOf(name), 1);
            this.addOrbs.emit(name)
        }
    }

    onAddGems(map: Map<string, number>) {
        if (map.size == 1) {
            for (let [key, value] of map) {
                this.totalGems = this.totalGems + value;
            }
            this.addGems.emit(map)
        }
    }

    onAddSpirits(name: string) {
        if (!this.levelNamesWithAllSpirits.includes(name)) {
            this.levelsWithAllSpirits++;
            this.levelNamesWithAllSpirits.push(name);
            this.addSpirits.emit(name);
        } else {
            this.levelsWithAllSpirits--;
            this.levelNamesWithAllSpirits.splice(this.levelNamesWithAllSpirits.indexOf(name), 1);
            this.addSpirits.emit(name);
        }
    }

    onAddTalisman(name: string) {
        if (!this.TalismanNames.includes(name)) {
            this.talismansAcquired++;
            this.TalismanNames.push(name);
            this.addTalisman.emit(name);
        } else {
            this.talismansAcquired--;
            this.TalismanNames.splice(this.TalismanNames.indexOf(name), 1);
            this.addTalisman.emit(name);
        }
    }

    onAddExit(name: string) {
        if (!this.ExitPortalsGoneThrough.includes(name)) {
            this.exitPortals++;
            this.ExitPortalsGoneThrough.push(name);
            this.addExit.emit(name);
        } else {
            this.exitPortals--;
            this.ExitPortalsGoneThrough.splice(this.ExitPortalsGoneThrough.indexOf(name), 1);
            this.addExit.emit(name);
        }
    }

    onAddMoneyBags(name: string) {
        if (!this.moneyBagsInstancesPaid.includes(name)) {
            this.moneybagsPaid++;
            this.moneyBagsInstancesPaid.push(name)
            this.addMoneyBags.emit(name);
        } else {
            this.moneybagsPaid--;
            this.moneyBagsInstancesPaid.splice(this.moneyBagsInstancesPaid.indexOf(name), 1);
            this.addMoneyBags.emit(name);
        }
    }

    onAddPinkGem(num: number) {
        this.addPinkGem.emit(num);
    }

    onStandOnPortal(map: Map<string, number>) {
        this.addPortalStoodOn.emit(map);
    }

    onAddPowerup(map: Map<string, Powerup>) {
        this.addPowerup.emit(map);
    }

    onAddStrongChest(num: number) {
        this.addStrongChest.emit(num);
    }

    onAddMysteryJar(num: number) {
        this.addMysteryJar.emit(num);
    }

    onAddSkillPoint(name: string) {
        this.addSkillPoint.emit(name)
    }

    onAddFireworksBottle(num: number) {
        this.addFireworksBottle.emit(num);
    }

    onAddRocket(num: number) {
        this.addRocket.emit(num);
    }

    onAddHeadbashChest(num: number) {
        this.addHeadbashChest.emit(num);
    }

    onAddSpecialEvent(name: string) {
        this.addSpecialEvent.emit(name);
    }

    onAddEnteredOOB(name: string) {
        this.addEnteredOOB.emit(name);
    }

    onAddButterflyJar(num: number) {
        this.addButterflyJar.emit(num);
    }

    onAddZoe(num: number) {
        this.addZoe.emit(num);
    }

}