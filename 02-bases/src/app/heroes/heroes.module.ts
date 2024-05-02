import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";

// Los modulos que tengan componentes que utilicen directivas de Angular deben importar CommonModule

@NgModule({
  exports: [
    HeroComponent,
    ListComponent
  ],

  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {

}
