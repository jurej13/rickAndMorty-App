import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  
  constructor(private apollo : Apollo) { }
  getCharacters(){
    const query = gql`
      query {
        characters(page: 2) {
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
      }
    `
    // TODO: hacer peticion para los characters de rck and morty y despues hacer las cards para cada uno.

  }
}
