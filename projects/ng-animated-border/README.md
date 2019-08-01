# NgAnimatedBorder

Angular package to style element borders with css gradients and animations.

## Preview
[Example in Stackblitz](https://stackblitz.com/edit/angular-animated-border)

## Installation
#### npm

- npm install ng-animated-border

#### yarn 

- yarn add ng-animated-border

## Basic Usage

- Import the `NgAnimatedBorderModule` to your module.

- Add the `ngAnimatedBorder` directive to your `[div, span, p, a]` element.

- Add a background animation to your element. This animation will be the border animation.
````html
<span ngAnimatedBorder class="myCssAnimation" [abBorderWidth]="['2px']">
    <span>Magic</span>
</span>
````

````css
.myCssAnimation {
    background: linear-gradient(270deg, #e922e9, #f75d21, #5543f7, #00dbff, #92db32);
    background-size: 600% 600%;
    animation: borderAnimation 4s ease infinite;
}

@keyframes borderAnimation {
  0% { background-position: 0 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
}
````

## Inputs

- The directive comes with different inputs.

#### [abBackgroundColor]
- sets the background color for your main element, since you dont want the animation affect your real background
- you can use any (s)css color value
````typescript
abBackgroundColor: string = 'white';
````

#### [abBorderWidth]
- sets the borderWidth for: 1. all borders; 2: vertical, horizontal borders; 3: top, right, bottom, left border
- you can use any (s)css unit
````typescript
abBorderWidth: [string] | [string, string] | [string, string, string, string] = ['0px'];
````

#### [abBorderRadius]
- sets the borderRadius for: 1. all corners; 2: top-right, bottom-right, bottom-left, top-left corner
- you can use any (s)css unit
````typescript
abBorderRadius: [string] | [string, string, string, string] = ['0px'];
````

#### [abPauseAnimation]
- pauses and resumes the css animation
````typescript
abPauseAnimation: boolean = false;
````

## Notes
- Please wrap the hostelement with the directive properly.
- Otherwise, modified css properties on the host element can lead to unintended results.
