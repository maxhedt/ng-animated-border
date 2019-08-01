import {Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Directive({
    selector: 'div[ngAnimatedBorder] , span[ngAnimatedBorder] , p[ngAnimatedBorder] , a[ngAnimatedBorder]',
})
export class AnimatedBorderDirective implements OnInit, OnChanges {

    private border: any;

    // sets the background color for your main element, since you dont want the animation affect your real background
    @Input() abBackgroundColor = 'white';

    // sets the borderWidth for: 1. all borders; 2: vertical, horizontal borders; 3: top, right, bottom, left border
    @Input() abBorderWidth: [string] | [string, string] | [string, string, string, string] = ['0px'];

    // sets the borderRadius for: 1. all corners; 2: top-right, bottom-right, bottom-left, top-left corner
    @Input() abBorderRadius: [string] | [string, string, string, string] = ['0px'];

    // pauses and resumes the css animation
    @Input() abPauseAnimation = false;

    constructor(private host: ElementRef) {
    }

    ngOnInit() {
        // clone hostElement
        this.border = this.host.nativeElement.cloneNode(false);
        this.border.style.position = 'absolute';

        // reset unintended styling
        this.border.style.margin = 'unset';
        this.border.style.padding = 'unset';
        this.border.style.width = 'unset';
        this.border.style.height = 'unset';

        // set z-index
        this.host.nativeElement.style.zIndex = 'unset';
        this.border.style.zIndex = '-1';

        // add styling to host element
        this.host.nativeElement.style.position = 'relative';
        this.host.nativeElement.style.backgroundSize = 'cover';

        // apply input styles
        this.setBackgroundStyle(this.abBackgroundColor);
        this.setBorderWidthStyle(this.abBorderWidth);
        this.setBorderRadiusStyle(this.abBorderRadius);
        this.setPauseAnimationStyle(this.abPauseAnimation);

        // add border element as first child of host
        this.host.nativeElement.prepend(this.border);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.hasOwnProperty('abBackgroundColor') && !changes.abBackgroundColor.firstChange) {
            this.setBackgroundStyle(changes.abBackgroundColor.currentValue);
        }
        if (changes.hasOwnProperty('abBorderWidth') && !changes.abBorderWidth.firstChange) {
            this.setBorderWidthStyle(changes.abBorderWidth.currentValue);
        }
        if (changes.hasOwnProperty('abBorderRadius') && !changes.abBorderRadius.firstChange) {
            this.setBorderRadiusStyle(changes.abBorderRadius.currentValue);
        }
        if (changes.hasOwnProperty('abPauseAnimation') && !changes.abPauseAnimation.firstChange) {
            this.setPauseAnimationStyle(changes.abPauseAnimation.currentValue);
        }
    }

    private setBackgroundStyle(val: string) {
        // host element
        this.host.nativeElement.style.background = val + ' padding-box no-repeat';
    }

    private setBorderWidthStyle(val: [string] | [string, string] | [string, string, string, string]) {
        // general host element styling
        this.host.nativeElement.style.borderColor = 'transparent';
        this.host.nativeElement.style.borderStyle = 'solid';

        switch (val.length) {
            case(1):
                // border element
                this.border.style.top = '-' + val[0];
                this.border.style.right = '-' + val[0];
                this.border.style.bottom = '-' + val[0];
                this.border.style.left = '-' + val[0];

                // host element
                this.host.nativeElement.style.borderTopWidth = val[0];
                this.host.nativeElement.style.borderRightWidth = val[0];
                this.host.nativeElement.style.borderBottomWidth = val[0];
                this.host.nativeElement.style.borderLeftWidth = val[0];
                break;

            case(2):
                // border element
                this.border.style.top = '-' + val[0];
                this.border.style.right = '-' + val[1];
                this.border.style.bottom = '-' + val[0];
                this.border.style.left = '-' + val[1];

                // host element
                this.host.nativeElement.style.borderTopWidth = val[0];
                this.host.nativeElement.style.borderRightWidth = val[1];
                this.host.nativeElement.style.borderBottomWidth = val[0];
                this.host.nativeElement.style.borderLeftWidth = val[1];
                break;

            case(4):
                // border element
                this.border.style.top = '-' + val[0];
                this.border.style.right = '-' + val[1];
                this.border.style.bottom = '-' + val[2];
                this.border.style.left = '-' + val[3];

                // host element
                this.host.nativeElement.style.borderTopWidth = val[0];
                this.host.nativeElement.style.borderRightWidth = val[1];
                this.host.nativeElement.style.borderBottomWidth = val[2];
                this.host.nativeElement.style.borderLeftWidth = val[3];
                break;
        }
    }

    private setBorderRadiusStyle(val: [string] | [string, string, string, string]) {
        switch (this.abBorderRadius.length) {
            case(1):
                this.border.style.borderRadius = val[0];
                this.host.nativeElement.style.borderRadius = val[0];
                break;
            case(4):
                this.border.style.borderTopRightRadius = val[0];
                this.host.nativeElement.style.borderTopRightRadius = val[0];

                this.border.style.borderBottomRightRadius = val[1];
                this.host.nativeElement.style.borderBottomRightRadius = val[1];

                this.border.style.borderBottomLeftRadius = val[2];
                this.host.nativeElement.style.borderBottomLeftRadius = val[2];

                this.border.style.borderTopLeftRadius = val[3];
                this.host.nativeElement.style.borderTopLeftRadius = val[3];
                break;
        }
    }

    private setPauseAnimationStyle(val: boolean) {
        this.border.style.animationPlayState = val ? 'paused' : 'running';
    }
}
