import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@clinica-veterinaria-2/layout';
import { OwnerSearchComponent } from '@clinica-veterinaria-2/owner-search';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule, OwnerSearchComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clinica-veterinaria-2';
}
