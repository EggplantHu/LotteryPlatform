package com.example.demo.controller;

public class TestThread extends Thread{

	private int number=10;
	@Override
	public void run() {
		synchronized (this) {
			for(int i=0;number>0;i++){
				number--;
				System.out.println(Thread.currentThread().getName()+"第"+i+"次干活");
			}
		}
		
	}
	
	

}
