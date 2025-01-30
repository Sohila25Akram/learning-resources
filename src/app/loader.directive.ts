import {
  Directive,
  ElementRef,
  inject,
  input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewContainerRef,
} from '@angular/core';
import { LoaderComponent } from './shared/loader/loader.component';

@Directive({
  selector: '[appLoader]',
  standalone: true,
})
export class LoaderDirective implements OnChanges {
  isloading = input(false, { alias: 'appLoader' });
  text = input.required<string>();

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);
  private templateContent = inject(ViewContainerRef);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isloading']) {
      if (this.isloading()) {
        this.addLoading();
      } else {
        this.removeLoading();
      }
    }
  }

  addLoading() {
    const originalSpan = this.el.nativeElement.querySelector('span');
    if (originalSpan) {
      this.renderer.setStyle(originalSpan, 'display', 'none');
    }

    this.templateContent.createComponent(LoaderComponent);
  }
  removeLoading() {
    const originalSpan = this.el.nativeElement.querySelector('span');
    if (originalSpan) {
      this.renderer.removeStyle(originalSpan, 'display');
    }

    this.templateContent.clear();
  }
}
