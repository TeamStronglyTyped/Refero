package com.referospring.service;

import java.util.List;


import com.referospring.model.Groups;;

public interface GroupsService {
    
    public List<Groups> getAllGroups();
    public Groups postNewGroup(Groups group);
    public Groups getGroupsById(Integer groupId);
    public void addUserToGroup( String username, Integer groupId );
    public List<String> getGroupsForUser(String username);
	
}