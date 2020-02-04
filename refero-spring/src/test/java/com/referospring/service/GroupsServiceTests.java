package com.referospring.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.referospring.model.Groups;

import org.junit.Test;

public class GroupsServiceTests {
	
	private GroupsService groupsService = new GroupsServiceImpl();
	private Groups group;
	@Test
	public void testPostingNullGroupName() {
		group = new Groups();
		group.setGroupId( 100 );
		assertEquals( false, groupsService.hasGroupName( group ) );
	}

}
