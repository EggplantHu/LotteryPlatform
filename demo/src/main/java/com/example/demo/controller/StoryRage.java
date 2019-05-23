package com.example.demo.controller;

public class StoryRage {
public static void main(String[] args) throws InterruptedException {
	TestThread thread = new TestThread();
	TestThread thread1 = new TestThread();
	
	thread.sleep(1000);
	thread.start();
	thread1.start();
	
}
}
