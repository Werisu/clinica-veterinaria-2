import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proprietario } from '../../models/owner.model';

@Injectable({
  providedIn: 'root',
})
export class OwnerSearchService {
  readonly apiUrl = 'https://auxfortech.pythonanywhere.com';
  constructor(private httpClient: HttpClient) {}

  searchByName(name: string): Observable<Proprietario[]> {
    return this.httpClient.get<Proprietario[]>(`${this.apiUrl}/proprietario/`, {
      params: { nome: name },
    });
  }
}
