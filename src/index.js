//import 'file?name=../[name].[ext]!./index.html'//引入index.html
import './assets/css/public.css'//引入css
import './assets/less/Reservation.less'//引入css

import {module,bootstrap,element} from 'angular'
import uiRouter from 'ui-router'
import disney from './DisneyModule'
import util from './UtilityModule'
import animate from 'angular-animate'
import fastclick from 'fastclick'


let app= module('main', [uiRouter,disney.name,util.name,animate]);
element(document).ready(()=>bootstrap(document, [app.name]));
initFastClick();

function initFastClick(){
	document.addEventListener('DOMContentLoaded', function() {
		fastclick.attach(document.body);
	}, false);
}