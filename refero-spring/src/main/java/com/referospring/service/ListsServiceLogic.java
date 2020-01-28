package com.referospring.service;

import java.util.List;

import com.referospring.model.Lists;
import com.referospring.repository.ListRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListsServiceLogic implements ListsService {

    @Autowired
    private ListRepository listRepository;

    @Override
    public List<Lists> getAllLists() {
        return listRepository.findAll();
    }

    @Override
    public void postNewList(Lists list) {
        listRepository.save(list);
    }

}