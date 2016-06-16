util_s_fn.$inject=[];
function util_s_fn(){
	/*日期转换为number
	@date string,number,Date 转换的日期
	@divisor number 日期单位换算，默认1000微秒（秒）
	*/
	this.dateFormat=function(date){	
		if(date==undefined)
			return;
		else if(typeof date=='number')
			return new Date(date);
		else if(typeof date=='string'){
			let strs=date.split(/[^0-9]/);
			return  new Date(strs[0]||0,(strs[1]||0)-1,strs[2]||0,strs[3],strs[4]||0,strs[5]||0);
		}else if(Date.prototype.isPrototypeOf(date)){
			return date;
		}			
	}

	this.dateToServer=function(date){
		return Math.floor(this.dateFormat(date)/1000);
	}

	this.dateFormatNumber=function(date,divisor=1){
		return this.dateFormat(date)/divisor;
	}

	this.initTime=function(date){
		if(!date)return date;
		date=this.dateFormat(date);			
		let year=date.getFullYear(),
		    month=date.getMonth(),
		    day=date.getDate();
		return new Date(year,month,day);
	}

	this.getDate=function(date){
		return this.initTime(date);
	}

	this.compareDay=function(startDate,endDate){
        let days = endDate.getTime() - startDate.getTime();
        let day = parseInt(days / (1000 * 60 * 60 * 24));
        return day;
	}

	this.getStrMonth=function(str,splitTxt){
		if(!str)return;
		splitTxt=splitTxt||'-';
		let strs=str.split(/[^0-9]/);
		return strs[0]+splitTxt+strs[1];
	}

	this.getStrDate=function(str,splitTxt){
		if(!str)return;
		splitTxt=splitTxt||'-';
		let strs=str.split(/[^0-9]/);
		return strs[0]+splitTxt+strs[1]+splitTxt+strs[2];
	}

	this.isChild=function(birthday){
		let year=birthday.getFullYear(),
			month=birthday.getMonth(),
			day=birthday.getDate(),
			nowDate=new Date(),
			nowYear=nowDate.getFullYear(),
			nowMonth=nowDate.getMonth(),
			nowDay=nowDate.getDate(),
			initDate=new Date(nowYear,nowMonth,nowDay);
		return (new Date(year+12,month,day)-initDate>=0)&&(new Date(year+2,month,day)-initDate<=0);
	}

	this.isAdult=function(birthday){
		let year=birthday.getFullYear(),
			month=birthday.getMonth(),
			day=birthday.getDate(),
			nowDate=new Date(),
			nowYear=nowDate.getFullYear(),
			nowMonth=nowDate.getMonth(),
			nowDay=nowDate.getDate(),
			initDate=new Date(nowYear,nowMonth,nowDay);
		return new Date(year+12,month,day)-initDate<0;
	}

	this.compareYear=function(startDate,endDate){
		let times = endDate.getTime() - startDate.getTime();
        let year = parseInt(times / (1000 * 60 * 60 * 24 * 365));
        return year;
	}

	this.filterSpace=function(str){
		if(str==undefined)return '';
		return str.replace(/^ +| +$/g,'');
	}

	this.isTicket=function(type){
		return type==window.optionService.ticket;
	}

	this.isRedPackage=function(type){
		return type==window.optionService.redPackage;
	}

	this.isInsurance=function(type){
		return type==window.optionService.insurance;
	}

	this.format = function(date){
		let o = {
			"Y" : date.getFullYear(),
			"M": date.getMonth() + 1,
			"D": date.getDate()
		}
		return `${o.Y}-${o.M}-${o.D}`;
	}
}

export default util_s_fn
