package com.referospring.repository;

import javax.transaction.Transactional;

import com.referospring.model.ListItems;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ListItemsRepository extends JpaRepository<ListItems, Integer> {

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM LIST_ITEMS WHERE LIST = ?", nativeQuery = true)
    public void deleteByList(Integer list);

}
