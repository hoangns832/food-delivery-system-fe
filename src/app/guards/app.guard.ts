import { CanActivateFn } from '@angular/router';

export const AppGuard: CanActivateFn = (route, state) => {
  return true;
};
