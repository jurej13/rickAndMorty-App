import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { Characters, Info, Result } from 'src/app/interface/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private charactersInfoResults$ : BehaviorSubject<Characters> = new BehaviorSubject<Characters>({})
  
  constructor(private apollo : Apollo) { }

  get characters(){
    return this.charactersInfoResults$.asObservable() 
  }
  set charactersData(data : Characters){
    this.charactersInfoResults$.next(data)
  }

  getCharacters(termino : string = "",page : number = 1) {
    const query = gql`
       {
        characters(page: ${page},filter:{name:"${termino}"}) {
          info {
            count,
            pages,
            next
            prev
          }
          results {
            name,
            image
          }
        }
      }`
    return this.apollo.watchQuery<any>({
      query : query
    }).valueChanges
    .pipe(
      map(resp=> {
        return resp.data.characters})
    )
    
  }
}
