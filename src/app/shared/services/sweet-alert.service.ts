import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root',
})
export class SweetAlertService {
  constructor() {}

  loading(message: string = 'Cargando...') {
    Swal.fire({
      title: message,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  }

  success(message = 'Operación exitosa', title = '¡Éxito!') {
    return Swal.fire({
      icon: 'success',
      title,
      text: message,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
    });
  }

  error(message = 'Ocurrió un error', title = '¡Error!') {
    return Swal.fire({
      icon: 'error',
      title,
      text: message,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
    });
  }

  confirmDelete(
    message = '¿Estás seguro de eliminar?',
    title = 'Confirmar eliminación'
  ) {
    return Swal.fire({
      title,
      text: message,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });
  }

  close() {
    Swal.close();
  }
}
