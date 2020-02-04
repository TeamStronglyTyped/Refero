package com.referospring.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.Test;

import com.referospring.model.Lists;

public class UsersServiceTests {

	private UsersService usersService = new UsersServiceImpl();
	
	@Test
    public void testUserNameTooShort() {
        assertEquals(false, usersService.validateUsername("abcde"));
    }
	
	@Test
    public void testUserNameTooLong() {
        assertEquals(false, usersService.validateUsername("abcdefghijklmnopqrstuvwxyz123456"));
    }
	
	@Test
    public void testUserInvalidCharacters() {
        assertEquals(false, usersService.validateUsername("abc!@#$de"));
    }
	
	@Test
    public void testUserGood() {
        assertEquals(true, usersService.validateUsername("abcdefg"));
    }
	
	@Test
    public void testPasswordNoNum() {
        assertEquals(false, usersService.validatePassword("abcdefghi!!"));
    }
	
	@Test
    public void testPasswordNoSpecial() {
        assertEquals(false, usersService.validatePassword("abcdefghi11"));
    }
	
	@Test
    public void testPasswordNoLetter() {
        assertEquals(false, usersService.validatePassword("12345678!!"));
    }
	
	@Test
    public void testPasswordTooShort() {
        assertEquals(false, usersService.validatePassword("acd!!11"));
    }
	
	@Test
    public void testPasswordTooLong() {
        assertEquals(false, usersService.validatePassword("abcdefghijklmnopqrstuvwxyz1234567890!!@@##$$"));
    }
	
	@Test
    public void testPasswordGood1() {
        assertEquals(true, usersService.validatePassword("abcdefghi!!11"));
    }
	
	@Test
    public void testPasswordGood2() {
        assertEquals(true, usersService.validatePassword("a22bcdefghi!!"));
    }
	
	@Test
    public void testEmailNoName() {
        assertEquals(false, usersService.validateEmail("@gmail.com"));
    }
	
	@Test
    public void testEmailNoDomain() {
        assertEquals(false, usersService.validateEmail("beavis@.com"));
    }
	
	@Test
    public void testEmailNoPeriod() {
        assertEquals(false, usersService.validateEmail("beavis@gmailcom"));
    }
	
	@Test
    public void testEmailNoAt() {
        assertEquals(false, usersService.validateEmail("beavisgmail.com"));
    }
	
	@Test
    public void testEmailGood() {
        assertEquals(true, usersService.validateEmail("beavis@gmail.com"));
    }
	
	@Test
    public void testBannedT() {
        assertEquals(true, usersService.validateBanned("T"));
    }
	
	@Test
    public void testBannedF() {
        assertEquals(true, usersService.validateBanned("F"));
    }
	
	@Test
    public void testBannedTLower() {
        assertEquals(false, usersService.validateBanned("t"));
    }
	
	@Test
    public void testBannedFLower() {
        assertEquals(false, usersService.validateBanned("f"));
    }
	
	@Test
    public void testBannedOther() {
        assertEquals(false, usersService.validateBanned("Q"));
    }
}
