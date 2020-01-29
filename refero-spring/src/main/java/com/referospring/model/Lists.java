package com.referospring.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table
public class Lists implements Serializable{

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int listId;
	
	@Column(length=50)
	private String listName;
	
	@ManyToOne
	@JoinColumn(name = "groupId", nullable = false)
	private Groups groupId;
	
	@ManyToOne
	@JoinColumn(name = "owner", nullable = false)
	private Users owner;
	
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "list")
	private List<ListItems> listOfListItems=new ArrayList<>();
	
	public Lists() {
		this.listId = 0;
		this.listName = "";
		this.groupId = null;
		this.owner = null;
	}

	public Lists(Integer listId, String listName, Groups groupId, Users owner) {
		this.listId = listId;
		this.listName = listName;
		this.groupId = groupId;
		this.owner = owner;
	}
	
	public List<ListItems> getListOfListItems() {
		return listOfListItems;
	}

	public void setListOfListItems(List<ListItems> listOfListItems) {
		this.listOfListItems = listOfListItems;
	}

	public void setOwner(Users owner) {
		this.owner = owner;
	}

	public int getListId() {
		return listId;
	}
	public void setListId(int listId) {
		this.listId = listId;
	}
	public String getListName() {
		return listName;
	}
	public void setListName(String listName) {
		this.listName = listName;
	}
	
	public Groups getGroup() {
		return groupId;
	}

	public void setGroup(Groups groupId) {
		this.groupId = groupId;
	}

	public Users getOwner() {
		return owner;
	}
	

	@Override
	public String toString() {
		return "Lists [listId=" + listId + ", listName=" + listName + ", group=" + groupId + ", owner=" + owner + "]";
	}
	
}