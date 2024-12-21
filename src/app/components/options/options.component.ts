import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit, OnDestroy{

  optionsForm: FormGroup;
  categories: string[] = ["Food", "Sport"];

  ngOnInit(){
    this.optionsForm = new FormGroup({})
  }

  ngOnDestroy(){

  }

  sendRequestOptions() {

  }
}
