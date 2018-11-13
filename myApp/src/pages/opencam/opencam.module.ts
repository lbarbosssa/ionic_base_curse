import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpencamPage } from './opencam';

@NgModule({
  declarations: [
    OpencamPage,
  ],
  imports: [
    IonicPageModule.forChild(OpencamPage),
  ],
})
export class OpencamPageModule {}
