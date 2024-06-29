package com.application.PaymentGateWay;

public class OrderDetails {
	private int amount;
	private String currency ="INR";
	private String receipt;
	public OrderDetails() {
		
	}
	public OrderDetails(int amount, String receipt) {
		this.amount = amount;
		this.receipt = receipt;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getCurrency() {
		return currency;
	}
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	public String getReceipt() {
		return receipt;
	}
	public void setReceipt(String receipt) {
		this.receipt = receipt;
	}
	
	

}
