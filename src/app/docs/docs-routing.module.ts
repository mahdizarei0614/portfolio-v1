import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DddVisualGraphComponent} from "./ddd-visual-graph/ddd-visual-graph.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ddd-visual-graph',
    pathMatch: "full"
  },
  {
    path: 'ddd-visual-graph',
    component: DddVisualGraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocsRoutingModule {
}
