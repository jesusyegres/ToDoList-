import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor( private toastr: ToastrService) { }

  showSuccess(tittle:string,message:string){
    this.toastr.success(tittle, message);
  }

  showError(tittle:string){
    this.toastr.error(tittle);
  }
  showWarning(tittle:string,message:string){
    this.toastr.warning(message,tittle);
  }

}
