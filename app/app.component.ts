import { Component }         from '@angular/core';
// Add the RxJS Observable operators we need in this app.
import './rxjs-operators';
@Component({
  selector: 'my-app',
  template: `
    <hero-list></hero-list>  
  `
})
export class AppComponent { }
