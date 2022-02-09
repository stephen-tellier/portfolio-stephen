import { Directive, Input, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appParallaxV2]'
})
export class ParallaxV2Directive {

  @Input('distance') parallaxDistance: number = 40
  @Input('angle') parallaxAngle: number = 0


  // @Input('speed') parallaxSpeed: number = 1 //supérieur à 1 plus rapide que le scroll, infèrieur à 1 plus lent que le scroll, inferieur à 0 reverse 
  @Input('mod') parallaxMod: string = "crossing" // crossing - enterIn - enterOut

  startPosX: number
  startPosY: number
  progressionPosX: number = 0
  progressionPosY: number = 0

  rect = this.eleRef.nativeElement.getBoundingClientRect()
  

  constructor(private eleRef: ElementRef) {
    this.parallaxAngle = -this.parallaxAngle + 180
    this.startPosX = -Math.round(Math.sin(this.parallaxAngle * Math.PI / 180)*this.parallaxDistance)
    this.startPosY = -Math.round(Math.cos(this.parallaxAngle * Math.PI / 180)*this.parallaxDistance)

    this.eleRef.nativeElement.style.transform = `translate(${ this.startPosX }px, ${ this.startPosY }px)`
  }

  @HostListener("window:scroll", ["$event"])

  // ngOnInit(): void {
  //   this.eleRef.nativeElement.style.transform = `translate(${ this.startPosX }px, ${ -this.startPosY }px)`
  // }

  onWindowScroll() {
    this.progressionPosX = this.startPosX - (2*this.startPosX * this.getPositiveValue((window.scrollY + window.innerHeight - this.rect.top) / window.innerHeight))
    this.progressionPosY = this.startPosY - (2*this.startPosY * this.getPositiveValue((window.scrollY + window.innerHeight - this.rect.top) / window.innerHeight))
    this.eleRef.nativeElement.style.transform = `translate(${this.progressionPosX }px, ${this.progressionPosY }px)`
    console.log(this.eleRef, this.rect.top)
  }

  // setBehavior(aS:any) {
  //   if (aS == "crossing") { 
  //     return this.getPositiveValue(window.scrollY - this.rect.top + window.innerHeight)
  //   }else if (aS == "enterIn") {
  //     return window.scrollY
  //   }else if (aS == "enterOut") {
  //     return window.scrollY
  //   }else{
  //     return 0
  //   }
  // }

  getPositiveValue(el:number){
    if(el>=0){
      return el
    }else{
      return 0
    }
  }
}
