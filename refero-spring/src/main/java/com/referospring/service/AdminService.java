package com.referospring.service;

import java.util.List;

import com.referospring.model.Users;

public interface AdminService {
	public List<Users> getAllUsers();
	public List<Users> getBannedUsers();
	public Users bannUser(Users user);
	public Users restore(Users user);

}
