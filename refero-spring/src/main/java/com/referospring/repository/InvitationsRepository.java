package com.referospring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.referospring.model.Invitations;
import com.referospring.model.Users;

import java.util.List;

@Repository
public interface InvitationsRepository extends JpaRepository < Invitations, Integer >{
	
	@Query(value="SELECT * FROM Invitations WHERE username_to = ?1 and status =?2", nativeQuery = true)
	public List < Invitations > getPendingInvitations( Users user, String status );
	@Modifying
	@Query( value = "UPDATE invitations set status = :status where invitation_id = :invitationId", nativeQuery = true )
	@Transactional
	public Integer updateInvitationStatus( @Param( "status" ) String status, @Param( "invitationId" ) Integer invitationId );	
}
