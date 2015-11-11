package com.baasbox.controllers;



import java.text.SimpleDateFormat;
import java.util.Date;

import play.libs.F;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.With;
import scala.concurrent.ExecutionContext;

import com.baasbox.controllers.actions.filters.ConnectToDBFilterAsync;
import com.baasbox.controllers.actions.filters.ExtractQueryParameters;
import com.baasbox.controllers.actions.filters.UserOrAnonymousCredentialsFilterAsync;
import com.baasbox.service.logging.BaasBoxLogger;


public class SlowMo extends Controller{
	
	@With({UserOrAnonymousCredentialsFilterAsync.class, ConnectToDBFilterAsync.class, ExtractQueryParameters.class})	
	public static F.Promise<Result> slowMo(String name){
		
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yy HH:mm:ss:SSS");
		BaasBoxLogger.debug("BEFORE: "+sdf.format(new Date()));
		
		Integer delay = Integer.parseInt(ctx().request().queryString().get("delay")[0]);
		
		ExecutionContext ctx = Contexts.slowContext(ctx());
		
		F.Promise<Result> original = F.Promise.promise(()->{
				StringBuilder sb = new StringBuilder("Started "+name+ " at "+ sdf.format(new Date()));
				BaasBoxLogger.debug(sb.toString());
				BaasBoxLogger.debug("INSIDE 1");
				//SLEEPING BEAUTY
				Thread.sleep(delay);
				BaasBoxLogger.debug("INSIDE 2");
				String endString = "Ended "+name+ " at "+ sdf.format(new Date());
				sb.append("\n").append(endString);
				BaasBoxLogger.debug(endString);
				return ok(sb.toString());
		},ctx);
		//return Contexts.timed(ctx,original,10,TimeUnit.SECONDS);
		BaasBoxLogger.debug("AFTER:"+sdf.format(new Date()));
		
		
		BaasBoxLogger.debug("RETURN:"+sdf.format(new Date()));
		
		return original;
	} 
	

}
