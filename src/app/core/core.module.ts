import { NgModule } from '@angular/core';
import { HeaderComponent, FooterComponent } from './components';
import { WelcomePageComponent } from './pages';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    WelcomePageComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
