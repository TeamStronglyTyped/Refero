package com.referospring.repository;

import com.referospring.model.Groups;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface GroupsRepository extends JpaRepository<Groups, Integer> {
    Groups findByGroupId(Integer groupId);
    
    @Modifying
    @Query(value="INSERT INTO USERS_GROUPS (USERNAME, GROUPID) VALUES(:username, :groupid)", nativeQuery = true)
    @Transactional
	void addUserToGroup(@Param("username") String username, @Param("groupid") Integer groupId);

    @Query(value = "SELECT GROUPID FROM USERS_GROUPS WHERE USERNAME = ?1", nativeQuery = true)
    List<String> getGroupsForUser(String username);

    @Query(value = "SELECT GROUP_NAME FROM GROUPS WHERE GROUP_ID = ?1", nativeQuery = true)
    String getGroupsName(String groupIds);
    
    @Query(value = "SELECT USERNAME FROM USERS_GROUPS WHERE GROUPID = ?1", nativeQuery = true)
	List<String> getUsersForGroupId(String groupId);

//    @Query(value="SELECT * FROM USER_GROUPS", nativeQuery = true)
//	public List<Groups> getAllGroupsByUsername(String username);
}
