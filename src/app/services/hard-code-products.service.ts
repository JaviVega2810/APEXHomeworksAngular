import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class HardCodeProductsService {

  public items: Product[] = [
    {
      id: '1',
      title: 'Mantel',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        "hello"
      ],
      description: 'hello'
    },
    {
      id: '2',
      title: 'Sofá',
      prices:{
        '2 asientos': 2999,
        '4 asientos': 3999
      },
      photos: [
        "hello"
      ],
      description: 'hello'
    },
    {
      id: '3',
      title: 'Colchón',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        "hello"
      ],
      description: 'hello'
    },
    {
      id: '4',
      title: 'Mesa',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        "hello"
      ],
      description: 'hello'
    },
    {
      id: '5',
      title: 'Refrigerador',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        "hello"
      ],
      description: 'hello'
    },
    {
      id: '6',
      title: 'Estufa',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        "hello"
      ],
      description: 'hello'
    },
    {
      id: '7',
      title: 'Set Cubiertos',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        "hello"
      ],
      description: 'hello'
    },
    {
      id: '8',
      title: 'Cafetera',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        "hello"
      ],
      description: 'hello'
    },
    {
      id: '9',
      title: 'Vajilla',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        "hello"
      ],
      description: 'hello'
    },
    {
      id: '10',
      title: 'Licuadora',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        "hello"
      ],
      description: 'hello'
    }
  ];

  constructor() { }

  public getItems(): Product[]{
    return this.items;
  }
}
