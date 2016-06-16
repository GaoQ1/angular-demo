import {routerInject} from '../utility.inject.js'
import '../template/disney.fillinfo.html'
import '../template/disney.home.html'
import '../template/disney.ticketInfo.html'
import '../template/disney.goTicketList.html'
import '../template/disney.backTicketList.html'
import '../template/disney.ticketDetail.html'
import '../template/disney.addDisTicket.html'
import '../template/disney.fillOrder.html'

export default new routerInject({
	'home':{//首页
		url:'/disney',
		controller:'homeController',
		templateUrl:'disney.home.html'
	},
	fillinfo: {//填写
		url: '/disney/fillinfo',
		controller: 'fillinfoController',
		templateUrl: 'disney.fillinfo.html'
	},
	ticketInfo:{//机票信息选择
		url:'/disney/ticketInfo',
		controller:'ticketInfoController',
		templateUrl: 'disney.ticketInfo.html'
	},
	goTicketList:{//航班选择-去程
		url:'/disney/goTicketList',
		controller:'goTicketListController',
		templateUrl: 'disney.goTicketList.html'
	},
	backTicketList:{//航班选择-返程
		url:'/disney/backTicketList',
		controller:'backTicketListController',
		templateUrl: 'disney.backTicketList.html'
	},
	goTicketDetail:{//航班详情
		url:'/disney/goTicketDetail',
		controller:'goTicketDetailController',
		templateUrl: 'disney.ticketDetail.html'
	},
	backTicketDetail:{//航班详情
		url:'/disney/backTicketDetail',
		controller:'backTicketDetailController',
		templateUrl: 'disney.ticketDetail.html'
	},
	addDisTicket:{//门票日期选择
		url:'/disney/addDisTicket',
		controller:'addDisTicketController',
		templateUrl: 'disney.addDisTicket.html'
	},
	fillOrder:{//填写资料
		url:'/disney/fillOrder',
		controller:'fillOrderController',
		templateUrl: 'disney.fillOrder.html'
	}
})