import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HardCodeProductsService {

  public items: Product[] = [
    {
      id: '1',
      title: 'Bulbasaur',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'
      ],
      description: 'First leaf pokemon'
    },
    {
      id: '2',
      title: 'Ivysaur',
      prices:{
        '2 asientos': 2999,
        '4 asientos': 3999
      },
      photos: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png'
      ],
      description: 'Enhanced leaf pokemon'
    },
    {
      id: '3',
      title: 'Venasaur',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png'
      ],
      description: 'Powerful leaf pokemon'
    },
    {
      id: '4',
      title: 'Charmander',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png'
      ],
      description: 'hello'
    },
    {
      id: '5',
      title: 'Charmeleon',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/5.png'
      ],
      description: 'hello'
    },
    {
      id: '6',
      title: 'Charizard',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png'
      ],
      description: 'hello'
    },
    {
      id: '7',
      title: 'Squirtle',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png'
      ],
      description: 'hello'
    },
    {
      id: '8',
      title: 'Wartortle',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/8.png'
      ],
      description: 'hello'
    },
    {
      id: '9',
      title: 'Blastoise',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png'
      ],
      description: 'hello'
    },
    {
      id: '10',
      title: 'Caterpie',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/10.png'
      ],
      description: 'hello'
    },
    {
      id: '11',
      title: 'Metapod',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/11.png'
      ],
      description: 'hello'
    },
    {
      id: '12',
      title: 'Butterfree',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/12.png'
      ],
      description: 'hello'
    }
  ];

  constructor(private readonly httpClient: HttpClient) { }

  private urlPhotos: string = 'https://api.slingacademy.com/v1/sample-data/photos';

  public getItems(): Product[]{
    return this.items;
  }

  public getItemById(id: string): Product{
    return Array.prototype.find.call(this.items, x => x.id == id);
  }

  public getPhotos(): Observable<any>{
    return this.httpClient
               .get<any>(this.urlPhotos);
  }

}
