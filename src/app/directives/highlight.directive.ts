import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() appHighlight = '';
  @Input() aditira = '';

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
  }

  @HostListener('click') onClick() {
    console.log("Highlight:",this.appHighlight, this.aditira);
    this.highlight(this.appHighlight);
  }
  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
