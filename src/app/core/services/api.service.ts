import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  isLPostLoading = false;

  constructor(private _http: HttpClient, private router: Router) {}

  async post<T>(url: string, body: any, headers: any = null) {
    let result;
    this.isLPostLoading = true;
    result = await firstValueFrom(
      this._http.post<T>(environment.base_url + url, body, { headers })
    )
      .catch((err) => {
        result = this.handleError(err);
        throw result;
      })
      .finally(() => (this.isLPostLoading = false));
    return result;
  }

  async delete(url: string): Promise<void> {}

  async get<T>(url: string, query?: any) {}

  async put<T>(url: string, body: any) {}

  async patch(url: string, body?: any) {}

  private handleErrorResponse(response: any, message?: string) {}

  private handleError(error: any) {
    console.log(error);
  }
}
