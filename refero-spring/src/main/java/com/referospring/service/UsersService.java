package com.referospring.service;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.referospring.model.Users;

public interface UsersService {

	public List<Users> getAllUsers();
	public Users getUsersByUserName(String username);
	public Users getUsersByUserNameAndPassWord(String username, String password);
	public Users getUsersByEmail(String email);
	public Users addUsers(Users user);
	public Users updateUsers(Users user);
	
	public boolean validateUsername(String username);	
	public boolean validatePassword(String password);
	public boolean validateEmail(String email);
	public boolean validateBanned(String banned);
	
	
}
