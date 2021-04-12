import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  @Input() name: string = 'Test';
  @Output() toggleView: EventEmitter<boolean> = new EventEmitter<boolean>();

  private toggleState = true;

  constructor() { }

  ngOnInit() {
  }

  public toggle() {
    this.toggleState = !this.toggleState;
    this.toggleView.emit(this.toggleState);
  }

}
