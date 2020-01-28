package com.referospring.repository;

import java.util.List;

import com.referospring.model.ListItems;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ListItemRepository extends JpaRepository<ListItems, Integer> {

    public List<ListItems> findByListId(int listId);

}