import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Powerup } from '../models/powerup';

@Component({
    template: ''
})
export abstract class BaseLevel implements OnInit {

    levelName: string = "";

    addedGems: number = 0;

    totalGems: number = 0;
    maxGems: number = 400;
    totalOrbs: number = 0;
    maxOrbs: number = 0;
    numEnemies: number = 0;
    allSpirits: boolean = false;
    talisman: boolean = false;
    exitPortal: boolean = false;
    moneyBags: boolean[] = [];
    bossDefeated: boolean = false;

    portalStoodOn: number = 0; //0 for not, 1 for yes, 2 for yes w/ tali
    powerup: Powerup | null = null;
    powerupUsed: boolean = false;
    pinkGems: number = 0;
    maxPinkGems: number = 0;
    strongChests: number = 0;
    maxStrongChests: number = 0;
    mysteryJar: boolean = false;
    skillPoints: boolean[] = [];
    fireworksBottles: number = 0;
    maxFireworksBottles: number = 0;
    rocket: boolean = false;
    headbashChest: number = 0;
    maxHeadbashChest: number = 0;
    specialEvents: boolean[] = [];
    enteredOOB: boolean = false;
    butterflyJars: number = 0;
    maxButterflyJars: number = 0;
    zoes: number = 0;
    maxZoes: number = 0;

    constructor() { }

    ngOnInit(): void {

    }

    @Output() addOrbs = new EventEmitter<string>();
    @Output() addGems = new EventEmitter<Map<string, number>>();
    @Output() addSpirits = new EventEmitter<string>();
    @Output() addTalisman = new EventEmitter<string>();
    @Output() addExit = new EventEmitter<string>();
    @Output() addMoneyBags = new EventEmitter<string>();

    @Output() addPortalStoodOn = new EventEmitter<Map<string, number>>();
    @Output() addPowerup = new EventEmitter<Map<string, Powerup>>();
    @Output() addPinkGem = new EventEmitter<number>();
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

    collectGems(numGems: number) {
        if (Number(numGems) != NaN) {
            if ((this.totalGems + Number(numGems)) > this.maxGems) {
                numGems = this.maxGems - this.totalGems;
            } else if ((this.totalGems + Number(numGems)) < 0) {
                numGems = -this.totalGems;
            }
            this.totalGems = this.totalGems + Number(numGems);
            let map = new Map();
            map.set(this.levelName, Number(numGems));
            this.addGems.emit(map);
        }
    }

    protected getOrb(localVariable: boolean, elementName: string) {
        if (!localVariable) {
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.add("not-opaque");
                this.totalOrbs++;
                this.addOrbs.emit(elementName);
            }
        } else {
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.remove("not-opaque");
                this.totalOrbs--;
                this.addOrbs.emit(elementName);
            }
        }
    }

    completeSpirits(elementName: string, event: Event) {
        event.preventDefault();
        if (!this.allSpirits) {
            this.allSpirits = true;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.add("not-opaque");
                this.addSpirits.emit(this.levelName);
            }
        } else {
            this.allSpirits = false;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.remove("not-opaque");
                this.addSpirits.emit(this.levelName);
            }
        }
    }

    getTalisman(elementName: string, event: Event) {
        event.preventDefault();
        if (!this.talisman) {
            this.talisman = true;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.add("not-opaque");
                this.addTalisman.emit(this.levelName);
            }
        } else {
            this.talisman = false;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.remove("not-opaque");
                this.addTalisman.emit(this.levelName);
            }
        }
    }

    exitThroughPortal(elementName: string, event: Event) {
        event.preventDefault();
        if (!this.exitPortal) {
            this.exitPortal = true;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.add("not-opaque");
                this.addExit.emit(this.levelName);
            }
        } else {
            this.exitPortal = false;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.remove("not-opaque");
                this.addExit.emit(this.levelName);
            }
        }
    }

    payMoneybags(elementName: string, index: number, event: Event) {
        event.preventDefault();
        if (!this.moneyBags[index]) {
            this.moneyBags[index] = true;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.add("not-opaque");
                this.addMoneyBags.emit(elementName);
            }
        } else {
            this.moneyBags[index] = false;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.remove("not-opaque");
                this.addMoneyBags.emit(elementName);
            }
        }
    }

    defeatBoss(elementName: string, event: Event) {
        event.preventDefault();
        if (!this.bossDefeated) {
            this.bossDefeated = true;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.add("not-opaque");
            }
        } else {
            this.bossDefeated = false;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.remove("not-opaque");
            }
        }
    }

    standOnPortal(elementName: string, event: Event) {
        event.preventDefault();
        if (this.portalStoodOn == 0) {
            if (this.talisman == true) {
                this.portalStoodOn = 2;
            } else {
                this.portalStoodOn = 1;
            }
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.add("not-opaque");
                let map = new Map();
                map.set(this.levelName, this.portalStoodOn)
                this.addPortalStoodOn.emit(map);
            }
        } else {
            this.portalStoodOn = 0;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.remove("not-opaque");
                let map = new Map();
                map.set(this.levelName, this.portalStoodOn)
                this.addPortalStoodOn.emit(map);
            }
        }
    }

    usePowerup(elementName: string, event: Event) {
        event.preventDefault();
        if (!this.powerupUsed) {
            this.powerupUsed = true;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.add("not-opaque");
                let map = new Map();
                map.set(this.levelName, this.powerup);
                this.addPowerup.emit(map);
            }
        } else {
            this.powerupUsed = false;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.remove("not-opaque");
                let map = new Map();
                map.set(this.levelName, this.powerup);
                this.addPowerup.emit(map);
            }
        }
    }

    collectPinkGem(elementName: string) {
        this.handlePinkGem(1, elementName);
    }

    removePinkGem(event: Event, elementName: string) {
        event.preventDefault();
        this.handlePinkGem(-1, elementName);
    }

    private handlePinkGem(num: number, elementName: string) {
        if (!(this.pinkGems + num < 0 || this.pinkGems + num > this.maxPinkGems)) {
            this.pinkGems = this.pinkGems + num;
            this.addPinkGem.emit(num);
        }
        this.handleOpacity(this.pinkGems, elementName);
    }

    breakStrongChest(elementName: string) {
        this.handleStongChest(1, elementName);
    }

    removeStrongChest(event: Event, elementName: string) {
        event.preventDefault();
        this.handleStongChest(-1, elementName);
    }

    private handleStongChest(num: number, elementName: string) {
        if (!(this.strongChests + num < 0 || this.strongChests + num > this.maxStrongChests)) {
            this.strongChests = this.strongChests + num;
            this.addStrongChest.emit(num);
        }
        this.handleOpacity(this.strongChests, elementName);
    }

    breakMysteryJar(elementName: string, event: Event) {
        event.preventDefault();
        if (!this.mysteryJar) {
            this.mysteryJar = true;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.add("not-opaque");
                this.addMysteryJar.emit(1);
            }
        } else {
            this.mysteryJar = false;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.remove("not-opaque");
                this.addMysteryJar.emit(-1);
            }
        }
    }

    getSkillPoint(elementName: string, index: number, event: Event) {
        event.preventDefault();
        if (!this.skillPoints[index]) {
            this.skillPoints[index] = true;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.add("not-opaque");
                this.addSkillPoint.emit(elementName);
            }
        } else {
            this.skillPoints[index] = false;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.remove("not-opaque");
                this.addSkillPoint.emit(elementName);
            }
        }
    }

    breakFireworksBottle(elementName: string) {
        this.handleFireworksBottle(1, elementName);
    }

    removeFireworksBottle(event: Event, elementName: string) {
        event.preventDefault();
        this.handleFireworksBottle(-1, elementName);
    }

    private handleFireworksBottle(num: number, elementName: string) {
        if (!(this.fireworksBottles + num < 0 || this.fireworksBottles + num > this.maxFireworksBottles)) {
            this.fireworksBottles = this.fireworksBottles + num;
            this.addFireworksBottle.emit(num);
        }
        this.handleOpacity(this.fireworksBottles, elementName);
    }

    igniteRocket(elementName: string, event: Event) {
        event.preventDefault();
        if (!this.rocket) {
            this.rocket = true;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.add("not-opaque");
                this.addRocket.emit(1);
            }
        } else {
            this.rocket = false;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.remove("not-opaque");
                this.addRocket.emit(-1);
            }
        }
    }

    breakHeadbashChest(elementName: string) {
        this.handleHeadbashChest(1, elementName);
    }

    removeHeadbashChest(event: Event, elementName: string) {
        event.preventDefault();
        this.handleHeadbashChest(-1, elementName);
    }

    private handleHeadbashChest(num: number, elementName: string) {
        if (!(this.headbashChest + num < 0 || this.headbashChest + num > this.maxHeadbashChest)) {
            this.headbashChest = this.headbashChest + num;
            this.addHeadbashChest.emit(num);
        }
        this.handleOpacity(this.headbashChest, elementName);
    }

    triggerSpecialEvent(elementName: string, index: number, event: Event) {
        event.preventDefault();
        if (!this.specialEvents[index]) {
            this.specialEvents[index] = true;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.add("not-opaque");
                this.addSpecialEvent.emit(elementName);
            }
        } else {
            this.specialEvents[index] = false;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.remove("not-opaque");
                this.addSpecialEvent.emit(elementName);
            }
        }
    }

    enterFromOOB(elementName: string, event: Event) {
        event.preventDefault();
        if (!this.enteredOOB) {
            this.enteredOOB = true;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.add("not-opaque");
                this.addEnteredOOB.emit(this.levelName);
            }
        } else {
            this.enteredOOB = false;
            var element = document.getElementById(elementName);
            if (element != null) {
                element.classList.remove("not-opaque");
                this.addEnteredOOB.emit(this.levelName);
            }
        }
    }

    breakButterflyJar(elementName: string) {
        this.handleButterflyJar(1, elementName);
    }

    removeButterflyJar(event: Event, elementName: string) {
        event.preventDefault();
        this.handleButterflyJar(-1, elementName);
    }

    private handleButterflyJar(num: number, elementName: string) {
        if (!(this.butterflyJars + num < 0 || this.butterflyJars + num > this.maxButterflyJars)) {
            this.butterflyJars = this.butterflyJars + num;
            this.addButterflyJar.emit(num);
        }
        this.handleOpacity(this.butterflyJars, elementName);
    }

    talkToZoe(elementName: string) {
        this.handleZoes(1, elementName);
    }

    removeZoe(event: Event, elementName: string) {
        event.preventDefault();
        this.handleZoes(-1, elementName);
    }

    private handleZoes(num: number, elementName: string) {
        if (!(this.zoes + num < 0 || this.zoes + num > this.maxZoes)) {
            this.zoes = this.zoes + num;
            this.addZoe.emit(num);
        }
        this.handleOpacity(this.zoes, elementName);
    }

    private handleOpacity(num: number, elementName: string) {
        var element = document.getElementById(elementName);
        if (num == 0 && element != null && element.classList.contains("not-opaque")) {
            element.classList.remove("not-opaque");
        } else if (num > 0 && element != null && !element.classList.contains("not-opaque")) {
            element.classList.add("not-opaque");
        }
    }

}