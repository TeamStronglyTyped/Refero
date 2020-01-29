package com.referospring.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table
public class Invitations implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int invitationId;
	
	@ManyToOne
	@JoinColumn(name="usernameFrom", nullable = false)
	private Users fromUser;

	@ManyToOne
	@JoinColumn(name="usernameTo", nullable = false)
	private Users toUser;
	
	@Column(nullable=false)
	private String status;
	
	@ManyToOne
	@JoinColumn(name = "groupId", nullable = false)
	private Groups groupId;
	
	public Invitations() {
		
	}

	public int getInvitationId() {
		return invitationId;
	}

	public void setInvitationId(int invitationId) {
		this.invitationId = invitationId;
	}

	public Users getFromUser() {
		return fromUser;
	}

	public void setFromUser(Users fromUser) {
		this.fromUser = fromUser;
	}

	public Users getToUser() {
		return toUser;
	}

	public void setToUser(Users toUser) {
		this.toUser = toUser;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Groups getGroupId() {
		return groupId;
	}

	public void setGroupId(Groups groupId) {
		this.groupId = groupId;
	}

	@Override
	public String toString() {
		return "Invitations [invitationId=" + invitationId + ", fromUser=" + fromUser + ", toUser=" + toUser
				+ ", status=" + status + ", groupId=" + groupId + "]";
	};
	
	
	
	

}
