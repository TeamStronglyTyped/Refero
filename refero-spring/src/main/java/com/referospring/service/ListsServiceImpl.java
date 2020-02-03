package com.referospring.service;

import java.util.List;

import com.referospring.model.Groups;
import com.referospring.model.Lists;
import com.referospring.model.Users;
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

}