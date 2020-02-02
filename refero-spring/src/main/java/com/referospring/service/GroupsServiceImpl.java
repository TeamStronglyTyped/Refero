package com.referospring.service;

import java.util.LinkedList;
import java.util.List;

import com.referospring.model.Groups;
import com.referospring.repository.GroupsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GroupsServiceImpl implements GroupsService {

    @Autowired
    private GroupsRepository groupsRepository;

    @Override
    public List<Groups> getAllGroups() {
        return groupsRepository.findAll();
    }

    @Override
    public Groups postNewGroup(Groups group) {
        return groupsRepository.save(group);
    }

    @Override
    public Groups getGroupsById(Integer groupId){
        return groupsRepository.findByGroupId(groupId);
    }

	@Override
	public void addUserToGroup(String username, Integer groupId) {
		groupsRepository.addUserToGroup( username, groupId );
		
	}

    @Override
    public String[] getGroupsForUser(String username) {
        return groupsRepository.getGroupsForUser(username);
    }

    @Override
    public List<String> getGroupsNames(List<String> groupIds) {
        List<String> groupNames = new LinkedList<String>();

        for(String groupId : groupIds) {
            groupNames.add(groupsRepository.getGroupsName(groupId));
        }

        return groupNames;
    }

//	@Override
//	public List<Groups> getAllGroupsByUsername(String username) {
//		
//		return groupsRepository.getAllGroupsByUsername( username );
//	}

}