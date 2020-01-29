package com.referospring.repository;

import java.util.List;

import com.referospring.model.ListItems;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ListItemRepository extends JpaRepository<ListItems, Integer> {

    @Query(value="SELECT * FROM ListItems WHERE listId = ?1", nativeQuery = true)
    public List<ListItems> getListItems(Integer listId);

}