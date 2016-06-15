import angular form 'angular'

export default function storageBase(storage){
		/*获取缓存
		@key string 缓存标识
		@getOne boolean 是否读取后删除缓存 
		@retrun Object 缓存数据
		getOne==true 读取后删除缓存		
		*/
		this.getJson=function(key,getOne){
			var data =angular.fromJson(storage.getItem(key));
			if(getOne===true)
				this.removeItem(key);
			return data;
		}

		/*设置已存在的缓存
		@key string 缓存标识
		@data object 缓存
		*/
		this.extendJson=function(key,data){
			var oldData =this.getJson(key);
			angular.extend(oldData,data);
			this.setJson(key,oldData);
		}

		/*设置缓存
		@key string 缓存标识
		@data object 缓存的对象	
		*/
		this.setJson=function(key,data){
			return storage.setItem(key,angular.toJson(data));
		}
		/*删除缓存
		@key string 缓存标识
		*/
		this.removeItem=function(key){
			return storage.removeItem(key);
		}

		/*设置缓存
		@key string 缓存标识
		@data string 缓存的字符串
		*/
		this.setItem=function(key,data){
			return storage.setItem(key,data);
		}

		/*获取缓存
		@key string 缓存标识
		@retrun srting 缓存数据
		*/
		this.getItem=function(key,getOne){
			var data =storage.getItem(key);
			if(getOne===true)
				this.removeItem(key);
			return data;
		}
}