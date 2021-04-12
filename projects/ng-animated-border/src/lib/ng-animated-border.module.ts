import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnimatedBorderDirective} from './animated-border.directive';
import { AnimatedBorderWrapperDirective } from './animated-border-wrapper.directive';

@NgModule({
    declarations: [AnimatedBorderDirective, AnimatedBorderWrapperDirective],
    imports: [
        CommonModule
    ],
    exports: [AnimatedBorderDirective, AnimatedBorderWrapperDirective]
})
export class NgAnimatedBorderModule {
}
