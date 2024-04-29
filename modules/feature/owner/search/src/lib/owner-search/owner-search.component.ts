import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { mockOwners } from '@clinica-veterinaria-2/owner-data-access';

@Component({
  selector: 'lib-owner-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
  templateUrl: './owner-search.component.html',
  styleUrl: './owner-search.component.scss',
})
export class OwnerSearchComponent {
  control = new FormControl('', { nonNullable: true });
  owners = mockOwners;
}
