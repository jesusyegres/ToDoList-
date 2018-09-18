import { TodoService } from './shared/todo.service';
import { ToastService } from './shared/toast.service';

import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit{

  public items = [];
  
  public titulo:string = ""; //ModeL DEL TITLE o descripcion que se hara

  constructor(private tds:TodoService, private ts:ToastService) {}

  ngOnInit() {
    this.tds.getTitles().subscribe((titleSnapshot) => {
      this.items = [];
      titleSnapshot.forEach((titleData: any) => {
        this.items.push({
          id: titleData.payload.doc.id,
          data: titleData.payload.doc.data()
        });
      });
    });
  }

  agregarTitle(titulo){
  
    let data = { 
      title: this.titulo
    }
    
    if(this.titulo.length == 0){
      this.ts.showWarning("Por favor, escribir una tarea","Campos vacios");   
    }else{
        this.titulo=""
        this.tds.addTitle(data).then( ()=>{
        this.ts.showSuccess(data.title,"Se creo, correctamente");
      })
      .catch ( (e)=>{
        console.log(e);  
      })

    }

  }

  borrarTitle(id){
    this.tds.deleteTitle(id).then(() => {
      this.ts.showError("Documento eliminado");
    }, (error) => {
      console.error(error);
    });
  }

}
