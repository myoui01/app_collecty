import { Component } from '@angular/core';
import { KpopGroup, kpopGroups } from '../data/kpop-groups'; // Import the K-pop groups data
import { Post } from '../data/anuncios'; // Import the Post interface
import { posts } from '../data/anuncios'; // Import the posts array
import { Router } from '@angular/router';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage{ 
  groups: KpopGroup[] = kpopGroups;
  posts: Post[] = posts;
  constructor(private router: Router) { }

  getStatusColor(status: string): string {
    if (status === 'Pronto') {
      return 'green'; // Green color for ready status
    } else if (status === 'Pendente') {
      return 'orange'; // Yellow color for pending status
    } else {
      return 'gray'; // Default color for other status
    }
  }

  verDetalhes(postId: string) {
    this.router.navigate(['/detalhes', postId]);
  }


}
