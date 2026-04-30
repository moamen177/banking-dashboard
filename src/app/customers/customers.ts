import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Data } from '../services/data'; 

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css'
})
export class Customers implements OnInit {
  allusers: any[] = [];      
  filteredusers: any[] = []; 
  searchTerm: string = '';  

  constructor(private dataservice: Data, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.dataservice.getusers().subscribe({
      next: (res: any) => {
        this.allusers = res;
        this.filteredusers = res;
        
        this.cdr.detectChanges();
      },
    });
  }

  onSearch() {
    this.filteredusers = this.allusers.filter(user => {
      const name = user.name.toLowerCase();
      const search = this.searchTerm.toLowerCase();
      
      return name.includes(search);
    });

    this.cdr.detectChanges();
  }
}