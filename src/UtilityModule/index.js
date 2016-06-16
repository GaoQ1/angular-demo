import {module} from 'angular'
import services from './services'
import filter from './filters'

let util = module('util', []);
services.inject(util);
filter.inject(util);
export default util;