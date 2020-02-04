package com.referospring.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.referospring.model.Invitations;
import com.referospring.model.Groups;
import com.referospring.model.Users;

import org.junit.Test;

public class InvitationsServiceTests {
	private InvitationsService invitationsService;
	private Invitations invitation;
	private Users fromUser;
	private Users toUser;
	private Groups group;
	
	@Test
	public void testCompleteInvitation() {
		invitationsService = new InvitationsServiceImpl();
		group = new Groups();
		invitation = new Invitations();
		fromUser = new Users();
		toUser = new Users();
		group.setGroupId( 100 );
		group.setGroupName( "Fox" );
		fromUser.setUserName( "testFromUser" );
		toUser.setUserName( "testToUser" );		
		invitation.setFromUser(fromUser);	
		invitation.setToUser( toUser );
		invitation.setGroupId( group );
		invitation.setStatus( "pending" );	
		assertEquals( true, invitationsService.isValidInvitation( invitation ) );
	}
	
	@Test
	public void testInvitationNoToUser() {
		invitationsService = new InvitationsServiceImpl();
		group = new Groups();
		invitation = new Invitations();
		fromUser = new Users();		
		group.setGroupId( 100 );
		group.setGroupName( "Fox" );
		fromUser.setUserName( "testFromUser" );			
		invitation.setFromUser(fromUser);
		invitation.setGroupId( group );
		invitation.setStatus( "pending" );	
		assertEquals( false, invitationsService.isValidInvitation( invitation ) );
	}
	
	@Test
	public void testInvitationNoStatus() {
		invitationsService = new InvitationsServiceImpl();
		group = new Groups();
		invitation = new Invitations();
		fromUser = new Users();		
		group.setGroupId( 100 );
		group.setGroupName( "Fox" );
		fromUser.setUserName( "testFromUser" );			
		invitation.setFromUser(fromUser);
		invitation.setGroupId( group );
		assertEquals( false, invitationsService.isValidInvitation( invitation ) );
	}
	
	@Test
	public void testInvitationHasNoFromUser() {
		invitationsService = new InvitationsServiceImpl();
		group = new Groups();
		invitation = new Invitations();
		toUser = new Users();
		group.setGroupId( 100 );
		group.setGroupName( "Fox" );
		toUser.setUserName( "testToUser" );		
		invitation.setFromUser(fromUser);	
		invitation.setToUser( toUser );
		invitation.setGroupId( group );
		invitation.setStatus( "pending" );	
		assertEquals( false, invitationsService.isValidInvitation( invitation ) );
	}
}
