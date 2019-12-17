import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() typeEventEmitter = new EventEmitter();
  @Output() searchEventEmitter = new EventEmitter();
  public searchString: string = '';

  constructor() { }
  ngOnInit() {
  }
}
