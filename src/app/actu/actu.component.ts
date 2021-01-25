import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actu',
  templateUrl: './actu.component.html',
  styleUrls: ['./actu.component.css']
})
export class ActuComponent implements OnInit {
  section = " Nos derniéres Actualités ";
  user = " Francis "
  today: number = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
