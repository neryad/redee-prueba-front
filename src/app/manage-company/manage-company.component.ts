import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CompanyService } from '../shared/services/company.service';
import { Companies } from '../shared/interface/company.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-company',
  imports: [RouterLink, CommonModule],
  templateUrl: './manage-company.component.html',
  styleUrl: './manage-company.component.css',
})
export class ManageCompanyComponent implements OnInit {
  companies: Companies[] = [];
  constructor(private companyService: CompanyService) {
    // Constructor logic here
  }
  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companyService.getCompanies().subscribe((data: Companies[]) => {
      this.companies = data;
      console.log(this.companies);
    });
  }
}
