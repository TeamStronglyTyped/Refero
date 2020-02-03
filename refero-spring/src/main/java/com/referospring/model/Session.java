package com.referospring.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Sessions")
public class Session implements Serializable{
	@Id
	@Column(length=30, nullable=false)
	private String userName;
	@Column(length=30, nullable=false)
	private String sessionId;
	@Column(length=30, nullable=false)
	private String securityToken;
	
	public Session() {	
	}
	
	public Session(String userName, String sessionId, String securityToken) {
		super();
		this.userName = userName;
		this.sessionId = sessionId;
		this.securityToken = securityToken;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getSessionId() {
		return sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}

	public String getSecurityToken() {
		return securityToken;
	}

	public void setSecurityToken(String securityToken) {
		this.securityToken = securityToken;
	}

	@Override
	public String toString() {
		return "Session [userName=" + userName + ", sessionId=" + sessionId + ", securityToken=" + securityToken + "]";
	}
	
	
}
