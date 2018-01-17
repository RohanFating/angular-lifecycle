import { Component, OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,
AfterViewChecked, OnDestroy {

  public lifecycleMsgs: Array<string> = [];
  constructor( private router: Router) { }

  public ngOnInit() {
    this.lifecycleMsgs.push('Page1Component: ngOnInit' );
    console.log('Page1Component: Ng On Init');
  }

  public ngOnChanges() {
    this.lifecycleMsgs.push('Page1Component: ngOnChanges' );
    console.log('Page1Component: ngOnChanges');
  }
  public ngDoCheck() {
    this.lifecycleMsgs.push('Page1Component: ngDoCheck' );
    console.log('Page1Component: ngDoCheck');
  }
  public ngAfterContentInit() {
    this.lifecycleMsgs.push('Page1Component: ngAfterContentInit' );
    console.log('Page1Component: ngAfterContentInit');
  }

  public ngAfterContentChecked() {
    this.lifecycleMsgs.push('Page1Component: ngAfterContentChecked' );
    console.log('Page1Component: ngAfterContentChecked');
  }

  public ngAfterViewInit() {
    this.lifecycleMsgs.push('Page1Component: ngAfterViewInit' );
    console.log('Page1Component: ngAfterViewInit');
  }

  public ngAfterViewChecked() {
    this.lifecycleMsgs.push('Page1Component: ngAfterViewChecked' );
    console.log('Page1Component: ngAfterViewChecked');
  }

  public ngOnDestroy() {
    this.lifecycleMsgs.push('Page1Component: ngOnDestroy' );
    console.log('Page1Component: ngOnDestroy');
  }

  public next(): void {
    this.router.navigate(['/page2']);
  }

  public canDeactivate() {
    return true;
  }

}
