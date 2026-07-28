import { Component } from '@angular/core';
import { Header } from './../../components/header/header'
import { SideMenu } from "../../components/side-menu/side-menu";

@Component({
  selector: 'app-home',
  imports: [Header, SideMenu],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
