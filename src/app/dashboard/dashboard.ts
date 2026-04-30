import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Cards } from "./cards/cards";
import { Transactions } from "./transactions/transactions";
import { Data } from '../services/data';
  import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [Cards, Transactions, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})

export class Dashboard implements OnInit{
  stat : { title: string, value: number }[] = [];
  constructor(private dataService : Data,private cdr: ChangeDetectorRef){}
  ngOnInit() {

  this.dataService.getusers().subscribe({
    next: (res: any) => {
      this.stat = [
        { title: 'Total Customers', value: res.length },
        { title: 'Balance', value: res.length * 1000 },
        { title: 'Income', value: res.length * 200 },
        { title: 'Expenses', value: res.length * 100 },
      ];
      this.cdr.detectChanges();
    },
    
  });
}
}
