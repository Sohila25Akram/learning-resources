import {
  Directive,
  effect,
  inject,
  input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appLoader]',
  standalone: true,
})
export class LoaderDirective {
  isloading = input(false, { alias: 'appLoader' });
  private templateRef = inject(TemplateRef);
  private templateContent = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.isloading()) {
        this.templateContent.createEmbeddedView(this.templateRef);
      } else {
        this.templateContent.clear();
      }
    });
  }
}
