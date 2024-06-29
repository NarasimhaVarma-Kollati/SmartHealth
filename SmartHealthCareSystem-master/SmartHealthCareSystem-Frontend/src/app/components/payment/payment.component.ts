import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  selectedUpiId: string = ''; // Renamed the variable to selectedUpiId

  constructor() { }

  processPayment() {
    // Add logic to handle payment processing here (e.g., card payment)
    // This function will be triggered when the user clicks "Pay Now" button
    console.log('Processing payment...');
  }

  payWithUPI() {
    // Add logic to handle payment processing with UPI ID
    // This function will be triggered when the user clicks "Pay with UPI" button
    if (this.selectedUpiId.trim() !== '') {
      console.log('Paying with UPI ID:', this.selectedUpiId);
      // Add further logic for UPI payment (e.g., API call to a payment gateway)
    } else {
      console.log('Please enter a valid UPI ID.');
    }
  }
}
