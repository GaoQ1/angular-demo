util_s_http.$inject=['$http','$httpParamSerializerJQLike'];
function util_s_http($http,$httpParamSerializerJQLike){
	this.post=function(option={}){		
		option.method='POST';
		return requireHttp(option);
	}

	this.get=function(option={}){
		option.method='GET';
		return requireHttp(option);
	}

	function requireHttp(option={}){
		option.url=getApiUrl(option.url);		
		if(option.method=='GET'){			
			option.paramSerializer='$httpParamSerializerJQLike';
		}else{
			option.headers=option.headers||{};
			option.headers['Content-Type']='application/x-www-form-urlencoded';
			//option.headers['Content-Type']='application/json';
			option.data=$httpParamSerializerJQLike(option.data);
		}
		return handleResponse($http(option),option);
	}

	function handleResponse(httpPromise,option){
		let sucessFn=option.success,
			errorFn=option.error;
			return httpPromise.success((...args)=>{
				let data=args[0],
					code=data.Code;
				if(data&&data.Code){
					switch(code){
						case 200:
						if(typeof sucessFn=='function')
							sucessFn.apply(this,args);
						break;
						case 4:
						break;
						default:
						break;
					}
				}
				
			}).error((...args)=>{
				if(typeof errorFn=='function')
					errorFn.apply(this,args)
				});
	}
}

function getApiUrl(url){
	return window.reqConfig.baseUrl+url;
}

export default util_s_http
