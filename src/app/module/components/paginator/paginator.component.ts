import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from 'src/app/interface/characters.interface';
import { DataManagerService } from '../../services/data-manager.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  characters !: Observable<Characters>
  constructor(private dataManagerService : DataManagerService) { 
    this.characters=this.dataManagerService.characters
  }

  ngOnInit(): void {

  }
  paginate(event:any){
    this.dataManagerService.getCharacters('',event.page+1)
      .subscribe(resp=> this.dataManagerService.charactersData = resp)
  }

}
