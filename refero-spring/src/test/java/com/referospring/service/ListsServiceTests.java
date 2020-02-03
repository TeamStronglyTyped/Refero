package com.referospring.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.referospring.model.Groups;
import com.referospring.model.Lists;
import com.referospring.model.Users;

import org.junit.Test;

public class ListsServiceTests {

    private ListsService listsService = new ListsServiceImpl();
    private Groups testGroup;
    private Lists testList;
    private Users testUser;

    @Test
    public void testPostingNullList() {
        testList = new Lists();
        assertEquals(false, listsService.validList(testList));
    }

    @Test
    public void testPostingNotNullList() {
        testGroup = new Groups();
        testGroup.setGroupId(0);
        testUser = new Users();
        testUser.setUserName("userName");
        testList = new Lists(0, "listName", testGroup, testUser);
        assertEquals(true, listsService.validList(testList));
    }

    @Test
    public void testPostingInvalidList() {
        testList = new Lists(0, "", new Groups(), new Users());
        assertEquals(false, listsService.validList(testList));
    }

    @Test
    public void testPostingValidList() {
        testGroup = new Groups();
        testGroup.setGroupId(0);
        testUser = new Users();
        testUser.setUserName("userName");
        testList = new Lists(0, "listName", testGroup, testUser);
        assertEquals(true, listsService.validList(testList));
    }

}