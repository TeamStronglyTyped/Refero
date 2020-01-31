package com.referospring.repository;

import com.referospring.model.Groups;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupsRepository extends JpaRepository<Groups, Integer> {
    Groups findByGroupId(Integer groupId);
    
//    @Query(value="SELECT * FROM USER_GROUPS", nativeQuery = true)
//	public List<Groups> getAllGroupsByUsername(String username);
}
