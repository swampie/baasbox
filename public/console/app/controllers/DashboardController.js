window.angular.module("baasbox.controllers.dashboard",[]).
	controller("DashboardController",['$scope','$stateParams','statistics','bbauth','latest','rss',function($scope,$stateParams,statistics,bbauth,latest,rss){
		$scope.data = statistics.getClient(bbauth).get({});
		$scope.version = {}
		$scope.newsFeed = 
			rss.parseFeed('http://www.baasbox.com/feed/').then(function (res) {
					console.log(res);
				         return res.data.responseData.feed.entries; 
			});
		
		latest.getClient(bbauth).get({},function(data){
			$scope.version.v = data.data["latest_version"];
			$scope.version.url = data.data["download_url"];
		});
		  
		
		$("#system .tabcontent:not(':eq(0)')").hide()
		$("#news .tabcontent:not(':eq(0)')").hide()
		$('.menu .item').on("click",function(e){
			e.preventDefault();
			
			if($(this).hasClass('active')){
				return;
			}
			$(this).siblings('.active').removeClass("active");
			$(this).addClass("active");
			var toShow = $(this).attr("href");
			var menu = $(this).parent().parent().attr("id");
			var toHide = $('#'+menu+' .tabcontent:visible');
			$(toShow).show();
			$(toHide).hide();
		});
     }]);