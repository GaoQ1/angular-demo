
goTicketList.$inject=['$scope','util_s_local','util_s_http','util_s_fn']
function goTicketList($scope,util_s_local,util_s_http,util_s_fn){
	var infoData=util_s_local.getJson('infoData')||{};
	initFn();
	loadData();

	function loadData(){
		let params={
			AirStartCityName:infoData.AirStartCityName,
			AirArriveCityName:infoData.AirArriveCityName,
			AirStartDate:util_s_fn.dateToServer(infoData.AirStartDate),
			AirBackDate:util_s_fn.dateToServer(infoData.AirBackDate),
			AdultNum:infoData.AdultNum,
			ChildrenNum:infoData.ChildrenNum,
			OrderByField:'',
			OrderByType:''			
		}

		util_s_http.post({
			url:'AppAirTicketApi/GetAirTicketInfo',
			data:params,
			success:function(data){
				$scope.goFlightList=data.Data.goFlightList||[];
			}
		})
	}
	function initFn(){

	}
}

export default goTicketList;