import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


constructor( private gifsService: GifsService ) { }

// mejor hacer un getter que un public
get tagHistoryElement(): string[] {
  return this.gifsService.tagsHistory;
}

searchTagAgain(tag: string): void {
  this.gifsService.searchTag(tag)
} 

}
