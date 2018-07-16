import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-panel',
  templateUrl: './content-panel.component.html',
  styleUrls: ['./content-panel.component.css']
})
export class ContentPanelComponent implements OnInit {
  @Input() panelName: string;
  @Input() panelContent: string;
  @Input() panelTitle: string;
  @Input() panelClass: string;

  constructor() { }

  ngOnInit() {
  }
}
