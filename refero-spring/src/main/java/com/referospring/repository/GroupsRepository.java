package com.referospring.repository;

import com.referospring.model.Groups;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupsRepository extends JpaRepository<Groups, Integer> {
}
