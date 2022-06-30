import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../../services/data-manager.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  

  constructor(private dataManagerService : DataManagerService) {
    this.dataManagerService.getCharacters().subscribe(resp=> this.dataManagerService.charactersData = resp)
  }
  ngOnInit(): void {
 
  }

}
