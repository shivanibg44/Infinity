import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public image1="assets/img/pp1.jpg";
  public image2="assets/img/pp2.jpg";
  public image3="assets/img/pp3.jpg";
  constructor() { }
  

  ngOnInit(): void {
  }

}
