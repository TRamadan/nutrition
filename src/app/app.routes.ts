import { Routes } from '@angular/router';
import { CreateAnalysisComponent } from './modules/analyze/create-analysis/create-analysis.component';

export const routes: Routes = [
  {
    path: '',
    component: CreateAnalysisComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: CreateAnalysisComponent,
      },
    ],
  },
];
