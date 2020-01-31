package com.referospring.controller;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.util.UrlPathHelper;

@Component
public class SecurityFilter implements Filter {
	
	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		String path = new UrlPathHelper().getPathWithinApplication((HttpServletRequest) request);
		System.out.println("*** PATH ***"+path);
		if(path.equals("/login") || (path.length()>=9 && path.subSequence(0, 8).equals("/register"))) {
			System.out.println("/login or /register so pass along without security.");
			chain.doFilter(request, response);
			return;
		}else {
			System.out.println("check for session for these uri");
			//HttpServletResponse httpResponse = (HttpServletResponse) response;
			//httpResponse.setStatus(HttpServletResponse.SC_BAD_REQUEST);
			//httpResponse.sendRedirect("/");
			chain.doFilter(request, response);
			return;
		}
	    
	}
	
	@Override
	   public void init(FilterConfig filterconfig) throws ServletException {}

}
