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
public class ListItems implements Serializable{

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int itemId;
	
	@ManyToOne
	@JoinColumn(name = "list", nullable = false)
	private Lists list;
	
	@Column(length=100, nullable = false)
	private String listItem;
	@Column(length=20, nullable = false)
	private String status;
	
	@ManyToOne
	@JoinColumn(name = "creator", nullable = false)
	private Users creator;
	
	
	public ListItems(Lists list, String listItem, String status, int orderId, Users creator, int priority) {
		super();
		this.list= list;
		this.listItem = listItem;
		this.status = status;
		this.creator = creator;
	}

	public int getItemId() {
		return itemId;
	}

	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

	public Lists getList() {
		return list;
	}

	public void setList(Lists list) {
		this.list = list;
	}

	public String getListItem() {
		return listItem;
	}

	public void setListItem(String listItem) {
		this.listItem = listItem;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Users getCreator() {
		return creator;
	}

	public void setCreator(Users creator) {
		this.creator = creator;
	}

	@Override
	public String toString() {
		return "ListItems [itemId=" + itemId + ", list=" + list + ", listItem=" + listItem + ", status=" + status
				+ ", creator=" + creator + "]";
	}

}
