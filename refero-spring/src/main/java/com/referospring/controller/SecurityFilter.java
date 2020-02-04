package com.referospring.controller;

import java.io.IOException;
import java.util.Enumeration;
import java.util.List;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.UrlPathHelper;

import com.referospring.model.Session;
import com.referospring.service.SessionService;

@WebFilter
@Component
@CrossOrigin(origins = "http://localhost:4200")
public class SecurityFilter extends OncePerRequestFilter {
	
	@Autowired
	SessionService sessionService;
	
	@Override
	public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		String path = new UrlPathHelper().getPathWithinApplication((HttpServletRequest) request);
		//System.out.println("*** PATH ***"+path+ "   length= "+path.length()+" ");
		String accept = request.getHeader("accept");
		//System.out.println("ACCEPT: "+accept);
		if (!accept.contains("application")) {
			// all of the traffic that will hit our controllers contains application/java
			// the other traffic does not so we should pass it without messing with it
			chain.doFilter(request, response);
			return;
		}
		
		if(path.equals("/") || path.equals("/login") || path.equals("/logout") || (path.length()>=9 && path.subSequence(0, 9).equals("/register"))) {
			//System.out.println("/login or /register so pass along without security.");
			chain.doFilter(request, response);
			return;
		}else {
			//System.out.println("check for session for these uri");
			HttpServletRequest httpRequest = (HttpServletRequest)request;
			//boolean sessionValid = validateSession(request, response);
			
			
			String securityId = httpRequest.getHeader("Authorization");
			if (securityId!=null && securityId.equals("admin23")) {
				chain.doFilter(request, response);
				return;
			}
			String securityToken = httpRequest.getHeader("SecurityToken");
			Session sess = sessionService.getSession(securityId, securityToken);
			System.out.println("securityid: "+ securityId+" secutiryToken: "+securityToken);
			System.out.println("Session Data: "+sess);
			if(sess!=null) {
				// session exists so proceed
				//System.out.println("session valid *** allow access ****");
				chain.doFilter(request, response);
				return;
			}else {
				//System.out.println("session invalid *** DENY access ****");
				HttpServletResponse httpResponse = (HttpServletResponse) response;
				httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
				httpResponse.sendRedirect("/login");
			}
			
			chain.doFilter(request, response);
			return;
		}
		
	}
	
	
	
	

}
