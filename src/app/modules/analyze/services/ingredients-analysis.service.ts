import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IngredientsAnalysisService {
  constructor(private apiService: ApiService) {}

  async makeAnalysis(body: any, appId: any, appKey: any) {
    const path: string = `/api/nutrition-details?app_id=${appId}&app_key=${appKey}`;
    return await this.apiService.post(`${path}`, body);
  }
}
