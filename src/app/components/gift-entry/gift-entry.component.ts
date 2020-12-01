import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gift-entry',
  templateUrl: './gift-entry.component.html',
  styleUrls: ['./gift-entry.component.scss']
})
export class GiftEntryComponent implements OnInit {

  form?: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      for: [],
      holiday: [],
      suggestions: []
    });
  }

  add(): void {
    console.log(this.form?.value);
  }

}
