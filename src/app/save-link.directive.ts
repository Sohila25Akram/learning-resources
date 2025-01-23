import { Directive, input } from '@angular/core';

@Directive({
  selector: 'a[appSaveLink]',
  standalone: true,
  host: { '(click)': '(onConfirmLeavePage($event))' },
})
export class SaveLinkDirective {
  queryParam = input('myapp', { alias: 'appSaveLink' });

  constructor() {
    console.log('directive is active');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('do you want to leave the app');

    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href =
        address + '?from=' + this.queryParam();
      return;
    }

    event.preventDefault();
  }
}
