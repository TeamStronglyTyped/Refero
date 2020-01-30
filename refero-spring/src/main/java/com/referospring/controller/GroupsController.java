package com.referospring.controller;

import java.util.List;

import com.referospring.model.Groups;
import com.referospring.service.GroupsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GroupsController {

    @Autowired
    private GroupsService groupsService;

    @GetMapping("/get-all-groups")
    public List<Groups> getAllGroups() {
        return groupsService.getAllGroups(); 
    }

    @PostMapping(value="/post-new-group")
    public void postNewList(@RequestBody Groups group) {
        groupsService.postNewGroup(group);
    }

    @GetMapping("/get-group/{groupId}")
    public Groups getGroupsById(@PathVariable("groupId") Integer groupId)
    {
        return groupsService.getGroupsById(groupId);
    }

}