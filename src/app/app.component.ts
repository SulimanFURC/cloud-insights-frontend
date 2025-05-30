import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CloudSelectorComponent } from './components/cloud-selector/cloud-selector.component';

@Component({
  selector: 'app-root',
  imports: [CloudSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cloudIdeaGeneration';
  theme = signal<'light' | 'dark'>('light');

  toggleTheme() {
    this.theme.update(t => t === 'light' ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', this.theme());
  }

  ngOnInit() {
    // Optionally, load theme from localStorage
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      this.theme.set(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }

  ngDoCheck() {
    // Persist theme
    localStorage.setItem('theme', this.theme());
  }
}
