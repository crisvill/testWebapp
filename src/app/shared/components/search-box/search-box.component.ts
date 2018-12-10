import { UserService } from './../../services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '@app/core/models/user.model';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
export interface Form {
  usuario: string;
}
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  @Output() userResult: EventEmitter<User> = new EventEmitter<User>();
  form: FormGroup;
  errMsg: any;

  // para busqueda asincrona
  searchTerms = new Subject<string>();
  results: User[];
  user = '';
  listVisible = false;
  usuarioSelected: User;

  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  // Agrega un termino de búsqueda al stream de observable.
  search(term: string): void {
    if (term !== '') {
      this.searchTerms.next(term);
    } else {
      this.results = null;
      this.userResult.emit(null);
    }
  }
  getUser(): void {
    this.userService.search(this.searchTerms).subscribe((results: User[]) => {
      this.results = results;
      this.listVisible = true;
    });
  }
  onSelected(user: User) {
    this.user = user.name;
    this.listVisible = false;
    this.usuarioSelected = user;
  }

  _emitUser() {
    this.userResult.emit(this.usuarioSelected);
  }
}
