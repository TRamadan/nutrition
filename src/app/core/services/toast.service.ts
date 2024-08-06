import { Injectable } from '@angular/core';

enum ToastStatus {
  Success = 'success',
  Error = 'danger',
  Warning = 'warning,',
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor() {}

  error(message: string) {
    console.log(message);
  }

  success(message: string) {
    console.log(message);
  }
}
