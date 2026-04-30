import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data'; 

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css'
})
export class Transactions implements OnInit {
  recentTransactions: any[] = [];

  constructor(private dataService: Data, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.dataService.getusers().subscribe({
      next: (res: any) => {
        this.recentTransactions = res.slice(0, 5).map((user: any) => ({
          id: user.id,
          name: user.name,
          date: 'Oct 24, 2025',
          amount: Math.floor(Math.random() * 5000) + 100, 
          status: user.id % 2 === 0 ? 'Completed' : 'Pending' 
        }));
        this.cdr.detectChanges();
      }
    });
  }
}