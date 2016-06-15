import {controllerInject} from '../../utility.inject.js';
import fillinfo from './fillinfoController'
import home from './homeController'
import ticketInfo from './ticketInfoController'
import goTicketList from './goTicketListController'
import backTicketList from './backTicketListController'
import goTicketDetail from './goTicketDetailController'
import backTicketDetail from './backTicketDetailController'
import addDisTicket from './addDisTicketController'
import fillOrder from './fillOrderController'

export default new controllerInject({
	fillinfoController:fillinfo,
	homeController:home,
	ticketInfoController:ticketInfo,
	goTicketListController:goTicketList,
	backTicketListController:backTicketList,
	backTicketDetailController:backTicketDetail,
	goTicketDetailController:goTicketDetail,
	addDisTicketController:addDisTicket,
	fillOrderController:fillOrder
}) 