package com.referospring.aspect;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
@Component
public class LoggingAspect {
	
	@Pointcut("execution(* com.referospring.service.UserServiceImpl.*(..))")
	public void someBO(){}
	
	
	/*@After("someBO()")
	public void beforeAdvice(JoinPoint jp) {
		System.out.println("Before execution of "+jp.getSignature());
	}*/
	/*	
	@Before("execution(* com.referospring.service.*.*(..))")
	public void before( JoinPoint joinPoint ) {
		System.out.println("****************************************************************************************************");
		System.out.println( "service " + joinPoint );
		System.out.println("****************************************************************************************************");
	}
*/
}
