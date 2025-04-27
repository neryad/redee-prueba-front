import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../shared/services/company.service';
import { Companies } from '../shared/interface/company.interface';
import { SweetAlertService } from '../shared/services/sweet-alert.service';
@Component({
  selector: 'app-create-company',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.css',
})
export class CreateCompanyComponent implements OnInit {
  companyForm: FormGroup;
  @Input() companyToEdit: Companies;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private companyService: CompanyService,
    private sw: SweetAlertService
  ) {
    const navigation = this.router.getCurrentNavigation();

    this.companyToEdit = navigation?.extras.state?.['company'];

    this.companyForm = this.fb.group({
      rnc: ['', Validators.required],
      name: ['', Validators.required],
      commercialName: ['', Validators.required],
      category: [''],
      payment: ['', Validators.required],
      status: ['', Validators.required],
      activity: ['', Validators.required],
      branch: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    if (this.companyToEdit) {
      this.companyForm.patchValue(this.companyToEdit);
    }
  }
  onSubmit() {
    if (this.companyForm.get('category')?.value === null) {
      this.companyForm.get('category')?.setValue('Sin categoría');
    }
    if (this.companyForm.invalid) {
      console.error('Form is invalid', this.companyForm.errors);
      return;
    }
    if (this.companyToEdit) {
      this.updateCompany();
    } else {
      this.saveCompany();
    }
  }
  onCancel() {
    this.companyForm.reset();

    this.router.navigate(['/']);
  }

  getCompanyByRNC() {
    this.sw.loading('Buscando empresa...');
    let rnc = this.companyForm.get('rnc')?.value;
    rnc = this.removeDashes(rnc);
    if (rnc.trim() === '') {
      console.error('RNC cannot be empty');
      return;
    }
    this.companyService.getCompanyByRNC(rnc).subscribe({
      next: (response: any) => {
        let data = response['data'];
        this.companyForm.patchValue(data);
        this.sw.close();
      },
      error: (error) => {
        console.error('Error fetching company', error);
        this.sw.error(`No se encontró la empresa', 'Error :${error.message}`);
        this.companyForm.reset();
        //this.sw.close();
      },
    });
  }

  removeDashes(rnc: string): string {
    return rnc.replace(/-/g, '');
  }

  saveCompany() {
    this.sw.loading('Guardando empresa...');
    this.companyService.createCompany(this.companyForm.value).subscribe({
      next: (response) => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error creating company', error);
      },
      complete: () => {
        this.sw.close();
        this.sw.success('Empresa creada con éxito', 'Éxito');
      },
    });
  }
  updateCompany() {
    this.sw.loading('Actualizando empresa...');
    this.companyService
      .updateCompany(this.companyToEdit?.id, this.companyForm.value)
      .subscribe({
        next: (response) => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error updating company', error);
        },
        complete: () => {
          this.sw.close();
          this.sw.success('Empresa actualizada con éxito', 'Éxito');
        },
      });
  }
}
