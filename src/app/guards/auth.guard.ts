import {inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const routeMod = inject(Router)
  const isAuthenticated = checkAuthentication();

  if (state.url === '/home/about') {
    return true
  }

  if (!isAuthenticated) {
    routeMod.navigate(['/home']);
    return false
  }
  return true
}

function checkAuthentication()  {
  // logic here to get authentication
  return true
}