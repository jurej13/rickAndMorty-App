import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { DataManagerService } from '../../services/data-manager.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dataManagerService : DataManagerService) { }

  ngOnInit(): void {
  }
  searchByName(termino : any){
    
    this.dataManagerService.getCharacters(termino.value)
      .subscribe(
        resp=>this.dataManagerService.charactersData = resp
      )
  }

}
