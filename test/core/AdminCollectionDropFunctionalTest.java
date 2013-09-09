package core;

import static org.junit.Assert.fail;
import static play.test.Helpers.GET;
import static play.test.Helpers.POST;
import static play.test.Helpers.fakeApplication;
import static play.test.Helpers.route;
import static play.test.Helpers.running;

import java.io.IOException;
import java.util.UUID;

import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.JsonProcessingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.junit.Test;

import play.mvc.Http.Status;
import play.mvc.Result;
import play.test.FakeRequest;

public class AdminCollectionDropFunctionalTest extends AbstractTest{
	

    
	public String collectionName="";
    
	
    
    @Override
	public String getMethod() {
		return GET;
	}

	@Override
	protected void assertContent(String s) {
		// TODO Auto-generated method stub
		
	}

	@Override
    public String getRouteAddress()
    {
            collectionName="fake"+UUID.randomUUID().toString();
            return "/admin/collection/"+ collectionName;
    }
   
    public String getRouteForObjects(){
            return "/document/" + collectionName;
    }
   
    public String getRouteForCount(){
            return "/document/" + collectionName + "/count";
    }
   
   
   
    @Test
    public void testDropCollectionCreate() throws Exception
    {

            running (fakeApplication(),     
            		new Runnable()  {
                            public void run()       {
                                    try {
                                    	 String sFakeCollection = getRouteAddress();
                                         FakeRequest requestCreation = new FakeRequest(POST, sFakeCollection);
                                         requestCreation = requestCreation.withHeader(TestConfig.KEY_APPCODE, TestConfig.VALUE_APPCODE);
                                         requestCreation = requestCreation.withHeader(TestConfig.KEY_AUTH, TestConfig.AUTH_ADMIN_ENC);
                                         Result result = route(requestCreation);
                                         assertRoute(result, "testDropCollection", Status.CREATED, null, true);
                                         //Insert some object in there
                                         String sFakeInsertObjects = getRouteForObjects();
                                         JsonNode payload = (new ObjectMapper()).readTree("{\"test\":\"testvalue\"}");
                                         for(int i=0;i<5;i++){
                                         		 requestCreation	 = new FakeRequest(POST, sFakeInsertObjects);
                                         		 requestCreation = requestCreation.withHeader(TestConfig.KEY_APPCODE, TestConfig.VALUE_APPCODE);
                                         		 requestCreation = requestCreation.withHeader(TestConfig.KEY_AUTH, TestConfig.AUTH_ADMIN_ENC);
                                         		 requestCreation = requestCreation.withJsonBody(payload, POST);
                                                 Result result1 = route(requestCreation);
                                                 assertRoute(result1, "testDropCollection", Status.OK, null, true);
                                         }
                                                
                                    } catch (JsonProcessingException e) {
                                            fail();
                                    } catch (IOException e) {
                                            fail();
                                    }catch (Exception e) {
                                    		e.printStackTrace();
                                    		fail();
									}
                            }});
    }

}
