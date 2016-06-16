import {serviceInject} from '../../utility.inject.js'
import util_s_http from './util_s_http'
import util_s_app from './util_s_app'
import util_s_session from './util_s_session'
import util_s_local from './util_s_local'
import util_s_verify from './util_s_verify'
import util_s_fn from './util_s_fn'


export default new serviceInject({
	util_s_http:util_s_http,
	util_s_app:util_s_app,
	util_s_session:util_s_session,
	util_s_local:util_s_local,
	util_s_verify:util_s_verify,
	util_s_fn:util_s_fn
})