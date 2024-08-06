import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class BaseService<T> {
  constructor(protected http: HttpClient, protected endPoint: string) {}

  getList(): Observable<T[]> {
    return this.http.get<T[]>(`${this.endPoint}`);
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.endPoint}/${id}`);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(this.endPoint, item);
  }

  update(id: number, item: T): Observable<T> {
    return this.http.put<T>(`${this.endPoint}/${id}`, item);
  }

  partialUpdate(id: number, item: Partial<T>): Observable<T> {
    return this.http.patch<T>(`${this.endPoint}/${id}`, item);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endPoint}/${id}`);
  }

  getCreateForm(): Observable<any> {
    return this.http.get(`${this.endPoint}/create`);
  }

  getEditForm(id: number): Observable<any> {
    return this.http.get(`${this.endPoint}/${id}/edit`);
  }
}
