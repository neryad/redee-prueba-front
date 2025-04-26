import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-company',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-company.component.html',
  styleUrl: './create-company.component.css',
})
export class CreateCompanyComponent {
  companyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.companyForm = this.fb.group({
      rnc: ['', Validators.required],
      companyName: ['', Validators.required],
      comercialName: ['', Validators.required],
      category: [''],
      paymentSchema: ['', Validators.required],
      status: ['', Validators.required],
      activityEconomics: ['', Validators.required],
      governanceBranch: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.companyForm.valid) {
      console.log('Form Submitted!', this.companyForm.value);
      // Aquí puedes agregar la lógica para enviar el formulario a tu API o servicio
    } else {
      console.log('Form is invalid');
    }
  }
  onCancel() {
    this.companyForm.reset();
    console.log('Form reset');

    // this.router.navigate(['/home']);
  }
}
