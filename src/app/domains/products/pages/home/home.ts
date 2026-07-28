import { Component } from '@angular/core';
import { Header } from './../../components/header/header'
import { Product } from "../../components/product/product";

@Component({
  selector: 'app-home',
  imports: [Header, Product],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
