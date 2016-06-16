ticketInfo.$inject=['$scope','util_s_local']
function ticketInfo($scope,util_s_local){
	let nowDate=new Date(),
		backDate=new Date();
		backDate.setDate(backDate.getDate()+1);
	var dataInfo=$scope.dataInfo= util_s_local.getJson('infoData')||{AirStartCityName:'上海',
													 AirArriveCityName:'香港',
													 AirStartDate:+nowDate,
													 AirBackDate:+backDate,
													 AdultNum:1,
													 ChildrenNum:0
												    }
	initFn();										    
    function initFn() {
    	$scope.$on('$destroy',()=>{
    		util_s_local.setJson('infoData',dataInfo);
    	})
    }
}

export default ticketInfo;