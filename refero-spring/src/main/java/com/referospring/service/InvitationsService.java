package com.referospring.service;

import java.util.List;


import com.referospring.model.Invitations;
import com.referospring.model.Users;


public interface InvitationsService {
	public void postNewInvitation( Invitations invitation );
	public List < Invitations > getPendingInvitations( Users users );
	public Integer updateInvitationStatus( Invitations invitation );
}
