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
    public List<Lists> getListsInGroupName(String groupName);
    public List<ListItems> getListItemsByListName(String listName);
}