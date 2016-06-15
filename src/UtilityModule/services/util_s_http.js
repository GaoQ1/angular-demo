util_s_http.$inject=['$http','$httpParamSerializerJQLike'];
function util_s_http($http,$httpParamSerializerJQLike){
	this.post=function(option={}){		
		option.method='POST';
		return require(option);
	}

	this.get=function(option={}){
		option.method='GET';
		return require(option);
	}

	function require(option={}){
		option.url=getApiUrl(option.url);		
		if(option.method=='GET'){			
			option.paramSerializer='$httpParamSerializerJQLike';
		}else{
			option.headers=option.headers||{};
			option.headers['Content-Type']='application/x-www-form-urlencoded';
			option.data=$httpParamSerializerJQLike(option.data);
		}
		return handleResponse($http(option),option);
	}

	function handleResponse(httpPromise,option){
		let sucessFn=option.success,
			errorFn=option.error;
			return httpPromise.success((data)=>{
				let code=data.Code;
				if(data&&data.Code){
					switch(code){
						case 200:
						sucessFn.apply(this,arguments);
						break;
						case 4:
						break;
						default:
						break;
					}
				}
				
			}).error(()=>errorFn.apply(this,arguments));
	}
}

function getApiUrl(url){
	return window.reqConfig+'url';
}

export default util_s_http
