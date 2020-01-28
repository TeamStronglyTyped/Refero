package com.referospring.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table
public class Users implements Serializable{
	@Id
	@Column(length=30, nullable=false)
	private String userName;
	@Column(length=40, nullable=false)
	private String passWord;
	@Column(length=60, nullable=false)
	private String email;
	@Column(length=1)
	private String banned;
	
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "creator")
	private List<ListItems> listOfListItems=new ArrayList<>();
	
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "owner")
	private List<Lists> listListsOwned=new ArrayList<>();
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "USERS_GROUPS", joinColumns = { @JoinColumn(name = "USERNAME") }, inverseJoinColumns = { @JoinColumn(name = "GROUPID") })
	private List<Groups> listGroups=new ArrayList<>();

	public Users()
	{
		this.userName="";
		this.passWord="";
		this.email="";
		this.banned="";
	}
	
	public Users(String userName, String passWord, String email, String banned) {
		super();
		this.userName = userName;
		this.passWord = passWord;
		this.email = email;
		this.banned = banned;
		
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassWord() {
		return passWord;
	}

	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBanned() {
		return banned;
	}

	public void setBanned(String banned) {
		this.banned = banned;
	}

	public List<ListItems> getListOfListItems() {
		return listOfListItems;
	}

	public void setListOfListItems(List<ListItems> listOfListItems) {
		this.listOfListItems = listOfListItems;
	}

	public List<Lists> getListListsOwned() {
		return listListsOwned;
	}

	public void setListListsOwned(List<Lists> listListsOwned) {
		this.listListsOwned = listListsOwned;
	}

	public List<Groups> getListGroups() {
		return listGroups;
	}

	public void setListGroups(List<Groups> listGroups) {
		this.listGroups = listGroups;
	}

	@Override
	public String toString() {
		return "Users [userName=" + userName + ", passWord=" + passWord + ", email=" + email + ", banned=" + banned
				+ ", listOfListItems=" + listOfListItems + ", listListsOwned=" + listListsOwned + ", listGroups="
				+ listGroups + "]";
	}
	
	
	
	

}
