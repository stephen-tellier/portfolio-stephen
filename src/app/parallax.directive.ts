import { Directive, Input, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  // @Input('distance') parallaxDistance: number = 50
  @Input('angle') parallaxAngle: number = 0
  @Input('speed') parallaxSpeed: number = 1 //supérieur à 1 plus rapide que le scroll, infèrieur à 1 plus lent que le scroll, inferieur à 0 reverse 
  @Input('animStart') parallaxAnimStart: number = 1 // Auto - atTop

  posX: number = 0
  posY: number = 0
  rect = this.eleRef.nativeElement.getBoundingClientRect().top

  constructor(private eleRef: ElementRef) {
      // rect.top <= window.innerHeight
    
  }

  @HostListener("window:scroll", ["$event"])

  onWindowScroll() {
    this.posX = Math.round(Math.sin(this.parallaxAngle * Math.PI / 180)*(this.setBehavior(this.parallaxAnimStart) * this.parallaxSpeed))
    this.posY = Math.round(Math.cos(this.parallaxAngle * Math.PI / 180)*(this.setBehavior(this.parallaxAnimStart) * this.parallaxSpeed))
    // this.posY = Math.round(Math.cos(this.parallaxAngle * Math.PI / 180)*(this.getPositiveValue(window.scrollY - this.rect + window.innerHeight) * this.parallaxSpeed))
    this.eleRef.nativeElement.style.transform = `translate(${ this.posX }px, ${ -this.posY }px)`
    // console.log(this.getPositiveValue(window.scrollY - this.rect + window.innerHeight))
    // console.log(this.setBehavior(this.parallaxAnimStart))
  }

  setBehavior(aS:any) {
    if (aS == 1) { 
      return this.getPositiveValue(window.scrollY - this.rect + window.innerHeight)
    }else if (aS == 2) {
      return window.scrollY
    }else{
      return 0
    }
  }

  getPositiveValue(el:number){
    if(el>=0){
      return el
    }else{
      return 0
    }
  }

  
  

}
