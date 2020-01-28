package com.referospring.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class ListItems implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private int itemId;
	
	@ManyToOne
	@JoinColumn(name = "list_id", nullable = false)
	private Lists list;
	
	@Column(length=100)
	private String listItem;
	@Column(length=20)
	private String status;
	private int orderId;
	
	@ManyToOne
	@JoinColumn(name = "creator", nullable = false)
	private Users creator;
	
	private int priority;
	
	
	public ListItems(Lists list, String listItem, String status, int orderId, Users creator, int priority) {
		super();
		this.list = list;
		this.listItem = listItem;
		this.status = status;
		this.orderId = orderId;
		this.creator = creator;
		this.priority = priority;
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

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}

	

	public Users getCreator() {
		return creator;
	}

	public void setCreator(Users creator) {
		this.creator = creator;
	}

	public int getPriority() {
		return priority;
	}

	public void setPriority(int priority) {
		this.priority = priority;
	}

	@Override
	public String toString() {
		return "ListItems [itemId=" + itemId + ", list=" + list + ", listItem=" + listItem + ", status=" + status
				+ ", orderId=" + orderId + ", creator=" + creator + ", priority=" + priority + "]";
	}

	

	

}
