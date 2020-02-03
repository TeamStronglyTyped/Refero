package com.referospring.service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.referospring.model.Session;
import com.referospring.repository.SessionRepository;

@Service
public class SessionServiceImpl implements SessionService {
	@Autowired
	SessionRepository sessionDao;
	
	@Override
	public Session createSession(Session session) {
		Session sess = sessionDao.findByUserName(session.getUserName());
		System.out.println("session returned when checked ="+sess);
		if (sess!=null) {
			System.out.println("sess not null so delete it");
			sessionDao.delete(sess);
			System.out.println("after delete operation");
		}
		return sessionDao.save(session);
	}

	@Override
	public void deleteSession(String userName) {
		sessionDao.deleteByUserName(userName);
	}

	@Override
	public void deleteSession(Session session) {
		sessionDao.delete(session);
	}

	@Override
	public Session getSession(String sessionId, String securityKey) {
		// TODO Auto-generated method stub
		return sessionDao.findBySessionIdAndSecurityToken(sessionId, securityKey);
	}
	
	public String newToken() {
		return "testSecirityToken";
	}

	
	
}
