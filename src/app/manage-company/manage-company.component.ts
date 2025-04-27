import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CompanyService } from '../shared/services/company.service';
import { Companies } from '../shared/interface/company.interface';
import { CommonModule } from '@angular/common';
import { SweetAlertService } from '../shared/services/sweet-alert.service';

@Component({
  selector: 'app-manage-company',
  imports: [RouterLink, CommonModule],
  templateUrl: './manage-company.component.html',
  styleUrl: './manage-company.component.css',
})
export class ManageCompanyComponent implements OnInit {
  companies: Companies[] = [];
  isLoading!: boolean;
  constructor(
    private companyService: CompanyService,
    private sweetAlert: SweetAlertService,
    private router: Router
  ) {
    // Constructor logic here
  }
  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.isLoading = true;
    this.companyService.getCompanies().subscribe((data: Companies[]) => {
      this.companies = data;
      this.isLoading = false;
      console.log(this.companies);
    });
  }
  onDelete(id: number) {
    this.sweetAlert.confirmDelete().then((result) => {
      if (result.isConfirmed) {
        this.companyService.deleteCompany(id).subscribe(() => {
          this.sweetAlert.success('Compañía eliminada con éxito').then(() => {
            this.getCompanies();
          });
        });
      }
    });
  }
  onEdit(company: Companies) {
    this.router.navigate(['/create'], { state: { company } });
  }
}
