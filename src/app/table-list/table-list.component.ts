import { Component, OnInit, ElementRef } from '@angular/core';
import { categorie } from './table-list.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { CategorieService } from './table-list.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  categories: categorie[];

  constructor(private categoriervice: CategorieService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProduitResto();

  }
  getProduitResto() {

    this.categoriervice.getProduitResto()
  .subscribe(categories => {
    return this.categories = categories;
    });

  }
  DeleteProd(id: number) {

    this.categoriervice.DeleteProd(id)
  .subscribe(categories => {
    return this.categories = categories;
    });

    window.location.reload();
  }

}

