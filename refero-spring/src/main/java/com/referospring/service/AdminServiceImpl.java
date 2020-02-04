package com.referospring.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.referospring.model.Users;
import com.referospring.repository.AdminRepository;


@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	AdminRepository adminRepository;
	

	@Override
	public List<Users> getAllUsers() {
		return adminRepository.findAll();
	}

	@Override
	public List<Users> getBannedUsers() {
		String banned = "T";
		return adminRepository.findByBanned(banned);
	}

	@Override
	public Users bannUser(Users user) {
		return adminRepository.save(user);
	}

	@Override
	public Users restore(Users user) {
		return adminRepository.save(user);
	}

}
