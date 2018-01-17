import { Component, Input,
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy  {

  @Input() public heading: String;
  public lifecycleMsgs: Array<string> = [];
  public nameModel: String = 'asdsad';
  public ageModel: String;

  constructor() { }

  public ngOnInit() {
    this.lifecycleMsgs.push('PersonalDataComponent: ngOnInit' );
    console.log('PersonalDataComponent: Ng On Init');
  }

  public ngOnChanges() {
    this.lifecycleMsgs.push('PersonalDataComponent: ngOnChanges' );
    console.log('PersonalDataComponent: ngOnChanges');
  }
  public ngDoCheck() {
    this.lifecycleMsgs.push('PersonalDataComponent: ngDoCheck' );
    console.log('PersonalDataComponent: ngDoCheck');
  }
  public ngAfterContentInit() {
    this.lifecycleMsgs.push('PersonalDataComponent: ngAfterContentInit' );
    console.log('PersonalDataComponent: ngAfterContentInit');
  }

  public ngAfterContentChecked() {
    this.lifecycleMsgs.push('PersonalDataComponent: ngAfterContentChecked' );
    console.log('PersonalDataComponent: ngAfterContentChecked');
  }

  public ngAfterViewInit() {
    this.lifecycleMsgs.push('PersonalDataComponent: ngAfterViewInit' );
    console.log('PersonalDataComponent: ngAfterViewInit');
  }

  public ngAfterViewChecked() {
    this.lifecycleMsgs.push('PersonalDataComponent: ngAfterViewChecked' );
    console.log('PersonalDataComponent: ngAfterViewChecked');
  }

  public ngOnDestroy() {
    this.lifecycleMsgs.push('PersonalDataComponent: ngOnDestroy' );
    console.log('PersonalDataComponent: ngOnDestroy');
  }

}
