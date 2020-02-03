package com.referospring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.referospring.model.Session;
import com.referospring.model.Users;

@Repository
public interface SessionRepository extends JpaRepository<Session, String> {

	Session findBySessionIdAndSecurityToken(String sessionID, String securityToken);
	void deleteByUserName(String userName);
	Session findByUserName(String userName);
}
