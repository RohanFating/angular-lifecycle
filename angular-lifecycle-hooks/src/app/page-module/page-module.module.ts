import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [Page1Component, Page2Component, PersonalDataComponent],
  exports: [Page1Component, Page2Component, PersonalDataComponent]
})
export class PageModuleModule { }
