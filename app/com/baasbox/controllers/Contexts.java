package com.baasbox.controllers;

import static akka.pattern.Patterns.after;

import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

import play.core.j.HttpExecutionContext;
import play.libs.Akka;
import play.libs.F.Promise;
import play.mvc.Http.Context;
import scala.concurrent.ExecutionContext;
import scala.concurrent.Future;
import scala.concurrent.duration.Duration;
import akka.dispatch.Futures;

import com.google.common.collect.Lists;

public class Contexts {
	private static final String BASE_EXECUTION_CONTEXT = "akka.actor";
	private static final String PLUGIN_EXECUTION_CONTEXT = BASE_EXECUTION_CONTEXT+".plugins-context";
	private static final String SLOW_CONTEXT = BASE_EXECUTION_CONTEXT+".slow-context";
	
	public static ExecutionContext slowContext(Context ctx) {
		HttpExecutionContext ec =  materialize(ctx,SLOW_CONTEXT);
		
		
		
		return ec;
	}
	
	public static ExecutionContext pluginContext(Context ctx) {
		return materialize(ctx,PLUGIN_EXECUTION_CONTEXT);
	}
	
	private static HttpExecutionContext materialize(Context ctx,String contextName){
		ExecutionContext executionContext = Akka.system().dispatchers().lookup(contextName);
    	return new HttpExecutionContext(ctx.getClass().getClassLoader(),ctx,executionContext);
    	
	}

	public static ExecutionContext wrap(Context ctx) {
			return new HttpExecutionContext(ctx.getClass().getClassLoader(),ctx,Akka.system().dispatcher());
	}

	public static <T> Promise<T> timed(Context ctx,Promise<T> original,
			int delay, TimeUnit unit) {
		ExecutionContext main = wrap(ctx);
		Future<T> error = after(Duration.create(delay,unit),Akka.system().scheduler(),main,Futures.failed(new TimeoutException("Future timed out")));
		return Promise.wrap(Futures.firstCompletedOf(Lists.newArrayList(original.wrapped(),error), main));
	}
	
	
	
}
