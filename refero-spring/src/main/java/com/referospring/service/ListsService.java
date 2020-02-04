package com.referospring.service;

import java.util.List;

import com.referospring.model.ListItems;
import com.referospring.model.Lists;

public interface ListsService {

    public List<Lists> getAllLists();
    public void postNewList(Lists list);
    public void deletList(int id);
    public boolean notNullList(Lists list);
    public boolean validList(Lists list);
    public List<Lists> getListsInGroup(String groupId);
    public Integer getGroupIdForUserGroup(String userName, String groupName);
    public List<Lists> getListsInGroupName(String groupName, String owner);
    public List<Lists> getListsInGroupName2(String groupName);
    public List<String> getListItemsByListName(String listName);
    public void deleteListByName(String listName);
    public void deleteListByNameAndOwner(String listName, String owner);
    public ListItems postNewListItems(ListItems listItems);
    public Integer getListIdByNameAndOwner(String listName, String owner);
}