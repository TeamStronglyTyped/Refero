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
		
	};
	

}
