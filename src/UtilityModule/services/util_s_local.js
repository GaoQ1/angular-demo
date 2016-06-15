import storageBase from '../../utility.storage'

util_s_local.$inject=[];
function util_s_local(){
	storageBase.call(this,window.localStorage);
}

export default util_s_local
