import {configInject} from '../utility.inject.js';

export default new configInject({
	routerConfig
})

routerConfig.$inject=['$urlRouterProvider'];
function routerConfig($urlRouterProvider){
	$urlRouterProvider.otherwise('/disney');
}