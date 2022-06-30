import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters, Result } from 'src/app/interface/characters.interface';
import { DataManagerService } from '../../services/data-manager.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  characters !: Observable<Characters>
  constructor(private dataManagerService : DataManagerService) { 
  }
  ngOnInit(): void {    
    this.characters = this.dataManagerService.characters
  }

}
