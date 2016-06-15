import {module} from 'angular'
import routers from './disney.routers'
import contrls from './controllers'
import configs from './disney.config'
import services from './services'

let disney=module('disney',[]);
routers.inject(disney);
contrls.inject(disney);
configs.inject(disney);
services.inject(disney);

export default disney