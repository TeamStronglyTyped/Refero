package com.referospring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.referospring.model.Invitations;
import com.referospring.model.Users;
import com.referospring.repository.InvitationsRepository;

@Service
public class InvitationsServiceImpl implements InvitationsService {
	
	@Autowired
	private InvitationsRepository invitationsRepository;

	@Override
	public void postNewInvitation( Invitations invitation ) {
		System.out.println( invitation );
		invitationsRepository.save( invitation );	
	}
	
	@Override
	public List < Invitations > getPendingInvitations( Users user ) {
		return invitationsRepository.getPendingInvitations( user, "pending" );
	}

	@Override
	public Integer updateInvitationStatus( Invitations invitation ) {
		System.out.println( invitation );
		return invitationsRepository.updateInvitationStatus( invitation.getStatus(), invitation.getInvitationId() );
	}

}
