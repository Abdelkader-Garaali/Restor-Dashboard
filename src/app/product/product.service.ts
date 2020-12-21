import { Injectable } from '@angular/core';

import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { produit } from './product.interface';

const apiUrl = "http://localhost:3000/entities";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public  currentUser:User;
  public token :Boolean;
  public isLoggedIn:boolean;


  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) {

  }



  addProduit( descriptionProduit, nomProduit, photoProduit, prixProduit, categorie_idCategorie, idRestaurant){
    const  obj2 = {

descriptionProduit: descriptionProduit,
nomProduit: nomProduit,
photoProduit: photoProduit,
prixProduit: prixProduit,
categorie_idCategorie: categorie_idCategorie,
idRestaurant: idRestaurant
      };
      console.log(obj2);
          this.http.post<produit>(`${apiUrl}/addProduct`, obj2).subscribe(
            res => {
              var info=JSON.parse(JSON.stringify(res));
              console.log(res);
              if(info.status==false){
                this.toastr.error(info.msg, 'Error ');
              }
              else{
                console.log('sucess Commande  ');


              }
              return res;
            },
            err => {
              console.log('Error occured:' , err);
              this.toastr.error(err.message, 'Error occured '+err);
              return err;
            });
  }

}

