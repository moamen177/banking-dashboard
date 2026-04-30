import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings {
 
  userProfile = {
    name: "Mo'men",
    email: "momen@example.com",
    phone: "01012345678",
    language: "English"
  };

  constructor(private cdr: ChangeDetectorRef) {}

  saveSettings() {
    alert('Settings updated successfully!');
    
    this.cdr.detectChanges();
  }
}