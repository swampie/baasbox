/*
     Copyright 2012-2013 
     Claudio Tesoriero - c.tesoriero-at-baasbox.com

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 */
package com.baasbox.dao;

import org.apache.commons.lang.exception.ExceptionUtils;

import play.Logger;

import com.baasbox.dao.exception.InvalidCollectionException;
import com.baasbox.dao.exception.InvalidModelException;
import com.baasbox.db.DbHelper;
import com.baasbox.exception.SqlInjectionException;
import com.baasbox.util.QueryParams;
import com.orientechnologies.orient.core.db.graph.OGraphDatabase.LOCK_MODE;
import com.orientechnologies.orient.core.id.ORID;
import com.orientechnologies.orient.core.record.impl.ODocument;


public class DocumentDao extends NodeDao {

	private static final int maxRetries = 10;
	protected CollectionDao collDao;

	protected DocumentDao(String collectionName) throws InvalidCollectionException {
		super(collectionName);
		collDao = CollectionDao.getInstance();
		try {
			if (!collDao.existsCollection(collectionName)) throw new InvalidCollectionException("The collection " + collectionName + " does not exists");
		} catch (SqlInjectionException e) {
			throw new InvalidCollectionException(e);
		} 

	}

	public static DocumentDao getInstance(String collectionName) throws InvalidCollectionException{
		return new DocumentDao(collectionName);
	}

	@Override
	public ODocument create() throws Throwable{
		Logger.trace("Method Start");
		DbHelper.requestTransaction();
		ODocument doc = super.create();
		try{
		for( int retry = 0; retry < maxRetries; ++retry ) {
			    doc.save();
				ODocument coll=null;
				try{ 
					coll=collDao.getByName(super.MODEL_NAME);
				}catch (SqlInjectionException e){
					Logger.error(ExceptionUtils.getFullStackTrace(e));
					throw e;
				}
				ODocument docVertex = doc.field(super.FIELD_LINK_TO_VERTEX);
				ODocument collVertex = coll.field(super.FIELD_LINK_TO_VERTEX);
				try{
					ODocument edge=db.createEdge(collVertex.getIdentity(), docVertex.getIdentity()); //link the record in the Collection class to the record just created
					edge.save();
					DbHelper.commitTransaction();
					break;
				}catch(Exception e){
					collVertex.reload();
				}
					//docVertex.save();
				//collVertex.save();
		}
		}catch (Throwable e){
			DbHelper.rollbackTransaction();
			throw e;
		}
		Logger.trace("Method End");
		return doc;
	}//getNewModelInstance

	public void save(ODocument document) throws InvalidModelException{
		super.save(document);
	}




}
