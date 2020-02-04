package com.referospring.service;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.referospring.model.Users;
import com.referospring.repository.UsersRepository;

@Service
public class UsersServiceImpl implements UsersService {
	@Autowired
	UsersRepository usersDao;
	
	public static final Pattern VALID_EMAIL_ADDRESS_REGEX = 
		    Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);

	
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
		if(validateUsername(user.getUserName()) &&
			validatePassword(user.getPassWord()) &&
			validateEmail(user.getEmail()) &&
			validateBanned(user.getBanned())) {
			
			return usersDao.save(user);
		}else {
			return new Users();
		}
		
	}

	@Override
	public Users updateUsers(Users user) {
		return addUsers(user);
	}
	
	public boolean validateUsername(String username) {
		String regExp="^[A-Za-z0-9]{6,30}$";
		return Pattern.matches(regExp, username);
	}
	
	public boolean validatePassword(String password) {
		String regExp="^(?=.*[A-Za-z])(?=.*[0-9]{2,})(?=.*[~!@#$%^&*])[A-Za-z0-9~!@#$%^&*]{8,40}$";
		return Pattern.matches(regExp, password);
	}
	
	public boolean validateEmail(String email) {
	    Matcher matcher = VALID_EMAIL_ADDRESS_REGEX .matcher(email);
	    return matcher.find();
	}
	
	public boolean validateBanned(String banned) {
		if (banned.equals("T") || banned.equals("F")) {
			return true;
		}else {
			return false;
		}
	}
	
	

}
