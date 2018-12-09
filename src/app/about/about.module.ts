import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ProgressBarModule } from 'primeng/progressbar';
@NgModule({
  imports: [CommonModule, TranslateModule, AboutRoutingModule, ProgressBarModule],
  declarations: [AboutComponent]
})
export class AboutModule {}
