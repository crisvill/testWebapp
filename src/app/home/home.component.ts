import { User } from './../core/models/user.model';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quote: string;
  isLoading: boolean;
  userResult: any;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {}

  onChangeUser(data: User) {
    this.userResult = data;
  }
}
