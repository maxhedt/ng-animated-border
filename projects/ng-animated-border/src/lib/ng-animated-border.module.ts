import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnimatedBorderDirective} from './animated-border.directive';

@NgModule({
    declarations: [AnimatedBorderDirective],
    imports: [
        CommonModule
    ],
    exports: [AnimatedBorderDirective]
})
export class NgAnimatedBorderModule {
}
