package com.referospring.service;

import java.util.List;

import com.referospring.model.Lists;
import com.referospring.repository.AdminRepository;
import com.referospring.repository.ListRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListsServiceImpl implements ListsService {

    @Autowired
    private ListRepository listRepository;
    private AdminRepository admin;

    @Override
    public List<Lists> getAllLists() {
        return listRepository.findAll();
    }

    @Override
    public void postNewList(Lists list) {
        System.out.println(list.toString());
        listRepository.save(list);
    }

	@Override
	public void deletList(int id) {
		 listRepository.deleteById(id);
		
	}

}