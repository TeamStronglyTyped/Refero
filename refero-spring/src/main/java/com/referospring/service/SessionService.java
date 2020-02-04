package com.referospring.service;

import com.referospring.model.Session;

public interface SessionService {

	public Session createSession(Session session);
	public void deleteSession(String userName);
	public void deleteSession(Session session);
	public Session getSession(String sessionId, String securityKey);
	public String newToken();
}
