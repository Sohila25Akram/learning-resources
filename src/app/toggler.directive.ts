import { Directive, ElementRef, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToggler]',
  standalone: true,
  host: { '(click)': 'onToggle()' },
})
export class TogglerDirective {
  isOpen: boolean = false;

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  onToggle() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.showList();
    } else {
      this.hideList();
    }

    console.log('is open: ', this.isOpen);
  }

  showList() {
    const list = this.el.nativeElement.parentElement.querySelector('ul');
    if (list) {
      this.renderer.setStyle(list, 'display', 'block');
    }
  }
  hideList() {
    const list = this.el.nativeElement.parentElement.querySelector('ul');
    if (list) {
      this.renderer.removeStyle(list, 'display');
    }
  }
}
