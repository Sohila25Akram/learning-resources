import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { LoaderDirective } from '../loader.directive';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, LoaderDirective, LoaderComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  email = signal('');
  password = signal('');
  private authService = inject(AuthService);
  isLoading: boolean = false;

  onSubmit() {
    this.isLoading = true;
    setTimeout(() => {
      this.authService.authenticate(this.email(), this.password());
      this.isLoading = false;
    }, 2000);
  }
}
