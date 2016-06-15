import {module} from 'angular';
import services from './services';

let util=module('util',[]);
services.inject(util);
export default util