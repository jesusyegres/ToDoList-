import { Observable } from 'rxjs';
import { TodoService } from './shared/todo.service';
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

  constructor(private tds:TodoService) { 

    //this.getTitles();

  }

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
      console.log("esta vacio");     
    }else{
        this.titulo=""
        this.tds.addTitle(data).then( ()=>{
        console.log("Se creo, correctamente");
      })
      .catch ( (e)=>{
        console.log(e);  
      })

    }

  }

  borrarTitle(id){
    this.tds.deleteTitle(id).then(() => {
      console.log('Documento eliminado!');
    }, (error) => {
      console.error(error);
    });
  }

}
