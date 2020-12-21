import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CategorieService {
constructor(private http: HttpClient) { }
  url = 'http://localhost:3000';
  getProduitResto() {
    return this
      .http
      .get(`${this.url}/entities/getProduitcat`);
  }
  DeleteProd(id) {
    return this
      .http
      .delete(`${this.url}/entities/deleteProduct/${id}`);
  }
  }
