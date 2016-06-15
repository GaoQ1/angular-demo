disn_s_app.$inject=['$location'];
function disn_s_app($location){
	//login
	    //返回客户端类型
	    this.ShowCus = function() {

	        var u = navigator.userAgent;
	        if (u.match(/Android/i) != null) { //android代码
	            return "Android";
	        } else if (u.match(/iPhone|iPod/i) != null) { //IOS
	            return "IOS";
	        } else {
	            return "WP";
	        }
	    };
	    //弹出登录框
	    this.redirectLogin = function(redirectUrl, title) {

	        var customer = this.ShowCus();
	        var url = redirectUrl;
	        url=url.replace(/\&/g,'&amp;');
	        try{
	        switch (customer) {
	            case "Android":
	                Login.clickOnLogin(url, title, "mobile_login");
	                break;
	            case "IOS":
	                clickOnLogin(url, title, "mobile_login");
	                break;
	            case "WP":
	                external.notify("clickOnLogin?" + url + "&" + title + "&mobile_login");
	                break;
	        }
	    	}catch(e){
	    		console.log(e);
	    	}
	    };

	    this.hasLogin=function(){
	    	return this.getP()!=undefined;
	    }

	    this.getP=function(){
	    	return sessionStorage.getItem('p');
	    };

	    this.setP=function(){
	    	var param=$location.search();
	    	if(param.p)
	    		sessionStorage.setItem('p',param.p);
	    };

	    this.setEntry=function(){
	    	var param=$location.search();
	    	if(param.Entry)
	    		//sessionStorage.setItem('Entry',param.Entry);
	    	{
	    		if(document.cookie.indexOf('Entry')==-1){
	    			document.cookie='Entry=1;'
	    		}
	    		localStorage.setItem('Entry',param.Entry);
	    	}
	    }

	    this.getEntry=function(){
	    	//return sessionStorage.getItem('Entry');
	    	// return localStorage.getItem('Entry');
	    	if(document.cookie.indexOf('Entry')>-1)
	    		return 1;
	    }

	    this.isApp=function(){
	    	return this.getEntry()==1;
	    }

	    this.bindBack=function(isFirst){

	    	var customer = this.ShowCus();

	    	switch (customer) {
	            case "Android":
	            	if(!isFirst){
	            		gotoback.clickOnback('true', 'historyBack()');	            		
	            	}	                	
                	else
                		gotoback.clickOnback('false', '');
	                break;
	            case "IOS":
	            	if(!isFirst)
	                	clickOnback("true", "historyBack()");
                	else{          
                		clickOnback("false", "");
                	}
	                break;
	            case "WP":
	            	if(!isFirst)
	                	external.notify('clickOnback?true&historyBack');
	                else
	                	external.notify('clickOnback?true&');
	                break;
        	}
        }

        this.bindTitle=function(title){
        	try{
	        	var customer = this.ShowCus();
	        	switch (customer) {
		            case "Android":
		                gototitle.clickOntitle(title);
		                break;
		            case "IOS":
		                clickOntitle(title);
		                break;
		            case "WP":
		                external.notify('clickOntitle?' + title);
		                break;
	        	}
        	}catch(e){

			}
        }
}