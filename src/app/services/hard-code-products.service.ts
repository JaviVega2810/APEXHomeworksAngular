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
      title: 'Mantel',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        'https://api.slingacademy.com/public/sample-photos/1.jpeg',
        'https://api.slingacademy.com/public/sample-photos/2.jpeg'
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
        'https://api.slingacademy.com/public/sample-photos/3.jpeg',
        'https://api.slingacademy.com/public/sample-photos/4.jpeg'
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
        'https://api.slingacademy.com/public/sample-photos/5.jpeg',
        'https://api.slingacademy.com/public/sample-photos/6.jpeg'
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
        'https://api.slingacademy.com/public/sample-photos/7.jpeg',
        'https://api.slingacademy.com/public/sample-photos/8.jpeg'
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
        'https://api.slingacademy.com/public/sample-photos/9.jpeg',
        'https://api.slingacademy.com/public/sample-photos/10.jpeg'
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
        'https://api.slingacademy.com/public/sample-photos/11.jpeg',
        'https://api.slingacademy.com/public/sample-photos/12.jpeg'
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
        'https://api.slingacademy.com/public/sample-photos/13.jpeg',
        'https://api.slingacademy.com/public/sample-photos/14.jpeg'
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
        'https://api.slingacademy.com/public/sample-photos/15.jpeg',
        'https://api.slingacademy.com/public/sample-photos/16.jpeg'
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
        'https://api.slingacademy.com/public/sample-photos/17.jpeg',
        'https://api.slingacademy.com/public/sample-photos/18.jpeg'
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
        'https://api.slingacademy.com/public/sample-photos/19.jpeg',
        'https://api.slingacademy.com/public/sample-photos/20.jpeg'
      ],
      description: 'hello'
    },
    {
      id: '11',
      title: 'Numero 11',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        'https://api.slingacademy.com/public/sample-photos/23.jpeg',
        'https://api.slingacademy.com/public/sample-photos/24.jpeg'
      ],
      description: 'hello'
    },
    {
      id: '12',
      title: 'Numero 12',
      prices:{
        '2x6': 50,
        '3x9': 100
      },
      photos: [
        'https://api.slingacademy.com/public/sample-photos/25.jpeg',
        'https://api.slingacademy.com/public/sample-photos/26.jpeg'
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
