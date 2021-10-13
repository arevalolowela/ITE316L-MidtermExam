import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingpagePageRoutingModule } from './settingpage-routing.module';

import { SettingpagePage } from './settingpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingpagePageRoutingModule
  ],
  declarations: [SettingpagePage]
})
export class SettingpagePageModule {}
