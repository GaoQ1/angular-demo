
util_s_verify.$inject=[];
function util_s_verify(){
	/*验证中文姓名正则表达式*/
	this.namePattern=/^[a-zA-Z\.\u4E00-\u9FA5]+$/;
	/*验证中文姓名*/
	this.verifyName=function(name){
		return this.namePattern.test(name);
	}
	/*验证英文姓名正则表达式*/
	this.nameEnPattern=/^[a-zA-Z\/ ]+$/;
	/*验证英文姓名*/
	this.verifyEnName=function(name){
		return this.nameEnPattern.test(name);
	}

	/*验证英文姓名*/
	this.verifyEnNum=function(text){
		return /^[a-zA-Z0-9]+$/.test(text);
	}
	
	/*验证身份证*/	
	this.verifyIdentity=function(num){
		num = num.toUpperCase();
		//身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
		if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num)))
			//alert('输入的身份证号长度不对，或者号码不符合规定！\n15位号码应全为数字，18位号码末位可以为数字或X。');
			return false;
		//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
		//下面分别分析出生日期和校验位
		var len, re;
		len = num.length;
		if (len == 15)
		{
			re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
			var arrSplit = num.match(re);
			//检查生日日期是否正确
			var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
			var bGoodDay;
			bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
			if (!bGoodDay)
				//alert('输入的身份证号里出生日期不对！');
				return false;
			else
			{
				//将15位身份证转成18位
				//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
				var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
				var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
				var nTemp = 0, i;
				num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6);
				for(i = 0; i < 17; i ++)
				{
					nTemp += num.substr(i, 1) * arrInt[i];
				}
				num += arrCh[nTemp % 11];
				return true;
			}
		}
		if (len == 18)
		{
			re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
			var arrSplit = num.match(re);

			//检查生日日期是否正确
			var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
			var bGoodDay;
			bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
			if (!bGoodDay)
			{
				//alert(dtmBirth.getYear());
				//alert(arrSplit[2]);
				//alert('输入的身份证号里出生日期不对！');
				return false;
			}
			else
			{
				//检验18位身份证的校验码是否正确。
				//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
				var valnum;
				var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
				var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
				var nTemp = 0, i;
				for(i = 0; i < 17; i ++)
				{
					nTemp += num.substr(i, 1) * arrInt[i];
				}
				valnum = arrCh[nTemp % 11];
				if (valnum != num.substr(17, 1))
				{
					//alert('18位身份证的校验码不正确！应该为：' + valnum);
					return false;
				}
				return true;
			}
		}
		return false;
	};
	/*验证邮编*/
	this.verifyPostCode=function(postCode){
		var reg=/^[1-9][0-9]{5}$/;
		return reg.test(postCode);
	}
	/*验证电话号码*/
	this.verifyPhone=function(phone){
		//var reg=/^1[3|4|5|7|8][0-9]\d{8}$/;
		var reg=/(^[1][0-9][0-9]{9}$)|(^((0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$)/;
		return reg.test(phone);
	}
	/*常旅客卡号*/
	this.verifyPassengerCard=function(num){
		var reg=/\d{5,20}$/;
		return reg.test(num);
	}
	//验证文本输入框只能输入中文英文数字
	this.isChinaOrNumbOrLett=function (s) {
		var regu = "^[0-9a-zA-Z\u4e00-\u9fa5]+$";
		var reg = new RegExp(regu);
		return reg.test(s);
	}
}

export default util_s_verify
