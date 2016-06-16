export class controllerInject {
    constructor(controller = {}) {
        this.controller = controller;
    }
    inject(module) {
        injectBase(this.controller, module, 'controller')
    }
}

export class directiveInject {
    constructor(directive = {}) {
        this.directive = directive;
    }
    inject(module) {
        injectBase(this.directive, module, 'directive')
    }
}


export class providerInject {
    constructor(provider = {}) {
        this.provider = provider;
    }
    inject(module) {
        injectBase(this.provider, module, 'provider')
    }
}

export class factoryInject {
    constructor(factory = {}) {
        this.factory = factory;
    }
    inject(module) {
        injectBase(this.factory, module, 'factory')
    }
}

export class serviceInject {
    constructor(service = {}) {
        this.service = service;
    }
    inject(module) {
        injectBase(this.service, module, 'service')
    }
}

export class valueInject {
    constructor(value = {}) {
        this.value = value;
    }
    inject(module) {
        injectBase(this.value, module, 'value')
    }
}

export class constantInject {
    constructor(constant = {}) {
        this.constant = constant;
    }
    inject(module) {
        injectBase(this.constant, module, 'constant')
    }
}

export class decoratorInject {
    constructor(decorator = {}) {
        this.decorator = decorator;
    }
    inject(module) {
        injectBase(this.decorator, module, 'decorator')
    }
}

export class configInject {
    constructor(config = {}) {
        this.config = config;
    }
    inject(module) {
        for (let key in this.config) {
            module['config'](this.config[key]);
        }
    }
}


export class routerInject {
    constructor(router = {}, routerProvider = '$stateProvider', routerFn = 'state') {
        this.router = router;
        this.routerProvider = routerProvider;
        this.routerFn = routerFn;
    }
    inject(module) {
        module.config([this.routerProvider, ($stateProvider) => {
            injectBase(this.router, $stateProvider, this.routerFn)
        }])
    }
}

function injectBase(injectObjs, module, fnType) {
    for (let key in injectObjs) {
        module[fnType](key, injectObjs[key]);
    }
}
