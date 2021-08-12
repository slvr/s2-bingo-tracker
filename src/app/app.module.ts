import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { SfWorldComponent } from './worlds/sf-world/sf-world.component';
import { ApWorldComponent } from './worlds/ap-world/ap-world.component';
import { WtWorldComponent } from './worlds/wt-world/wt-world.component';
import { GlimmerComponent } from './worlds/sf-world/levels/glimmer/glimmer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { IdolSpringsComponent } from './worlds/sf-world/levels/idol-springs/idol-springs.component';
import { ColossusComponent } from './worlds/sf-world/levels/colossus/colossus.component';
import { SummerForestComponent } from './worlds/sf-world/levels/summer-forest/summer-forest.component';
import { HurricosComponent } from './worlds/sf-world/levels/hurricos/hurricos.component';
import { SunnyBeachComponent } from './worlds/sf-world/levels/sunny-beach/sunny-beach.component';
import { AquariaTowersComponent } from './worlds/sf-world/levels/aquaria-towers/aquaria-towers.component';
import { OceanSpeedwayComponent } from './worlds/sf-world/levels/ocean-speedway/ocean-speedway.component';
import { CrushDungeonComponent } from './worlds/sf-world/levels/crush-dungeon/crush-dungeon.component';
import { CrystalGlacierComponent } from './worlds/ap-world/levels/crystal-glacier/crystal-glacier.component';
import { AutumnPlainsComponent } from './worlds/ap-world/levels/autumn-plains/autumn-plains.component';
import { SkelosBadlandsComponent } from './worlds/ap-world/levels/skelos-badlands/skelos-badlands.component';
import { ZephyrComponent } from './worlds/ap-world/levels/zephyr/zephyr.component';
import { BreezeHarborComponent } from './worlds/ap-world/levels/breeze-harbor/breeze-harbor.component';
import { MetroSpeedwayComponent } from './worlds/ap-world/levels/metro-speedway/metro-speedway.component';
import { ScorchComponent } from './worlds/ap-world/levels/scorch/scorch.component';
import { FractureHillsComponent } from './worlds/ap-world/levels/fracture-hills/fracture-hills.component';
import { MagmaConeComponent } from './worlds/ap-world/levels/magma-cone/magma-cone.component';
import { ShadyOasisComponent } from './worlds/ap-world/levels/shady-oasis/shady-oasis.component';
import { IcySpeedwayComponent } from './worlds/ap-world/levels/icy-speedway/icy-speedway.component';
import { GulpOverlookComponent } from './worlds/ap-world/levels/gulp-overlook/gulp-overlook.component';
import { WinterTundraComponent } from './worlds/wt-world/levels/winter-tundra/winter-tundra.component';
import { CanyonSpeedwayComponent } from './worlds/wt-world/levels/canyon-speedway/canyon-speedway.component';
import { MysticMarshComponent } from './worlds/wt-world/levels/mystic-marsh/mystic-marsh.component';
import { CloudTemplesComponent } from './worlds/wt-world/levels/cloud-temples/cloud-temples.component';
import { RoboticaFarmsComponent } from './worlds/wt-world/levels/robotica-farms/robotica-farms.component';
import { MetropolisComponent } from './worlds/wt-world/levels/metropolis/metropolis.component';
import { DragonShoresComponent } from './worlds/wt-world/levels/dragon-shores/dragon-shores.component';
import { RiptoArenaComponent } from './worlds/wt-world/levels/ripto-arena/ripto-arena.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TotalsComponent } from './totals/totals.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    SfWorldComponent,
    ApWorldComponent,
    WtWorldComponent,
    GlimmerComponent,
    IdolSpringsComponent,
    ColossusComponent,
    SummerForestComponent,
    HurricosComponent,
    SunnyBeachComponent,
    AquariaTowersComponent,
    OceanSpeedwayComponent,
    CrushDungeonComponent,
    CrystalGlacierComponent,
    AutumnPlainsComponent,
    SkelosBadlandsComponent,
    ZephyrComponent,
    BreezeHarborComponent,
    MetroSpeedwayComponent,
    ScorchComponent,
    FractureHillsComponent,
    MagmaConeComponent,
    ShadyOasisComponent,
    IcySpeedwayComponent,
    GulpOverlookComponent,
    WinterTundraComponent,
    CanyonSpeedwayComponent,
    MysticMarshComponent,
    CloudTemplesComponent,
    RoboticaFarmsComponent,
    MetropolisComponent,
    DragonShoresComponent,
    RiptoArenaComponent,
    TotalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
