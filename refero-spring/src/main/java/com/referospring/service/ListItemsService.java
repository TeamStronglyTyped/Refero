package com.referospring.service;

import java.util.List;

import com.referospring.model.ListItems;

public interface ListItemsService {
    
    public List<ListItems> getListItems(int listId);

}