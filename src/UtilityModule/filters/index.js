import {filterInject} from '../../utility.inject.js'
import util_f_date from './util_f_date'
import util_f_week from './util_f_week'

export default new filterInject({
    util_f_date: util_f_date,
    util_f_week: util_f_week
})