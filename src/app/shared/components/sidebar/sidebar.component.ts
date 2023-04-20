import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


constructor( private gifsService: GifsService ) { }


//*public tagHistoryElement: string[] = this.gifsService.tagsHistory porque esto esta mal??? apuntes

get tagHistoryElement(): string[] {
  return this.gifsService.tagsHistory;
}

searchTagAgain(tag: string): void {
  this.gifsService.searchTag(tag)
} 


}
