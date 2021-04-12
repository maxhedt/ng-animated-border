import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgAnimatedBorderModule} from '../../projects/ng-animated-border/src/lib/ng-animated-border.module';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
    declarations: [
        AppComponent,
        ToggleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgAnimatedBorderModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
