import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@clinica-veterinaria-2/layout';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clinica-veterinaria-2';
}
