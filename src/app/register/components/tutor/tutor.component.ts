import { ListType } from './../../../core/models/user.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.scss']
})
export class TutorComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() documentTypesList: ListType[];
  constructor() {}

  ngOnInit() {}
}
