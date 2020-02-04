package com.referospring.controller;

import java.util.List;

import com.referospring.model.ListItems;
import com.referospring.model.Lists;
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
@CrossOrigin
public class ListController {

    @Autowired
    private ListsService listsService;

    @GetMapping("/get-all-lists")
    public List<Lists> getAllLists() {
        return listsService.getAllLists();
    }

    @PostMapping(value="/post-new-list")
    public void postNewList(@RequestBody Lists list) {
        listsService.postNewList(list);
    }
    
    @DeleteMapping("delete-list/{id}")
    public void deleteList(@PathVariable("id") int id) {
    	listsService.deletList(id);
    }

    @GetMapping("get-lists-in-group/{groupId}")
    public List<Lists> getListsInGroup(@PathVariable("groupId") String groupId) {
        return listsService.getListsInGroup(groupId);
    }

    @GetMapping("get-lists-in-group-name/{groupName}/{owner}")
    public List<Lists> getListsInGroupName(@PathVariable("groupName") String groupName, @PathVariable("owner") String owner) {
        return listsService.getListsInGroupName(groupName, owner);
    }

    @GetMapping("get-lists-in-group-name2/{groupName}")
    public List<Lists> getListsInGroupName2(@PathVariable("groupName") String groupName) {
        return listsService.getListsInGroupName2(groupName);
    }

    @GetMapping("get-groupid-for-user-group/{userName}/{groupName}")
    public Integer getGroupIdForUserGroup(@PathVariable("userName") String userName, @PathVariable("groupName") String groupName) {
        return listsService.getGroupIdForUserGroup(userName, groupName);
    }

    @GetMapping("/get-list-items-by-list-name/{listName}")
    public List<String> getListItemsByListName(@PathVariable("listName") String listName) {
        return listsService.getListItemsByListName(listName);
    }

    @DeleteMapping("/delete-list-by-name/{listName}")
    public void deleteListByName(@PathVariable("listName") String listName) {
        listsService.deleteListByName(listName);
    }

    @DeleteMapping("/delete-list-by-name-and-owner/{listName}/{owner}")
    public void deleteListByNameAndOwner(@PathVariable("listName") String listName, @PathVariable("owner") String owner) {
        listsService.deleteListByNameAndOwner(listName, owner);
    }

    @PostMapping("/post-new-list-item")
    public ListItems postNewListItems(@RequestBody ListItems listItems) {
        return listsService.postNewListItems(listItems);
    }

    @GetMapping("get-list-id-by-name-and-owner/{listName}/{owner}")
    public Integer getListIdByNameAndOwner(@PathVariable("listName") String listName, @PathVariable("owner") String owner) {
        return listsService.getListIdByNameAndOwner(listName, owner);
    }
}