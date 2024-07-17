import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Customer } from 'src/app/interfaces/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  Customers!: Customer[];
  transactions: any;
  searchTerm:string ='';
  amountSearchTerm:string ='';
  selectedTransactions: any[] = [];

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.getCustomersData();
  }

  getCustomersData() {
    this._dataService.getJsonData().subscribe((res: any) => {
      this.Customers = res?.customers;
      this.transactions = res?.transactions;
      console.log(this.Customers);

    });
  }
  filterdAmount:any;
  getTotalAmount(customerId: number): number {
    this.filterdAmount = this.transactions?.filter((transaction: any) => transaction.customer_id === customerId)
    .reduce((total: number, transaction: any) => total + transaction.amount, 0) || 0;
    return this.filterdAmount
  }

  showCustomerChart(customerId: number) {
    this.selectedTransactions = this.transactions?.filter((transaction: any) => transaction.customer_id === customerId) || [];
  }
  filterCustomersByAmount(): any[] {
    const searchTerm = parseFloat(this.amountSearchTerm);
    if (isNaN(searchTerm)) {
      return this.Customers;
    }
    return this.Customers?.filter((customer: { id: number; }) => this.getTotalAmount(customer.id) >= searchTerm);
  }
}
