import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public pauseAnimation = true;
  public toggleDiv = true;
  public toggleP = true;
  public toggleSpan = true;
  public toggleImg = true;
  public toggleA = true;
  public toggleBtn = true;
  ngOnInit(): void {
    this.pauseAnimation = true;
  }
}
