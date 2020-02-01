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

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table
public class Lists implements Serializable{

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int listId;
	
	@Column(length=50)
	private String listName;
	
	@ManyToOne(targetEntity = Groups.class)
	@JoinColumn(name = "inGroup", nullable = false)
	private Groups inGroup;
	
	@ManyToOne
	@JoinColumn(name = "owner", nullable = false)
	private Users owner;
	
	@JsonIgnore
	@OneToMany(fetch = FetchType.LAZY,mappedBy = "list")
	private List<ListItems> listOfListItems=new ArrayList<>();
	
	public Lists() {
		this.listId = 0;
		this.listName = "";
		this.inGroup = null;
		this.owner = null;
	}

	public Lists(Integer listId, String listName, Groups inGroup, Users owner) {
		this.listId = listId;
		this.listName = listName;
		this.inGroup = inGroup;
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
		return inGroup;
	}

	public void setGroup(Groups inGroup) {
		this.inGroup = inGroup;
	}

	public Users getOwner() {
		return owner;
	}
	

	@Override
	public String toString() {
		return "Lists [listId=" + listId + ", listName=" + listName + ", inGroup=" + inGroup + ", owner=" + owner + "]";
	}
	
}