package com.referospring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.referospring.model.Lists;
import com.referospring.model.Users;

@Repository
public interface AdminRepository extends JpaRepository<Users, String> {

	Users findByBanned(String banned);
	
}
