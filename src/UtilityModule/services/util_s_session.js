import storageBase from '../../utility.storage'

util_s_session.$inject=[];
function util_s_session(){
	storageBase.call(this,window.sessionStorage);
}

export default util_s_session
