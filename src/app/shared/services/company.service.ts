import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Companies } from '../interface/company.interface';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private http = inject(HttpClient);

  constructor() {}

  getCompanies() {
    return this.http.get<Companies[]>(`${environment.apiUrl}/companies`);
  }
}
