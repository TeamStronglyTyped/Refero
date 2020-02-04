package com.referospring.service;

import java.util.List;

import com.referospring.model.Users;

public interface UsersService {

	public List<Users> getAllUsers();
	public Users getUsersByUserName(String username);
	public Users getUsersByUserNameAndPassWord(String username, String password);
	public Users getUsersByEmail(String email);
	public Users addUsers(Users user);
	public Users updateUsers(Users user);
	
}
