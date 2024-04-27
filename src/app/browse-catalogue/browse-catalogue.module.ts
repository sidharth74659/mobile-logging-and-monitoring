import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowseCataloguePageRoutingModule } from './browse-catalogue-routing.module';

import { BrowseCataloguePage } from './browse-catalogue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowseCataloguePageRoutingModule
  ],
  declarations: [BrowseCataloguePage]
})
export class BrowseCataloguePageModule {}
