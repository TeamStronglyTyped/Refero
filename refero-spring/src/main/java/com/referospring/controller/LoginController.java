package com.referospring.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import com.referospring.model.Session;
import com.referospring.model.Users;
import com.referospring.service.SessionService;
import com.referospring.service.UsersService;

@RestController
@CrossOrigin
public class LoginController {
	@Autowired
	UsersService service;
	
	@Autowired
	SessionService sessionService;
	
	@Bean
	public CorsFilter corsFilter() {
	    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	    CorsConfiguration config = new CorsConfiguration();
	    config.setAllowCredentials(true);
	    config.addAllowedOrigin("*");
	    config.addExposedHeader("Authorization, x-xsrf-token, Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, " +
	            "Content-Type, Access-Control-Request-Method, Custom-Filter-Header, token");
	    config.addAllowedHeader("*");
	    config.addAllowedMethod("OPTIONS");
	    config.addAllowedMethod("GET");
	    config.addAllowedMethod("POST");
	    config.addAllowedMethod("PUT");
	    config.addAllowedMethod("DELETE");
	    source.registerCorsConfiguration("/**", config);
	    return new CorsFilter(source);
	}
	
	@GetMapping("/")
	public void emptyRequest() {
		
	}

	@PostMapping("/login")
	public Users validateUser(@RequestBody Users user, HttpServletRequest request,  HttpServletResponse response) {
		System.out.println("login module");
		user=service.getUsersByUserNameAndPassWord(user.getUserName(), user.getPassWord());
		if(user!=null) {
			if (user.getBanned()==null) {
				user.setBanned("T");
			}
			if (user.getBanned().equals("F")) {
				String securityToken = sessionService.generateSecurityKey();
				response.addHeader("token", securityToken);
				// initialize session here
				String securityId = request.getHeader("Authorization");
				Session session=new Session(user.getUserName(), securityId, securityToken);
				System.out.println(session);
				sessionService.createSession(session);
				return user;
			}else {
				// still return user to program, but no session is created because user is banned
				return user;
			}
		}
		return null;
	}
	
	@DeleteMapping("/logout")
	public void logout(HttpServletRequest request,  HttpServletResponse response) {
		System.out.println("logout call");
		String securityId = request.getHeader("Authorization");
		String securityToken = request.getHeader("SecurityToken");
		Session sess = sessionService.getSession(securityId, securityToken);
		System.out.println(sess);
		if(sess!=null) {
			sessionService.deleteSession(sess);
		}
	}
	
	@PostMapping("/register")
	public Users addUsers(@RequestBody Users user) {
		System.out.println("creating user");
		return service.addUsers(user);
	}
	
	@GetMapping("/register/{username}")
	public Boolean usernameIsAvailable(@PathVariable("username") String username) {
		return (Boolean)(service.getUsersByUserName(username)==null);
	}
	
	@PostMapping("/account")
	public Users updateUsers(@RequestBody Users user) {
		System.out.println("update user account: "+user);
		return service.updateUsers(user);
	}
	
	@PostMapping("/validateAdmin")
	public Users validateAdmin(@RequestBody Users user) {
		user=service.getUsersByUserNameAndPassWord(user.getUserName(), user.getPassWord());
		if(user != null) {
			if(user.getUserName() != "admin") {
				System.out.println("Not admin");
		}else if(user.getPassWord() != "Refero202!") {
			System.out.println("Not admin");
		} else {
			return user;
		}
	}
		return user;
}
}
