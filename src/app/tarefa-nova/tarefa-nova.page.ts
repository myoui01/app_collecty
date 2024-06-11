import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostagemService } from '../services/postagem.service';
import { IPostagem, createIPostagem } from '../models/postagem.model';
@Component({
  selector: 'app-tarefa-nova',
  templateUrl: './tarefa-nova.page.html',
  styleUrls: ['./tarefa-nova.page.scss'],
})
export class TarefaNovaPage implements OnInit {
  public categorias: string[] = [];
  public categoriaSelecionada: string = '';
  public categoriaIndice: number = -1;
  public tarefa: IPostagem = createIPostagem();
  constructor(private navCtrl: NavController,
    private tarefaServ: PostagemService) { }
  ngOnInit(): void {
    this.tarefa.status = "Pendente";
    this.categorias = this.tarefaServ.getCategorias();
  }
  public salvar() {
    if (this.tarefa.title) {

      console.log('Salvar', this.tarefa);
      this.tarefaServ.add(this.tarefa);
      this.navCtrl.navigateRoot('/tabs');
    } else {
      console.log('Não é possível salvar uma tarefa vazia');
    }
  }
  public selecionarCategoria(index: number) {
    this.categoriaSelecionada = this.categorias[index];
    this.categoriaIndice = index;
    console.log(this.categoriaSelecionada);
  }
}
