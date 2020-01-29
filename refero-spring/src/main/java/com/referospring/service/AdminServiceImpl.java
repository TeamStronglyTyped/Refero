package com.referospring.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.referospring.model.Users;
import com.referospring.repository.AdminRepository;
import com.referospring.repository.ListRepository;

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	AdminRepository adminRepository;
	ListRepository lists;

	@Override
	public List<Users> getAllUsers() {
		return adminRepository.findAll();
	}

	@Override
	public List<Users> getBannedUsers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Users bannUser(Users user) {
		// TODO Auto-generated method stub
		return null;
	}

}
