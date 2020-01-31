package com.referospring.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	public Users validateUser(@RequestBody Users user, HttpServletRequest request,  HttpServletResponse response) {
		user=service.getUsersByUserNameAndPassWord(user.getUserName(), user.getPassWord());
		if(user!=null) {
			if (user.getBanned()==null) {
				user.setBanned("T");
			}
			if (user.getBanned().equals("F")) {
				// initialize session here
				HttpSession session=request.getSession();  
				session.setAttribute("userName",user.getUserName());  
				return user;
			}else {
				// still return user to program, but no session is created because user is banned
				return user;
			}
		}
		return null;
	}
	
	@DeleteMapping("/login")
	public void logout(HttpServletRequest request,  HttpServletResponse response) {
		 HttpSession session=request.getSession(false);  
		 session.invalidate();
	}
	
	@PostMapping("/register")
	public Users addUsers(@RequestBody Users user) {
		return service.addUsers(user);
	}
	
	@GetMapping("/register/{username}")
	public Boolean usernameIsAvailable(@PathVariable("username") String username) {
		return (Boolean)(service.getUsersByUserName(username)==null);
	}
	
	@GetMapping("/reject")
	public void rejectThis() {
		System.out.println("this should have been rejected!!!");
	}
	
}
