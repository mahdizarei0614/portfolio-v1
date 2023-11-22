import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocsRoutingModule } from './docs-routing.module';
import { DddVisualGraphComponent } from './ddd-visual-graph/ddd-visual-graph.component';

@NgModule({
  declarations: [
    DddVisualGraphComponent
  ],
  imports: [
    CommonModule,
    DocsRoutingModule
  ]
})
export class DocsModule {
}
