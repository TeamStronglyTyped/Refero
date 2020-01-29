package com.referospring.controller;

import java.util.List;

import com.referospring.model.ListItems;
import com.referospring.model.Lists;
import com.referospring.service.ListItemsService;
import com.referospring.service.ListsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ListController {

    @Autowired
    private ListsService listsService;

    @Autowired
    private ListItemsService listItemsService;

    @GetMapping("/get-all-lists")
    public List<Lists> getAllLists() {
        return listsService.getAllLists(); 
    }

    @GetMapping("/get-list-items/{list}")
    public List<ListItems> getListItems(@PathVariable int listId) {
        return listItemsService.getListItems(listId);
    }

    @PostMapping(value="/post-new-list")
    public void postNewList(@RequestBody Lists list) {
        listsService.postNewList(list);
    }
    
    @DeleteMapping("delete-list/{id}")
    public void deleteList(@PathVariable("id") int id) {
    	listsService.deletList(id);
    }

}