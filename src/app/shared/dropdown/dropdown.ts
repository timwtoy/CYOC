import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, input, OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RecipePart } from '../models/recipe.model';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe],
  standalone: true,
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.scss',
})
export class Dropdown implements OnInit {
  recipeParts = input.required<RecipePart[]>();

  myControl = new FormControl('');
  filteredOptions!: Observable<RecipePart[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: string | null | RecipePart) => {
        if (typeof value === `string`) {
          return this._filter(value || '');
        }
        return this._filter((value as RecipePart).title || '');
      }),
    );
  }

  displayFn(part: RecipePart): string {
    return part?.title ? part.title : '';
  }

  private _filter(value: string): RecipePart[] {
    if (!value) {
      return [];
    }
    const filterValue = value?.toLowerCase();

    return this.recipeParts().filter(part => {
      return part.title?.toLowerCase().includes(filterValue);
    });
  }
}
