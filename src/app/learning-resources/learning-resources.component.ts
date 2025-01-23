import { Component } from '@angular/core';
import { SaveLinkDirective } from '../save-link.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [SaveLinkDirective],
})
export class LearningResourcesComponent {}
