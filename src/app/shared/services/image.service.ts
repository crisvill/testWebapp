import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { images } from '../mocks/images.data';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private readonly http: HttpClient) {}

  getImages(cantidad: string): Observable<any> {
    return of(images);
  }
}
