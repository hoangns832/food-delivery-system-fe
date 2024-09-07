import { inject, Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
class AppActive {
  constructor() {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return true;
  }
}

export const AppGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => inject(AppActive).canActivate(next, state);
