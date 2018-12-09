import { documentTypesList } from './../mocks/documents.data';
import { ListType } from '@app/core/models/user.model';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

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
}
