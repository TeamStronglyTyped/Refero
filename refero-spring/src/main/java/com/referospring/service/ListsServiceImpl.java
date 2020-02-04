package com.referospring.service;

import java.util.List;

import com.referospring.model.ListItems;
import com.referospring.model.Lists;
import com.referospring.repository.ListItemsRepository;
import com.referospring.repository.ListRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListsServiceImpl implements ListsService {

    @Autowired
    private ListRepository listRepository;

    @Autowired
    private ListItemsRepository listItemsRepository;

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
    public List<String> getListItemsByListName(String listName) {
        return listRepository.getListItemsByListName(listName);
    }

    @Override
    public void deleteListByName(String listName) {
        List<Integer> ids = listRepository.getListIdsByName(listName);
        for (Integer id : ids) {
            listItemsRepository.deleteByList(id);
        }
        listRepository.deleteListByName(listName);
    }

    @Override
    public void deleteListByNameAndOwner(String listName, String owner) {
        Integer id = listRepository.getListIdByNameAndOwner(listName, owner);
        listItemsRepository.deleteByList(id);
        listRepository.deleteListByNameAndOwner(listName, owner);
    }

    @Override
    public ListItems postNewListItems(ListItems listItems) {
        return listItemsRepository.save(listItems);
    }

    @Override
    public Integer getListIdByNameAndOwner(String listName, String owner) {
        return listRepository.getListIdByNameAndOwner(listName, owner);
    }

}