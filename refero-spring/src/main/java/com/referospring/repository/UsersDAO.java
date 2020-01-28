package com.referospring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.referospring.model.Users;

@Repository
public interface UsersDAO extends JpaRepository<Users, String>{

	Users findByUserName(String username);
	Users findByUserNameAndPassWord(String username, String password);
	Users findByEmail(String email);
	
}
