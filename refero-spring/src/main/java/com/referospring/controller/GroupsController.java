	package com.referospring.controller;

import java.util.List;

import com.referospring.model.Groups;
import com.referospring.model.Invitations;
import com.referospring.model.Users;
import com.referospring.service.GroupsService;
import com.referospring.service.InvitationsService;

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
    
    @Autowired
    private InvitationsService invitationsService;

    @GetMapping("/get-all-groups")
    public List<Groups> getAllGroups() {
        return groupsService.getAllGroups(); 
    }

    @PostMapping(value="/post-new-group")
    public Groups postNewGroup(@RequestBody Groups group) {
        return groupsService.postNewGroup(group);
    }
    
    @PostMapping(value="/post-new-invitation")
    public void postNewInvitation(@RequestBody Invitations invitation) {
    	invitationsService.postNewInvitation( invitation );
    }
    
    @GetMapping("/get-pending-invitations/{user}")
    public List < Invitations > getPendingInvitations( @PathVariable Users user ) {
    	return invitationsService.getPendingInvitations( user );
    }

    @GetMapping("/get-group/{groupId}")
    public Groups getGroupsById(@PathVariable("groupId") Integer groupId)
    {
        return groupsService.getGroupsById(groupId);
    }
    
    @GetMapping("/add-user-to-group/{username}/{groupId}")
    public void addUserToGroup( @PathVariable("username")String username, @PathVariable("groupId") Integer groupId ) {
    	groupsService.addUserToGroup( username, groupId );
    }
    
}