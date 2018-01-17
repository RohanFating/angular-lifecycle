import { Component, OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
 } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy {

  public isClicked = false;
  public lifecycleMsgs: Array<string> = [];
  public heading: String = 'Personal Data';
  constructor() { }

  public toggle(): void {
    this.isClicked = !this.isClicked;
    this.heading = this.isClicked ? 'Personal Details Input Changes' : 'Personal Data Input Changes';
  }

  public ngOnInit() {
    this.lifecycleMsgs.push('Page2Component: ngOnInit' );
    console.log('Page2Component: Ng On Init');
  }

  public ngOnChanges() {
    this.lifecycleMsgs.push('Page2Component: ngOnChanges' );
    console.log('Page2Component: ngOnChanges');
  }
  public ngDoCheck() {
    this.lifecycleMsgs.push('Page2Component: ngDoCheck' );
    console.log('Page2Component: ngDoCheck');
  }
  public ngAfterContentInit() {
    this.lifecycleMsgs.push('Page2Component: ngAfterContentInit' );
    console.log('Page2Component: ngAfterContentInit');
  }

  public ngAfterContentChecked() {
    this.lifecycleMsgs.push('Page2Component: ngAfterContentChecked' );
    console.log('Page2Component: ngAfterContentChecked');
  }

  public ngAfterViewInit() {
    this.lifecycleMsgs.push('Page2Component: ngAfterViewInit' );
    console.log('Page2Component: ngAfterViewInit');
  }

  public ngAfterViewChecked() {
    this.lifecycleMsgs.push('Page2Component: ngAfterViewChecked' );
    console.log('Page2Component: ngAfterViewChecked');
  }

  public ngOnDestroy() {
    this.lifecycleMsgs.push('Page2Component: ngOnDestroy' );
    console.log('Page2Component: ngOnDestroy');
  }

}
