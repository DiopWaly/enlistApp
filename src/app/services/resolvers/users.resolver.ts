import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot,  ResolveFn, RouterStateSnapshot } from '@angular/router';
import { of, delay, Observable } from 'rxjs' 
import { DatabaseService } from '../database.service';

export const UsersResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  dbService: DatabaseService = inject(DatabaseService)
): Observable<{}> => of({firstName: 'Papa waly', lastName: 'Diop'}).pipe(delay(2000))
