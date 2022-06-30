import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isLoading$ = new Subject<boolean>()
  constructor() { }
  show() : void {
    this.isLoading$.next(true)
  }
  hidden() : void {
    this.isLoading$.next(false)
  }
}
