import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GiftItem } from 'src/app/models';

@Component({
  selector: 'app-gift-entry',
  templateUrl: './gift-entry.component.html',
  styleUrls: ['./gift-entry.component.scss']
})
export class GiftEntryComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) { }


  form!: FormGroup;
  hasErrors = false;

  @Output() itemAdded = new EventEmitter<GiftItem>();
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      for: new FormControl('', [Validators.required]),
      holiday: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      suggestions: new FormControl('', [Validators.required])
    });
  }
  get for(): AbstractControl { return this.form.get('for') as AbstractControl; }
  get holiday(): AbstractControl { return this.form.get('holiday') as AbstractControl; }
  get suggestions(): AbstractControl { return this.form.get('suggestions') as AbstractControl; }

  add(focusMe: HTMLElement): void {
    if (this.form.invalid) {
      this.hasErrors = true;
    } else {
      this.hasErrors = false;
      this.itemAdded.emit({
        for: this.for.value,
        holiday: this.holiday.value,
        suggestions: this.suggestions.value
      });
      console.log(this.form.value);
      this.form.reset();
      focusMe.focus();
    }
  }
}
