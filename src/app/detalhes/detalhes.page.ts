import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,NavigationExtras } from '@angular/router';
import { Post, posts } from '../data/anuncios'; // Importe a interface Post e a array de posts
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {
  post: Post | undefined; // Inicialize como undefined

  constructor(private navCtrl: NavController,private route: ActivatedRoute, private router: Router) { }

  getStatusColor(status: string): string {
    if (status === 'Pronto') {
      return 'green'; // Green color for ready status
    } else if (status === 'Pendente') {
      return 'orange'; // Yellow color for pending status
    } else {
      return 'gray'; // Default color for other statuses
    }
  }

  goBack() {
    this.navCtrl.back();
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('id');
      // Encontrar o post com o ID correspondente
      this.post = posts.find(post => post.id === postId);
    });
  }
}
