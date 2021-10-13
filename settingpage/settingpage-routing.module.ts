import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingpagePage } from './settingpage.page';

const routes: Routes = [
  {
    path: '',
    component: SettingpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingpagePageRoutingModule {}
