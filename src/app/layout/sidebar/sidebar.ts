import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive,RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {}
