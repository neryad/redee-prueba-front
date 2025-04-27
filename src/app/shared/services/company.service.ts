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

  getCompany(id: number) {
    return this.http.get<Companies>(`${environment.apiUrl}/companies/${id}`);
  }
  deleteCompany(id: number) {
    return this.http.delete(`${environment.apiUrl}/companies/${id}`);
  }
  createCompany(company: Companies) {
    return this.http.post<Companies>(
      `${environment.apiUrl}/companies`,
      company
    );
  }
}
