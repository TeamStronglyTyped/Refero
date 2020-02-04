package com.referospring.repository;

import java.util.List;

import com.referospring.model.ListItems;
import com.referospring.model.Lists;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ListRepository extends JpaRepository<Lists, Integer> {

    @Query(value = "SELECT * FROM LISTS WHERE GROUP_ID = ?1", nativeQuery = true)
    public List<Lists> getListsInGroup(String groupId);

    @Query(value = "SELECT GROUPID FROM USERS_GROUPS JOIN GROUPS ON GROUPID = GROUP_ID WHERE USERNAME = ? AND GROUP_NAME = ?", nativeQuery = true)
    public Integer getGroupIdForUserGroup(String userName, String groupName);

    @Query(value = "SELECT * FROM LISTS JOIN GROUPS ON LISTS.GROUP_ID = GROUPS.GROUP_ID WHERE GROUPS.GROUP_NAME = ? AND OWNER = ?", nativeQuery = true)
    public List<Lists> getListsInGroupName(String groupName, String owner);

    @Query(value = "SELECT * FROM LIST_ITEMS JOIN LISTS ON LIST = LIST_ID WHERE LIST_NAME = ?", nativeQuery = true)
    public List<ListItems> getListItemsByListName(String listName);

    @Query(value = "SELECT * FROM LISTS JOIN GROUPS ON LISTS.GROUP_ID = GROUPS.GROUP_ID WHERE GROUPS.GROUP_NAME = ?", nativeQuery = true)
    public List<Lists> getListsInGroupName2(String groupName);

    // @Query(value = "SELECT GROUP_ID FROM GROUPS WHERE GROUP_NAME = ?1", nativeQuery = true)
    // public String getGroupIdFor(String groupName);

}
