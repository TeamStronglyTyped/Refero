package com.referospring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.referospring.model.Users;
import com.referospring.service.AdminService;
import com.referospring.service.ListsService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController  {

	@Autowired
	private AdminService adminService;
	
	@GetMapping("/get-all-users")
	public List<Users> getAllUsers(){
		return adminService.getAllUsers();
	}
	@GetMapping("/get-banned-users")
	public List<Users> getBannedUsers(){
		return adminService.getBannedUsers();
	}
	@PutMapping("/bann-user")
	public Users bannUser(@RequestBody Users user) {
		return adminService.bannUser(user);
	}
	@PutMapping("/restore-user")
	public Users restoreUser(@RequestBody Users user) {
		return adminService.restore(user);
	}
}
