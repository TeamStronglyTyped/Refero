package com.referospring.service;

import java.util.List;

import com.referospring.model.Lists;

public interface ListsService {

    public List<Lists> getAllLists();
    public void postNewList(Lists list);
    public void deletList(int id);
    public boolean notNullList(Lists list);
    public boolean validList(Lists list);
    public List<Lists> getListsInGroup(String groupId);
}