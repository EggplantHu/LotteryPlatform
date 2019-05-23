package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class MainController {
	
	@RequestMapping("/hello")
	public String hello(){
		
		return "hello";
	}
	
	@RequestMapping("/index")
	public String ghtml(Model model){
		return "index";
	}
	
	@RequestMapping("/lottery2")
	public String lottery(Model model){
		
		return "lottery2";
	}
	
	@RequestMapping("/jmbank/resource/prdbook/FB003/index.html")
	public String FB003(Model model){
		
		return "FB003";
	}
	
}
