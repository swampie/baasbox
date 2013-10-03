window.angular.module('baasbox.filters.formatmemory',[])
.filter('formatmem',[function(){
	return function(bytes,precision){
		var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
		
		if (bytes == 0) return 'n/a';
		if (bytes < 1024) {
				return Number(bytes) + " " + sizes[0];
		}
		var posttxt = 0;
		do {
			posttxt++;
			bytes = bytes / 1024;
		} while( bytes >= 1024 );
		bytes=Math.round(bytes * 10) / 10
		return  bytes.toFixed(precision) + " " + sizes[posttxt];
	}
}]);

window.angular.module('baasbox.filters.sumproperty',[])
.filter('sum',[function(){
	return function(collection,property){
		var tot = 0;
		angular.forEach(collection, function(value){
			  tot += value[property];
			});
		return tot;
	}
}]);