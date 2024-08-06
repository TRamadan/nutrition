import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAnalysisComponent } from './create-analysis/create-analysis.component';
import { ShowAnalysisComponent } from './show-analysis/show-analysis.component';
const routes: Routes = [
  {
    path: '',
    component: CreateAnalysisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyzeRoutingModule {}
