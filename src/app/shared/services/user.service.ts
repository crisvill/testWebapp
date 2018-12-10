import { documentTypesList } from './../mocks/documents.data';
import { ListType, User } from '@app/core/models/user.model';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, first } from 'rxjs/operators';
import { mockUsersData } from '../mocks/users.data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}

  loginUser() {}

  RegisterUser() {}

  getProfile() {}

  getDocumentsTypes(): Observable<ListType[]> {
    return of(documentTypesList);
  }

  search(terms: Observable<string>): Observable<any[]> {
    return terms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term))
    );
  }
  searchEntries(term: string) {
    console.log('Buscando termino: ' + term);
    return of(mockUsersData);
  }
}
