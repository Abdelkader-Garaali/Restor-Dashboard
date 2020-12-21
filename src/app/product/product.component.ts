import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpEventType} from '@angular/common/http';
import {ProductService} from './product.service';
import { produit } from './product.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  angForm1: FormGroup;
  constructor(private ProdutService: ProductService , private http: HttpClient , private fb: FormBuilder , private router: Router ) {
    this.createForm(); }
  title = 'helloworld';
public products : produit[] ;
  fileData = null;

  createForm() {
    this.angForm1 = this.fb.group({
      name: ['', Validators.required ],
      des: ['', Validators.required ],
      photo: ['',Validators.required],
      price: ['',Validators.required],
      cat: ['', Validators.required ],
      rest: ['', Validators.required ],


    });
  }
  ngOnInit() {


  }

  addProduit(des, name, photo, price, cat, rest) {
    let exist =false


      if (exist) {
   this.ProdutService.addProduit(des, name, photo, price, cat, rest);}
   else{

    this.ProdutService.addProduit(des, name, photo, price, cat, rest);
    this.router.navigate(['/table-list']);
   }

  }

}
