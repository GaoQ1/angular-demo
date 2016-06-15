import {serviceInject} from '../../utility.inject.js'
import util_s_http from './util_s_http'
import util_s_app from './util_s_app'
import util_s_session from './util_s_session'


export default new serviceInject({
	util_s_http:util_s_http,
	util_s_app:util_s_app,
	util_s_session:util_s_session
})