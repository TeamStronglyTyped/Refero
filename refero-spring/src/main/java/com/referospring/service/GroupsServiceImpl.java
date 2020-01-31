package com.referospring.service;

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

//	@Override
//	public List<Groups> getAllGroupsByUsername(String username) {
//		
//		return groupsRepository.getAllGroupsByUsername( username );
//	}

}