package com.referospring.controller;

import java.util.List;

import com.referospring.model.ListItems;
import com.referospring.model.Lists;
import com.referospring.service.ListItemsService;
import com.referospring.service.ListsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ListController {

    @Autowired
    private ListsService listService;

    @Autowired
    private ListItemsService listItemsService;

    @GetMapping("/get-my-lists")
    public List<Lists> getAllLists() {
        return listService.getAllLists(); 
    }

    @GetMapping("/get-list-items/{list}")
    public List<ListItems> getListItems(@PathVariable int listId) {
        return listItemsService.getListItems(listId);
    }

}