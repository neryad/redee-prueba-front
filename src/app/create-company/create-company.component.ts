import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../shared/services/company.service';
@Component({
  selector: 'app-create-company',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.css',
})
export class CreateCompanyComponent {
  companyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private companyService: CompanyService
  ) {
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
  onSubmit() {
    this.saveCompany();
    // if (this.companyForm.valid) {
    //   console.log('Form Submitted!', this.companyForm.value);
    //   // Aquí puedes agregar la lógica para enviar el formulario a tu API o servicio
    // } else {
    //   console.log('Form is invalid');
    // }
  }
  onCancel() {
    this.companyForm.reset();
    console.log('Form reset');

    this.router.navigate(['/']);
  }

  saveCompany() {
    if (this.companyForm.valid) {
      this.companyService.createCompany(this.companyForm.value).subscribe({
        next: (response) => {
          console.log('Company created successfully', response);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.error('Error creating company', error);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
