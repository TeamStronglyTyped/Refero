package com.referospring.service;

import java.util.List;

import com.referospring.model.ListItems;
import com.referospring.repository.ListItemRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListItemsServiceLogic implements ListItemsService {

    @Autowired
    private ListItemRepository listItemRepository;

    @Override
    public List<ListItems> getListItems(int listId) {
        return listItemRepository.getListItems(listId);
    }

}