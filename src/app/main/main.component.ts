import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MainServiceService } from '../services/main-service.service';
import { Slot } from '../models/slot';
import { Powerup, PowerupType } from '../models/powerup';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges {

  @Input() tick: boolean | number = false;
  @Input() orbs: String[] = [];
  @Input() gems: Map<string, number> = new Map();
  @Input() spirits: String[] = [];
  @Input() talismans: String[] = [];
  @Input() exits: String[] = [];
  @Input() moneyBags: String[] = [];
  @Input() pinkGems: number = 0;
  @Input() portalStoodOn: Map<string, number> = new Map();
  @Input() powerup: Map<string, Powerup> = new Map();
  @Input() strongChest: number = 0;
  @Input() mysteryJar: number = 0;
  @Input() skillPoint: String[] = [];
  @Input() fireworksBottle: number = 0;
  @Input() rocket: number = 0;
  @Input() headbashChest: number = 0;
  @Input() specialEvent: String[] = [];
  @Input() enteredOOB: String[] = [];
  @Input() butterflyJar: number = 0;
  @Input() zoes: number = 0;

  board: Object = {};
  url: string = "";
  slots: Slot[] = [];

  popup: boolean = false;

  cellColour: string = "purple"

  constructor(private mainService: MainServiceService) {
  }

  ngOnInit(): void {

  }

  ngOnChanges() {
    this.checkConditions();
  }

  loadTable(bingoSyncURL: string) {
    this.mainService.getBoard(bingoSyncURL).subscribe(data => {
      this.board = data;
      this.slots = Object.values(this.board);
    })
  }

  colour(slot: string) {
    var element = document.getElementById(slot);
    if (element != null) {
      if (element.classList.contains("user-" + this.cellColour)) {
        element.classList.remove("user-" + this.cellColour);
      } else {
        element.classList.add("user-" + this.cellColour);
      }
    }
  }

  private checkConditions() {
    for (let i = 1; i <= this.slots.length; i++) {
      let elementName = "slot" + i;
      let element = document.getElementById(elementName);
      if (element != null) {
        let cond: boolean;
        switch (this.slots[i - 1].name) {
          case "10 Autumn Plains orbs":
            cond = this.hasMinOrbs(["theEndOfTheWall", "longGlide", "mineBlast", "gearGrab", "dracletCave", "georgeTheSnowLeopard", "freeTheFaun",
              "alchemistEscort", "earthshaperBash", "partyCrashers", "crystalGeysers1", "crystalGeysers2", "barrelOfMonkeys", "captureTheFlags",
              "catch3Thieves", "freeHippos", "lavaLizards1", "lavaLizards2", "demBones", "cowlekCorral1", "cowlekCorral2", "sowingSeeds1",
              "sowingSeeds2", "parasailThroughRings", "grabTheLoot"], 10);
            this.colourCell(element, cond);
            break;
          case "100% Aquaria Towers":
            cond = (this.hasOrbs(["seahorseRescue", "mantaRide1", "mantaRide2"]) && this.hasGems(400, ["Aquaria Towers"]) && this.hasTalismans(["Aquaria Towers"]));
            this.colourCell(element, cond);
            break;
          case "100% Autumn Plains":
            cond = (this.hasOrbs(["theEndOfTheWall", "longGlide"]) && this.hasGems(400, ["Autumn Plains"]));
            this.colourCell(element, cond);
            break;
          case "100% Breeze Harbor":
            cond = (this.hasOrbs(["mineBlast", "gearGrab"]) && this.hasGems(400, ["Breeze Harbor"]) && this.hasTalismans(["Breeze Harbor"]));
            this.colourCell(element, cond);
            break;
          case "100% Cloud Temples":
            cond = (this.hasOrbs(["breakDownDoors", "agentZerosSecretHideout", "ringTowerBells"]) && this.hasGems(400, ["Cloud Temples"]));
            this.colourCell(element, cond);
            break;
          case "100% Colossus":
            cond = (this.hasOrbs(["hockeyVsGoalie", "hockeyOneOnOne", "evilSpiritSearch"]) && this.hasGems(400, ["Colossus"]) && this.hasTalismans(["Colossus"]));
            this.colourCell(element, cond);
            break;
          case "100% Crystal Glacier":
            cond = (this.hasOrbs(["dracletCave", "georgeTheSnowLeopard"]) && this.hasGems(400, ["Crystal Glacier"])  && this.hasTalismans(["Crystal Glacier"]));
            this.colourCell(element, cond);
            break;
          case "100% Fracture Hills":
            cond = (this.hasOrbs(["freeTheFaun", "alchemistEscort", "earthshaperBash"]) && this.hasGems(400, ["Fracture Hills"])  && this.hasTalismans(["Fracture Hills"]));
            this.colourCell(element, cond);
            break;
          case "100% Glimmer":
            cond = (this.hasOrbs(["lizardHunt", "gemLampFightOutdoors", "gemLampFightIndoors"]) && this.hasGems(400, ["Glimmer"])  && this.hasTalismans(["Glimmer"]));
            this.colourCell(element, cond);
            break;
          case "100% Hurricos":
            cond = (this.hasOrbs(["stoneThiefChase", "factoryGlide1", "factoryGlide2"]) && this.hasGems(400, ["Hurricos"])  && this.hasTalismans(["Hurrixos"]));
            this.colourCell(element, cond);
            break;
          case "100% Idol Springs":
            cond = (this.hasOrbs(["foremanBudsPuzzle", "hulaGirlRescue"]) && this.hasGems(400, ["Idol Springs"])  && this.hasTalismans(["Idol Springs"]));
            this.colourCell(element, cond);
            break;
          case "100% Magma Cone":
            cond = (this.hasOrbs(["partyCrashers", "crystalGeysers1", "crystalGeysers2"]) && this.hasGems(400, ["Magma Cone"])  && this.hasTalismans(["Magma Cone"]));
            this.colourCell(element, cond);
            break;
          case "100% Metropolis":
            cond = (this.hasOrbs(["conquerInvadingCows", "shootDownSheepSaucers1", "shootDownSheepSaucers2", "oxBombing"]) && this.hasGems(400, ["Metropolis"]));
            this.colourCell(element, cond);
            break;
          case "100% Mystic Marsh":
            cond = (this.hasOrbs(["fixTheFountain", "veryVersatileThieves", "retrieveProfessorsPencil"]) && this.hasGems(400, ["Mystic Marsh"]));
            this.colourCell(element, cond);
            break;
          case "100% Robotica Farms":
            cond = (this.hasOrbs(["switchOnBugLight", "clearTractorPath", "exterminateCrowBugs"]) && this.hasGems(400, ["Robotica Farms"]));
            this.colourCell(element, cond);
            break;
          case "100% Scorch":
            cond = (this.hasOrbs(["barrelOfMonkeys", "captureTheFlags"]) && this.hasGems(400, ["Scorch"]) && this.hasTalismans(["Scorch"]));
            this.colourCell(element, cond);
            break;
          case "100% Shady Oasis":
            cond = (this.hasOrbs(["catch3Thieves", "freeHippos"]) && this.hasGems(400, ["Shady Oasis"]) && this.hasTalismans(["Shady Oasis"]));
            this.colourCell(element, cond);
            break;
          case "100% Skelos Badlands":
            cond = (this.hasOrbs(["lavaLizards1", "lavaLizards2", "demBones"]) && this.hasGems(400, ["Skelos Badlands"]) && this.hasTalismans(["Skelos Badlands"]));
            this.colourCell(element, cond);
            break;
          case "100% Summer Forest":
            cond = (this.hasOrbs(["huntersChallenge", "atopALadder", "onASercretLedge", "behindTheDoor"]) && this.hasGems(400, ["Summer Forest"]));
            this.colourCell(element, cond);
            break;
          case "100% Sunny Beach":
            cond = (this.hasOrbs(["blastingBoxes", "turtleSoup1", "turtleSoup2"]) && this.hasGems(400, ["Sunny Beach"]) && this.hasTalismans(["Sunny Beach"]));
            this.colourCell(element, cond);
            break;
          case "100% Winter Tundra":
            cond = (this.hasOrbs(["topOfTheWaterfall", "onTheTallWall", "smashTheRock"]) && this.hasGems(400, ["Winter Tundra"]));
            this.colourCell(element, cond);
            break;
          case "100% Zephyr":
            cond = (this.hasOrbs(["cowlekCorral1", "cowlekCorral2", "sowingSeeds1", "sowingSeeds2"]) && this.hasGems(400, ["Zephyr"]) && this.hasTalismans(["Zephyr"]));
            this.colourCell(element, cond);
            break;
          case "1000 Summer Forest gems":
            cond = (this.hasGems(1000, ["Summer Forest", "Glimmer", "Idol Springs", "Colossus", "Hurricos", "Sunny Beach", "Aquaria Towers", "Ocean Speedway"]));
            this.colourCell(element, cond);
            break;
          case "1000 Winter Tundra gems":
            cond = (this.hasGems(1000, ["Winter Tundra", "Mystic Marsh", "Cloud Temples", "Robotica Farms", "Metropolis", "Canyon Speedway"]));
            this.colourCell(element, cond);
            break;
          case "12 Summer Forest orbs":
            cond = this.hasMinOrbs(["seahorseRescue", "mantaRide1", "mantaRide2",
              "hockeyVsGoalie", "hockeyOneOnOne", "evilSpiritSearch",
              "lizardHunt", "gemLampFightOutdoors", "gemLampFightIndoors",
              "stoneThiefChase", "factoryGlide1", "factoryGlide2",
              "foremanBudsPuzzle", "hulaGirlRescue",
              "huntersChallenge", "atopALadder", "onASercretLedge", "behindTheDoor",
              "blastingBoxes", "turtleSoup1", "turtleSoup2",
              "followHunter"], 12);
            this.colourCell(element, cond);
            break;
          case "1200 Autumn Plains gems":
            cond = this.hasGems(1200, ["Autumn Plains", "Crystal Glacier", "Skelos Badlands",
              "Breeze Harbor", "Zephyr", "Scorch", "Fracture Hills", "Magma Cone", "Shady Oasis",
              "Metro Speedway", "Icy Speedway"]);
            this.colourCell(element, cond);
            break;
          case "2 Professor orbs":
            cond = this.hasMinOrbs(["evilSpiritSearch", "sowingSeeds1", "retrieveProfessorsPencil"], 2);
            this.colourCell(element, cond);
            break;
          case "20 orbs":
            cond = this.orbs.length >= 20;
            this.colourCell(element, cond);
            break;
          case "2000 gems":
            cond = this.hasGems(2000, []);
            this.colourCell(element, cond);
            break;
          case "250 gems in both Glimmer & Metropolis":
            cond = (this.hasGems(250, ["Glimmer"])) && (this.hasGems(250, ["Metropolis"]));
            this.colourCell(element, cond);
            break;
          case "250 gems in both Idol Springs & Cloud Temples":
            cond = (this.hasGems(250, ["Idol Springs"])) && (this.hasGems(250, ["Cloud Temples"]));
            this.colourCell(element, cond);
            break;
          case "250 gems in both Scorch & Fracture Hills":
            cond = (this.hasGems(250, ["Scorch"])) && (this.hasGems(250, ["Fracture Hills"]));
            this.colourCell(element, cond);
            break;
          case "250 gems in both Sunny Beach & Breeze Harbor":
            cond = (this.hasGems(250, ["Sunny Beach"])) && (this.hasGems(250, ["Breeze Harbor"]));
            this.colourCell(element, cond);
            break;
          case "250 gems in both Zephyr and Shady Oasis":
            cond = (this.hasGems(250, ["Zephyr"])) && (this.hasGems(250, ["Shady Oasis"]));
            this.colourCell(element, cond);
            break;
          case "300 gems in both Idol Springs and Colossus":
            cond = (this.hasGems(300, ["Idol Springs"])) && (this.hasGems(300, ["Colossus"]));
            this.colourCell(element, cond);
            break;
          case "4+ orbs in Colossus & Fracture Hills":
            cond = this.hasMinOrbs(["hockeyVsGoalie", "hockeyOneOnOne", "evilSpiritSearch", "freeTheFaun", "alchemistEscort", "earthshaperBash"], 4);
            this.colourCell(element, cond);
            break;
          case "4+ orbs in Glimmer & Sunny Beach":
            cond = this.hasMinOrbs(["lizardHunt", "gemLampFightOutdoors", "gemLampFightIndoors", "blastingBoxes", "turtleSoup1", "turtleSoup2"], 4);
            this.colourCell(element, cond);
            break;
          case "4+ orbs in Hurricos & Magma Cone":
            cond = this.hasMinOrbs(["stoneThiefChase", "factoryGlide1", "factoryGlide2", "partyCrashers", "crystalGeysers1", "crystalGeysers2"], 4);
            this.colourCell(element, cond);
            break;
          case "4+ orbs in Skelos Badlands & Mystic Marsh":
            cond = this.hasMinOrbs(["fixTheFountain", "veryVersatileThieves", "retrieveProfessorsPencil", "lavaLizards1", "lavaLizards2", "demBones"], 4);
            this.colourCell(element, cond);
            break;
          case "5+ orbs in Breeze Harbour and Zephyr":
            cond = this.hasMinOrbs(["cowlekCorral1", "cowlekCorral2", "sowingSeeds1", "sowingSeeds2", "mineBlast", "gearGrab"], 5);
            this.colourCell(element, cond);
            break;
          case "5+ orbs in Cloud Temples & Metropolis":
            cond = this.hasMinOrbs(["conquerInvadingCows", "shootDownSheepSaucers1", "shootDownSheepSaucers2", "oxBombing", "breakDownDoors", "agentZerosSecretHideout", "ringTowerBells"], 5);
            this.colourCell(element, cond);
            break;
          case "600 combined gems in Crystal Glacier and Robotica Farms":
            cond = this.hasGems(600, ["Crystal Glacier", "Robotica Farms"]);
            this.colourCell(element, cond);
            break;
          case "600 combined gems in Fracture Hills & Metropolis":
            cond = this.hasGems(600, ["Fracture Hills", "Metropolis"]);
            this.colourCell(element, cond);
            break;
          case "600 combined gems in Magma Cone & Aquaria Towers":
            cond = this.hasGems(600, ["Magma Cone", "Aquaria Towers"]);
            this.colourCell(element, cond);
            break;
          case "600 combined gems in Skelos Badlands & Shady Oasis":
            cond = this.hasGems(600, ["Skelos Badlands", "Shady Oasis"]);
            this.colourCell(element, cond);
            break;
          case "650 combined gems in Glimmer & Skelos Badlands":
            cond = this.hasGems(650, ["Glimmer", "Skelos Badlands"]);
            this.colourCell(element, cond);
            break;
          case "650 combined gems in Hurricos & Fracture Hills":
            cond = this.hasGems(650, ["Hurricos", "Fracture Hill"]);
            this.colourCell(element, cond);
            break;
          case "7 Homeworld orbs":
            cond = this.hasMinOrbs(["theEndOfTheWall", "longGlide", "huntersChallenge",
              "atopALadder", "onASercretLedge", "behindTheDoor", "topOfTheWaterfall",
              "onTheTallWall", "smashTheRock"], 7);
            break;
          case "7 skill points":
            cond = (this.skillPoint.length >= 7);
            this.colourCell(element, cond);
            break;
          case "8 Winter Tundra orbs":
            cond = this.hasMinOrbs(["topOfTheWaterfall", "onTheTallWall", "smashTheRock", "switchOnBugLight",
              "clearTractorPath", "exterminateCrowBugs", "fixTheFountain", "veryVersatileThieves",
              "retrieveProfessorsPencil", "conquerInvadingCows", "shootDownSheepSaucers1", "shootDownSheepSaucers2",
              "oxBombing", "breakDownDoors", "agentZerosSecretHideout", "ringTowerBells", "shootDownBalloons"], 8);
            this.colourCell(element, cond);
            break;
          case "800 Homeworld gems":
            cond = this.hasGems(800, ["Summer Forest", "Autumn Plains", "Winter Tundra"]);
            this.colourCell(element, cond);
            break;
          case "Agent 0 & UFOs 1":
            cond = this.hasOrbs(["agentZerosSecretHideout", "shootDownSheepSaucers1"]);
            this.colourCell(element, cond);
            break;
          case "Alchemist & Popcorn 2":
            cond = this.hasOrbs(["alchemistEscort", "crystalGeysers2"]);
            this.colourCell(element, cond);
            break;
          case "All Boss Skill Points":
            cond = this.hasSkillPoints(["perfectRipto", "perfectCrush", "hitRipto", "perfectGulp"]);
            this.colourCell(element, cond);
            break;
          case "All end of level orbs":
            cond = this.hasOrbs(["breakDownDoors", "fixTheFountain", "conquerInvadingCows", "switchOnBugLight"]);
            this.colourCell(element, cond);
            break;
          case "All enemies in Aquaria Towers":
            cond = this.hasAllEnemies(["Aquaria Towers"]);
            this.colourCell(element, cond);
            break;
          case "All enemies in Fracture Hills":
            cond = this.hasAllEnemies(["Fracture Hills"]);
            this.colourCell(element, cond);
            break;
          case "All enemies in Mystic Marsh":
            cond = this.hasAllEnemies(["Mystic Marsh"]);
            this.colourCell(element, cond);
            break;
          case "All enemies in Scorch":
            cond = this.hasAllEnemies(["Scorch"]);
            this.colourCell(element, cond);
            break;
          case "All enemies in Zephyr":
            cond = this.hasAllEnemies(["Zephyr"]);
            this.colourCell(element, cond);
            break;
          case "All gems in 3 speedways":
            let cond1 = this.hasGems(400, ["Ocean Speedway"]);
            let cond2 = this.hasGems(400, ["Metro Speedway"]);
            let cond3 = this.hasGems(400, ["Icy Speedway"]);
            let cond4 = this.hasGems(400, ["Canyon Speedway"]);
            cond = (((cond1 ? 1 : 0) + (cond2 ? 1 : 0) + (cond3 ? 1 : 0) + (cond4 ? 1 : 0)) >= 3);
            this.colourCell(element, cond);
            break;
          case "All gems in Aquaria Towers":
            cond = this.hasGems(400, ["Aquaria Towers"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Breeze Harbor":
            cond = this.hasGems(400, ["Breeze Harbor"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Cloud Temples":
            cond = this.hasGems(400, ["Cloud Temples"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Colossus":
            cond = this.hasGems(400, ["Colossus"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Crystal Glacier":
            cond = this.hasGems(400, ["Crystal Glacier"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Fracture Hills":
            cond = this.hasGems(400, ["Fracture Hills"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Glimmer & Scorch Skill Point":
            cond = this.hasGems(400, ["Glimmer"]) && this.hasSkillPoints(["bonkAllTrees"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Hurricos":
            cond = this.hasGems(400, ["Hurricos"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Idol Springs":
            cond = this.hasGems(400, ["Idol Springs"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Magma Cone":
            cond = this.hasGems(400, ["Magma Cone"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Metropolis":
            cond = this.hasGems(400, ["Metropolis"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Mystic Marsh":
            cond = this.hasGems(400, ["Mystic Marsh"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Robotica Farms":
            cond = this.hasGems(400, ["Robotica Farms"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Scorch":
            cond = this.hasGems(400, ["Scorch"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Shady Oasis":
            cond = this.hasGems(400, ["Shady Oasis"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Skelos Badlands":
            cond = this.hasGems(400, ["Skelos Badlands"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Sunny Beach":
            cond = this.hasGems(400, ["Sunny Beach"]);
            this.colourCell(element, cond);
            break;
          case "All gems in Zephyr":
            cond = this.hasGems(400, ["Zephyr"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Aquaria Towers":
            cond = this.hasOrbs(["seahorseRescue", "mantaRide1", "mantaRide2"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Breeze Harbor":
            cond = this.hasOrbs(["mineBlast", "gearGrab"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Cloud Temples":
            cond = this.hasOrbs(["breakDownDoors", "agentZerosSecretHideout", "ringTowerBells"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Colossus":
            cond = this.hasOrbs(["hockeyVsGoalie", "hockeyOneOnOne", "evilSpiritSearch"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Crystal Glacier":
            cond = this.hasOrbs(["dracletCave", "georgeTheSnowLeopard"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Fracture Hills":
            cond = this.hasOrbs(["freeTheFaun", "alchemistEscort", "earthshaperBash"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Glimmer":
            cond = this.hasOrbs(["lizardHunt", "gemLampFightOutdoors", "gemLampFightIndoors"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Hurricos":
            cond = this.hasOrbs(["stoneThiefChase", "factoryGlide1", "factoryGlide2"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Idol Springs":
            cond = this.hasOrbs(["foremanBudsPuzzle", "hulaGirlRescue"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Magma Cone":
            cond = this.hasOrbs(["partyCrashers", "crystalGeysers1", "crystalGeysers2"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Metropolis":
            cond = this.hasOrbs(["conquerInvadingCows", "shootDownSheepSaucers1", "shootDownSheepSaucers2", "oxBombing"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Mystic Marsh":
            cond = this.hasOrbs(["fixTheFountain", "veryVersatileThieves", "retrieveProfessorsPencil"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Robotica Farms":
            cond = this.hasOrbs(["switchOnBugLight", "clearTractorPath", "exterminateCrowBugs"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Scorch":
            cond = (this.hasOrbs(["barrelOfMonkeys", "captureTheFlags"]));
            this.colourCell(element, cond);
            break;
          case "All orbs in Shady Oasis":
            cond = this.hasOrbs(["catch3Thieves", "freeHippos"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Skelos Badlands":
            cond = this.hasOrbs(["lavaLizards1", "lavaLizards2", "demBones"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Sunny Beach":
            cond = this.hasOrbs(["blastingBoxes", "turtleSoup1", "turtleSoup2"]);
            this.colourCell(element, cond);
            break;
          case "All orbs in Zephyr":
            cond = this.hasOrbs(["cowlekCorral1", "cowlekCorral2", "sowingSeeds1", "sowingSeeds2"]);
            this.colourCell(element, cond);
            break;
          case "Bells & Ox":
            cond = this.hasOrbs(["ringTowerBells", "oxBombing"]);
            this.colourCell(element, cond);
            break;
          case "Bombo & Bells":
            cond = this.hasOrbs(["captureTheFlags", "ringTowerBells"]);
            this.colourCell(element, cond);
            break;
          case "Bombo & UFOs 1":
            cond = this.hasOrbs(["captureTheFlags", "shootDownSheepSaucers1"]);
            this.colourCell(element, cond);
            break;
          case "Break 11 strong chests":
            cond = this.strongChest >= 11;
            this.colourCell(element, cond);
            break;
          case "Break 15 butterfly jars":
            cond = this.butterflyJar >= 15;
            this.colourCell(element, cond);
            break;
          case "Break 15 firework bottles":
            cond = this.fireworksBottle >= 15;
            this.colourCell(element, cond);
            break;
          case "Break 3 Mystery Jars":
            cond = this.mysteryJar >= 3;
            this.colourCell(element, cond);
            break;
          case "Break 3 headbash chests":
            cond = this.headbashChest >= 3;
            this.colourCell(element, cond);
            break;
          case "Buy Climb & Headbash":
            cond = this.hasPaidMoneyBags(["climbMoneyBags", "headbashMoneyBags"]);
            this.colourCell(element, cond);
            break;
          case "Buy Swim with 8+ orbs":
            cond = this.hasSpecialEvents(['buySwimWith8+Orbs']);
            this.colourCell(element, cond);
            break;
          case "Collect 8 pink gems":
            cond = this.pinkGems >= 8;
            this.colourCell(element, cond);
            break;
          case "Cowleks 1 & Faun":
            cond = (this.hasOrbs(["cowlekCorral1", "freeTheFaun"]));
            this.colourCell(element, cond);
            break;
          case "Cowleks 2 & UFOs 2":
            cond = (this.hasOrbs(["cowlekCorral2", "shootDownSheepSaucers2"]));
            this.colourCell(element, cond);
            break;
          case "Defeat all enemies in 5 levels":
            cond = this.spirits.length >= 5;
            this.colourCell(element, cond);
            break;
          case "Dinos 1 & Basil":
            cond = (this.hasOrbs(["lavaLizards1", "veryVersatileThieves"]));
            this.colourCell(element, cond);
            break;
          case "Dinos 2 & Pencil":
            cond = (this.hasOrbs(["lavaLizards2", "retrieveProfessorsPencil"]));
            this.colourCell(element, cond);
            break;
          case "Draclets & Cowleks 1":
            cond = (this.hasOrbs(["dracletCave", "cowlekCorral1"]));
            this.colourCell(element, cond);
            break;
          case "Draclets & Earthshapers":
            cond = (this.hasOrbs(["dracletCave", "earthshaperBash"]));
            this.colourCell(element, cond);
            break;
          case "Enter 3 inactive portals from out of bounds":
            cond = this.enteredOOB.length >= 3;
            this.colourCell(element, cond);
            break;
          case "Enter 8 return home portals":
            cond = this.exits.length >= 8;
            this.colourCell(element, cond);
            break;
          case "Factory Glide 1 & Cowleks 2":
            cond = (this.hasOrbs(["factoryGlide1", "cowlekCorral2"]));
            this.colourCell(element, cond);
            break;
          case "Factory Glide 2 & Hippos":
            cond = (this.hasOrbs(["factoryGlide2", "freeHippos"]));
            this.colourCell(element, cond);
            break;
          case "Factory Glide 2 & Trolley":
            cond = (this.hasOrbs(["factoryGlide2", "gearGrab"]));
            this.colourCell(element, cond);
            break;
          case "Floating Mines & Hippos":
            cond = (this.hasOrbs(["mineBlast", "freeHippos"]));
            this.colourCell(element, cond);
            break;
          case "George & Faun":
            cond = (this.hasOrbs(["georgeTheSnowLeopard", "freeTheFaun"]));
            this.colourCell(element, cond);
            break;
          case "George & Juliet 2":
            cond = (this.hasOrbs(["georgeTheSnowLeopard", "sowingSeeds2"]));
            this.colourCell(element, cond);
            break;
          case "Hockey 1 & Basil":
            cond = (this.hasOrbs(["hockeyVsGoalie", "veryVersatileThieves"]));
            this.colourCell(element, cond);
            break;
          case "Hockey 1 & Dinos 1":
            cond = (this.hasOrbs(["hockeyVsGoalie", "lavaLizards1"]));
            this.colourCell(element, cond);
            break;
          case "Hockey 2 & Factory Glide 1":
            cond = (this.hasOrbs(["hockeyOneOnOne", "factoryGlide1"]));
            this.colourCell(element, cond);
            break;
          case "Hockey Skill Point":
            cond = this.hasSkillPoints(["perfectHockey"]);
            this.colourCell(element, cond);
            break;
          case "Hula Girls & Mantas 2":
            cond = (this.hasOrbs(["hulaGirlRescue", "mantaRide2"]));
            this.colourCell(element, cond);
            break;
          case "Hula Girls & Turtle Boxes":
            cond = (this.hasOrbs(["hulaGirlRescue", "blastingBoxes"]));
            this.colourCell(element, cond);
            break;
          case "Icy & Canyon orbs":
            cond = (this.hasOrbs(["parasailThroughRings", "shootDownBalloons"]));
            this.colourCell(element, cond);
            break;
          case "Ignite 4 rockets":
            cond = this.rocket >= 4;
            this.colourCell(element, cond);
            break;
          case "Indoor Lamps & Popcorn 1":
            cond = (this.hasOrbs(["gemLampFightIndoors", "crystalGeysers1"]));
            this.colourCell(element, cond);
            break;
          case "Indoor Lamps & Robot Scarecrows":
            cond = (this.hasOrbs(["gemLampFightIndoors", "exterminateCrowBugs"]));
            this.colourCell(element, cond);
            break;
          case "Juliet 2 &  Earthshapers":
            cond = (this.hasOrbs(["sowingSeeds2", "earthshaperBash"]));
            this.colourCell(element, cond);
            break;
          case "Lightning Orbs & Floating Mines":
            cond = (this.hasOrbs(["stoneThiefChase", "mineBlast"]));
            this.colourCell(element, cond);
            break;
          case "Lightning Orbs & Lamp Thieves":
            cond = (this.hasOrbs(["stoneThiefChase", "catch3Thieves"]));
            this.colourCell(element, cond);
            break;
          case "Lizard Hunt & #BoneDance":
            cond = (this.hasOrbs(["lizardHunt", "demBones"]));
            this.colourCell(element, cond);
            break;
          case "Lizard Hunt & Hockey 2":
            cond = (this.hasOrbs(["lizardHunt", "hockeyOneOnOne"]));
            this.colourCell(element, cond);
            break;
          case "Mantas 1 & Popcorn 2":
            cond = (this.hasOrbs(["mantaRide1", "crystalGeysers2"]));
            this.colourCell(element, cond);
            break;
          case "Mantas 2 & #BoneDance":
            cond = (this.hasOrbs(["mantaRide2", "demBones"]));
            this.colourCell(element, cond);
            break;
          case "Metro & Icy orbs":
            cond = (this.hasOrbs(["parasailThroughRings", "grabTheLoot"]));
            this.colourCell(element, cond);
            break;
          case "Monkeys & Agent 0":
            cond = (this.hasOrbs(["barrelOfMonkeys", "agentZerosSecretHideout"]));
            this.colourCell(element, cond);
            break;
          case "Monkeys & Ox":
            cond = (this.hasOrbs(["barrelOfMonkeys", "oxBombing"]));
            this.colourCell(element, cond);
            break;
          case "Ocean & Canyon orbs":
            cond = (this.hasOrbs(["followHunter", "shootDownBalloons"]));
            this.colourCell(element, cond);
            break;
          case "Ocean & Metro orbs":
            cond = (this.hasOrbs(["followHunter", "grabTheLoot"]));
            this.colourCell(element, cond);
            break;
          case "Outdoor Lamps & Party Crashers":
            cond = (this.hasOrbs(["gemLampFightOutdoors", "partyCrashers"]));
            this.colourCell(element, cond);
            break;
          case "Outdoor Lamps & Tractor Path":
            cond = (this.hasOrbs(["gemLampFightOutdoors", "clearTractorPath"]));
            this.colourCell(element, cond);
            break;
          case "Party Crashers & Robot Scarecrows":
            cond = (this.hasOrbs(["partyCrashers", "exterminateCrowBugs"]));
            this.colourCell(element, cond);
            break;
          case "Pay Moneybags 7 times":
            cond = this.moneyBags.length >= 7
            this.colourCell(element, cond);
            break;
          case "Plant all seeds in Zephyr":
            cond = this.hasSpecialEvents(["plantAllSeeds"]);
            this.colourCell(element, cond);
            break;
          case "Popcorn 1 & Tractor Path":
            cond = (this.hasOrbs(["crystalGeysers1", "clearTractorPath"]));
            this.colourCell(element, cond);
            break;
          case "Puzzle & Seahorses":
            cond = (this.hasOrbs(["foremanBudsPuzzle", "seahorseRescue"]));
            this.colourCell(element, cond);
            break;
          case "Puzzle & Turtle Soup 1":
            cond = (this.hasOrbs(["foremanBudsPuzzle", "turtleSoup1"]));
            this.colourCell(element, cond);
            break;
          case "Seaweed Skill Point":
            cond = this.hasSkillPoints(["destroyAllSeaweed"]);
            this.colourCell(element, cond);
            break;
          case "Speak to Brother Curtis with 4+ talismans & 4+ orbs":
            cond = ((this.hasSpecialEvents(["talkToBrotherCurtis"]) && (this.talismans.length >= 4) && (this.orbs.length >= 4)));
            this.colourCell(element, cond);
            break;
          case "Speak to all 9 instances of Zoe":
            cond = this.zoes >= 9;
            this.colourCell(element, cond);
            break;
          case "Spirit Statues & Dinos 1":
            cond = (this.hasOrbs(["evilSpiritSearch", "lavaLizards1"]));
            this.colourCell(element, cond);
            break;
          case "Spirit Statues & Pencil":
            cond = (this.hasOrbs(["evilSpiritSearch", "retrieveProfessorsPencil"]));
            this.colourCell(element, cond);
            break;
          case "Stand on 10 portals & both Skelos skulls":
            cond = (this.hasStoodOnPortal(10, [1,2]) && this.hasSpecialEvents(["standOnSkulls"]));
            this.colourCell(element, cond);
            break;
          case "Stand on 5 portals you own the talismans for":
            cond = this.hasStoodOnPortal(5, [2]);
            this.colourCell(element, cond);
            break;
          case "Talismans in Colossus, Aquaria Towers & Breeze Harbor":
            cond = this.hasTalismans(["Colossus", "Aquaria Towers", "Breeze Harbor"]);
            this.colourCell(element, cond);
            break;
          case "Talismans in Hurricos, Scorch & Magma Cone":
            cond = this.hasTalismans(["Hurricos", "Scorch", "Magma Cone"]);
            this.colourCell(element, cond);
            break;
          case "Talismans in Idol Springs, Zephyr & Shady Oasis":
            cond = this.hasTalismans(["Idol Springs", "Zephyr", "Shady Oasis"]);
            this.colourCell(element, cond);
            break;
          case "Talismans in Sunny Beach, Skelos Badlands & Scorch":
            cond = this.hasTalismans(["Sunny Beach", "Skelos Badlands", "Scorch"]);
            this.colourCell(element, cond);
            break;
          case "Trolley & Lamp Thieves":
            cond = (this.hasOrbs(["gearGrab", "catch3Thieves"]));
            this.colourCell(element, cond);
            break;
          case "Turtle Boxes & Seahorses":
            cond = (this.hasOrbs(["blastingBoxes", "seahorseRescue"]));
            this.colourCell(element, cond);
            break;
          case "Turtle Soup 1 & Mantas 2":
            cond = (this.hasOrbs(["turtleSoup1", "mantaRide2"]));
            this.colourCell(element, cond);
            break;
          case "Turtle Soup 2 & Alchemist":
            cond = (this.hasOrbs(["turtleSoup2", "alchemistEscort"]));
            this.colourCell(element, cond);
            break;
          case "Turtle Soup 2 & UFOs 2":
            cond = (this.hasOrbs(["turtleSoup2", "shootDownSheepSaucers2"]));
            this.colourCell(element, cond);
            break;
          case "Unlock Aquaria, Zephyr and Shady":
            cond = (this.hasPaidMoneyBags(["aquariaMoneyBags", "zephyrMoneyBags", "shadyMoneyBags"]));
            this.colourCell(element, cond);
            break;
          case "Unlock Cloud Temples":
            cond = this.hasSpecialEvents(["unlockCloudTemples"]);
            this.colourCell(element, cond);
            break;
          case "Unlock all speedways":
            cond = (this.hasSpecialEvents(["unlockOceanSpeedway", "unlockMetroSpeedway"]) && this.hasPaidMoneyBags(["icyMoneyBags", "canyonMoneyBags"]));
            this.colourCell(element, cond);
            break;
          case "Use 5 unique powerup types":
            cond = (this.hasNumPowerupTypes(5));
            this.colourCell(element, cond);
            break;
          case "Use all '14' powerups":
            cond = this.hasPowerupsOfLimit(14, 3);
            this.colourCell(element, cond);
            break;
          case "Use all '15' powerups":
            cond = this.hasPowerupsOfLimit(15, 2);
            this.colourCell(element, cond);
            break;
          case "Use all '18' powerups":
            cond = this.hasPowerupsOfLimit(18, 2);
            this.colourCell(element, cond);
            break;
          case "Use all '2' powerups":
            cond = this.hasPowerupsOfLimit(2, 2);
            this.colourCell(element, cond);
            break;
          case "Use all '20' powerups":
            cond = this.hasPowerupsOfLimit(20, 2);
            this.colourCell(element, cond);
            break;
          case "Use all fireball powerups":
            cond = this.hasPowerupsOfType(PowerupType.Superflame, 4);
            this.colourCell(element, cond);
            break;
          case "Use all invincibility powerups":
            cond = this.hasPowerupsOfType(PowerupType.Invincibility, 2);
            this.colourCell(element, cond);
            break;
          case "Use all spring powerups":
            cond = this.hasPowerupsOfType(PowerupType.Superbounce, 3);
            this.colourCell(element, cond);
            break;
          case "Use all supercharge powerups":
            cond = this.hasPowerupsOfType(PowerupType.Supercharge, 4);
            this.colourCell(element, cond);
            break;
          case "Use all superfly powerups":
            cond = this.hasPowerupsOfType(PowerupType.Superfly, 3);
            this.colourCell(element, cond);
            break;
          default:
            break;
        }
      }
    }
  }

  private colourCell(element: Element, cond: boolean) {
    if (element.classList.contains(this.cellColour)) {
      if (!cond) {
        element.classList.remove(this.cellColour);
      }
    } else {
      if (cond) {
        element.classList.add(this.cellColour);
      }
    }
  }

  private hasMinOrbs(names: string[], minimum: number): boolean {
    let sum: number = 0;
    for (let orb of names) {
      if (this.orbs.includes(orb)) {
        sum++;
      }
    }
    return (sum >= minimum);
  }

  private hasOrbs(names: string[]): boolean {
    return this.hasMinOrbs(names, names.length);
  }

  private hasGems(target: number, levels: string[]): boolean {
    let sum: number = 0;
    if (levels.length > 0) {
      for (let level of levels) {
        if (this.gems.has(level)) {
          sum = sum + Number(this.gems.get(level));
        }
      }
    } else {
      for (let [key, value] of this.gems) {
        sum = sum + value;
      }
    }
    return (sum >= target)
  }

  private hasSkillPoints(points: string[]) {
    for (let point of points) {
      if (!this.skillPoint.includes(point)) {
        return false;
      }
    }
    return true;
  }

  private hasAllEnemies(levels: string[]) {
    for (let level of levels) {
      if (!this.spirits.includes(level)) {
        return false
      }
    }
    return true;
  }

  private hasPaidMoneyBags(instances: string[]) {
    for (let instance of instances) {
      if (!this.moneyBags.includes(instance)) {
        return false;
      }
    }
    return true;
  }

  private hasStoodOnPortal(limit: number, values: number[]) {
    let total: number = 0
    for (let [key, value] of this.portalStoodOn) {
      if (value in values) {
        total++;
      }
    }
    return total >= limit;
  }

  private hasTalismans(talismans: string[]) {
    for (let talisman of talismans) {
      if (!this.talismans.includes(talisman)) {
        return false;
      }
    }
    return true;
  }

  private hasNumPowerupTypes(limit: number) {
    let types: PowerupType[] = [];
    for (let [key, value] of this.powerup) {
      if (!types.includes(value.type)) {
        types.push(value.type);
      }
    }
    return types.length >= limit;
  }

  private hasPowerupsOfLimit(enemyLimit: number, numDesired: number) {
    let total: number = 0;
    for (let [key, value] of this.powerup) {
      if (value.limit == enemyLimit) {
        total++;
      }
    }
    return total >= numDesired;
  }

  private hasPowerupsOfType(powerupType: string, numDesired: number) {
    let total: number = 0;
    for (let [key, value] of this.powerup) {
      if (value.type.toString() == powerupType) {
        total++;
      }
    }
    return total >= numDesired;
  }

  private hasSpecialEvents(names: string[]) {
    for (let name of names) {
      if (! this.specialEvent.includes(name)) {
        return false
      }
    }
    return true;
  }

}
