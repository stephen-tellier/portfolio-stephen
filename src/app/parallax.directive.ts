import { Directive, Input, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  // @Input('distance') parallaxDistance: number = 50
  @Input('angle') parallaxAngle: number = 0
  @Input('speed') parallaxSpeed: number = 1 //supérieur à 1 plus rapide que le scroll, infèrieur à 1 plus lent que le scroll, inferieur à 0 reverse 

  posX: number = 0
  posY: number = 0

  constructor(private eleRef: ElementRef) {
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    this.posX = Math.round(Math.sin(this.parallaxAngle * Math.PI / 180)*(window.scrollY * this.parallaxSpeed))
    this.posY = Math.round(Math.cos(this.parallaxAngle * Math.PI / 180)*(window.scrollY * this.parallaxSpeed))
    this.eleRef.nativeElement.style.transform = `translate(${ this.posX }px, ${ -this.posY }px)`;
  }

}
