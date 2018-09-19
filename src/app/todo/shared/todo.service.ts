import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  todoList: Observable<any[]>;
  
  constructor(private db:AngularFirestore) { 
    console.log("estoy en el servicio");
    
  }

  getTitles() {
    return this.db.collection('items').snapshotChanges();
  }

  addTitle(data: {title: string,complete:boolean}){
    return this.db.collection('items').add(data);
  }


  deleteTitle(documentId: string){
    return this.db.collection('items').doc(documentId).delete();
  }

/*   checkoruncheck(documentId: string, data: any){
      return this.db.collection('items').doc(documentId).set(data);
  } */

}
