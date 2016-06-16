backTicketList.$inject = ['$scope', 'util_s_local', 'util_s_http', 'util_s_fn']
function backTicketList($scope, util_s_local, util_s_http, util_s_fn) {
    let infoData = util_s_local.getJson('infoData')||{};
    initFn()
    loadData();
    function loadData(){
        /*let params={
            AirStartCityName:infoData.AirStartCityName,
            AirArriveCityName:infoData.AirArriveCityName,
            AirStartDate:util_s_fn.dateToServer(infoData.AirStartDate),
            AirBackDate:util_s_fn.dateToServer(infoData.AirBackDate),
            AdultNum:infoData.AdultNum,
            ChildrenNum:infoData.ChildrenNum,
            OrderByField:'',
            OrderByType:''
        };*/
        let params={
            AirStartCityName: "上海",
            AirArriveCityName: "香港",
            AirStartDate: new Date('2016-06-16')/1000,
            AirBackDate: new Date('2016-06-18')/1000,
            AdultNum: 2,
            ChildrenNum: 1,
            OrderByField:'',
            OrderByType:''
        };

        util_s_http.post({
            url: 'AppAirTicketApi/GetAirTicketInfo',
            data: params,
            success:function(data){
                $scope.backFlightList = data.Data.BackFlightList || [];

                $scope.airDate = {
                    AirStartDate: '2016-06-16',
                    AirBackDate: '2016-06-18'
                };
                $scope.i = 0;

                $scope.overDay = (start,stop) => {
                    let day = new Date(stop*1000).getDay() - new Date(start*1000).getDay();
                    if(day>0){
                        return `+${day}天`;
                    }
                };

                $scope.nextDay = () => {
                    $scope.i++;
                    let currentDay = new Date($scope.airDate.AirBackDate).getTime() + $scope.i*24*3600*1000;
                    console.log(util_s_fn.format(new Date(currentDay)));
                };

                $scope.prevDay = () => {
                    //判断是否超过并且重新拉取数据
                    $scope.i--;
                    let currentDay = new Date($scope.airDate.AirBackDate).getTime() + $scope.i*24*3600*1000;
                    console.log(util_s_fn.format(new Date(currentDay)));
                };

                //console.log($scope.backFlightList);
            }
        })
    }
    function initFn(){

    }
}

export default backTicketList;