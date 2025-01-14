import {Component, OnInit} from '@angular/core';
import {DomandaStateService} from "../../services/domanda-state.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  constructor(private domandaStateService: DomandaStateService) {
  }

  ngOnInit() {
    this.domandaStateService.resetState();
  }

}
