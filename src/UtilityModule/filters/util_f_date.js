util_f_date.$inject = ['util_s_fn'];
function util_f_date(util_s_fn) {
    return function (dateString, divser = 1000) {
        if (!dateString)return;
        return new Date(dateString * divser);
    }
}
export default util_f_date
