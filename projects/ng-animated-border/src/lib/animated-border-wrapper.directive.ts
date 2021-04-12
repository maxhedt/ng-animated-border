import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[ngAnimatedBorderWrapper]'
})
export class AnimatedBorderWrapperDirective {

  constructor() {
  }

  @HostBinding('style.position') position = 'relative';
  @HostBinding('style.z-index') zIndex = '0';
}
