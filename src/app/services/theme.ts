import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private dark = false;

  constructor(){
    const saved = localStorage.getItem('theme');
    this.dark = saved === 'dark';
    this.applyTheme();
  }

  toggleTheme(){
    this.dark = !this.dark;
    localStorage.setItem('theme', this.dark? 'dark': 'light');
    this.applyTheme();
    
  }
  private applyTheme(){
    document.body.classList.toggle('dark', this.dark);
  }
  isDark(){
    return this.dark;
  }
  
}
