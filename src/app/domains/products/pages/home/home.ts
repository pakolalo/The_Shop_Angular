import { Component, signal } from '@angular/core';
import { Header } from './../../components/header/header'
import { ProductsList} from './../../components/products-list/products-list'

@Component({
  selector: 'app-home',
  imports: [Header, ProductsList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
