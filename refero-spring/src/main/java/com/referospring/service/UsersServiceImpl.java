package com.referospring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.referospring.model.Users;
import com.referospring.repository.UsersDAO;

@Service
public class UsersServiceImpl implements UsersService {
	@Autowired
	UsersDAO usersDao;
	
	@Override
	public List<Users> getAllUsers() {
		return usersDao.findAll();
	}

	@Override
	public Users getUsersByUserName(String username) {
		return usersDao.findByUserName(username);
	}

	@Override
	public Users getUsersByUserNameAndPassWord(String username, String password) {
		return usersDao.findByUserNameAndPassWord(username, password);
	}

	@Override
	public Users getUsersByEmail(String email) {
		return usersDao.findByEmail(email);
	}

	@Override
	public Users addUsers(Users user) {
		return usersDao.save(user);
	}

}
