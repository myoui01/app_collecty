import { Injectable } from '@angular/core';
import { IPostagem, createIPostagem } from '../models/postagem.model';
import { Firestore, addDoc, deleteDoc, collection, collectionData, docSnapshots, doc, setDoc } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {
  private categorias: string[] = ['Pendente', 'Fechado', 'Cancelado'];
  private tarefas: IPostagem[] = [];

  constructor(public firestore: Firestore) { }

  public getCategorias(): string[] {
    return this.categorias;
  }

  public getAll(): Observable<IPostagem[]> {
    const tCollection = collection(this.firestore, 'tarefas');
    return collectionData(tCollection, {idField: 'id'})
    .pipe(map(tarefas => tarefas as IPostagem[]));
  }

  // public get(id: string): IPostagem {
  //   const resultado = this.tarefas.find((obj) => {
  //     return (obj.id === id);
  //   });
  //   return (resultado) ? { ...resultado } : createIPostagem();
  // }

  public async add(novaTarefa: IPostagem): Promise<IPostagem> {

    const docRec = await addDoc(collection(this.firestore, 'tarefas'), {
      title: novaTarefa.title,
      seller: novaTarefa.seller,
      price: novaTarefa.price,
      description: novaTarefa.description,
      group: novaTarefa.group,
      shippingFee: novaTarefa.shippingFee,
      imageUrl: novaTarefa.imageUrl,
      status: novaTarefa.status,
    });

    console.log('Doc salvo com o id: ', docRec.id);
    console.log('Salvar --> novaTarefa', novaTarefa);
    this.tarefas.push(novaTarefa);
    return this.tarefas[this.tarefas.length - 1];
  }

  public getIndex(id: string): number {
    const index = this.tarefas.findIndex((obj) => {
      return obj.id === id;
    });
    return index;
  }

  get(id: string): Observable<IPostagem> {
    const document = doc(this.firestore, 'tarefas', id);
    return docSnapshots(document).pipe(map(doc => {
      const id = doc.id;
      const data = doc.data();
      return { id, ...data  } as IPostagem;
    }));
  }


  public delete(id: string): number {
    const index = this.getIndex(id);
    const document = doc(this.firestore, 'tarefas', id);
    deleteDoc(document);
    if (index >= 0) {
      this.tarefas.splice(index, 1);
    }
    return index;
  }
}