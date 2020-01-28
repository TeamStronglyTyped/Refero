package com.referospring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.referospring.model.Users;
import com.referospring.service.UsersService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class LoginController {
	@Autowired
	UsersService service;

	@PostMapping("/login")
	public Users validateUser(@RequestBody Users user) {
		user=service.getUsersByUserNameAndPassWord(user.getUserName(), user.getPassWord());
		if(user!=null) {
			if (user.getBanned()=="N") {
				return user;
			}
		}
		return null;
	}
	
	@PostMapping("/register")
	public Users addUsers(@RequestBody Users user) {
		System.out.println("add user");
		return service.addUsers(user);
	}
	
}
