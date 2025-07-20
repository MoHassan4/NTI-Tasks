import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../shared/models/product.model';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private apiUrl =
    'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza'; // مثال

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any>(this.apiUrl).pipe(
      map((res) => {
        return res?.data?.recipes.map((recipe: any) => ({
          id: recipe.id,
          title: recipe.title,
          image_url: recipe.image_url,
          source_url: recipe.source_url,
        }));
      })
    );
  }
}
