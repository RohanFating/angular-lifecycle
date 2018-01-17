import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Page1Component } from './page-module/page1/page1.component';
import { Page2Component } from './page-module/page2/page2.component';



export class AlwaysAuthGuard implements CanActivate {
  canActivate() {
    console.log('AlwaysAuthGuard');
    return true;
  }
}

export class DeactivtePages implements CanDeactivate<Page1Component> {
  canDeactivate( page1: Page1Component,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ) {
    return page1.canDeactivate();
  }
}

export const routes: Routes = [
  {
    path: '',
    component: Page1Component,
    canDeactivate: [DeactivtePages],
  },
  {
    path: 'page2',
    component: Page2Component,
    canActivate: [AlwaysAuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AlwaysAuthGuard,
    DeactivtePages,
  ],
  declarations: []
})
export class AppRoutingModule { }

