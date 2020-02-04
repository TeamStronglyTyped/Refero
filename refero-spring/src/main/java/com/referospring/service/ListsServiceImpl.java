package com.referospring.service;

import java.util.List;

import com.referospring.model.ListItems;
import com.referospring.model.Lists;
import com.referospring.repository.ListRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListsServiceImpl implements ListsService {

    @Autowired
    private ListRepository listRepository;

    @Override
    public List<Lists> getAllLists() {
        return listRepository.findAll();
    }

    @Override
    public void postNewList(Lists list) {
        if (notNullList(list) && validList(list)) {
            listRepository.save(list);
        }
    }

    @Override
    public void deletList(int id) {
        listRepository.deleteById(id);

    }

    @Override
    public boolean notNullList(Lists list) {
        if (list.getListName() == null || list.getGroup() == null || list.getOwner() == null) {
            return false;
        }
        return true;
    }

    @Override
    public boolean validList(Lists list) {
        if (list.getListName() == "" || list.getGroup().getGroupId() < 0 || list.getOwner().getUserName() == "") {
            return false;
        }
        return true;
    }

    @Override
    public List<Lists> getListsInGroup(String groupId) {
        return listRepository.getListsInGroup(groupId);
    }

    @Override
    public Integer getGroupIdForUserGroup(String userName, String groupName) {
        System.out.println(listRepository.getGroupIdForUserGroup(userName, groupName));
        return listRepository.getGroupIdForUserGroup(userName, groupName);
    }

    @Override
    public List<Lists> getListsInGroupName(String groupName, String owner) {
        return listRepository.getListsInGroupName(groupName, owner);
    }

    @Override
    public List<Lists> getListsInGroupName2(String groupName) {
        return listRepository.getListsInGroupName2(groupName);
    }

    @Override
    public List<ListItems> getListItemsByListName(String listName) {
        return listRepository.getListItemsByListName(listName);
    }

}