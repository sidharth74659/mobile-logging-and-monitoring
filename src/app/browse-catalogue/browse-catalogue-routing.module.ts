import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowseCataloguePage } from './browse-catalogue.page';

const routes: Routes = [
  {
    path: '',
    component: BrowseCataloguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseCataloguePageRoutingModule {}
