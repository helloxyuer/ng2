export const common = {
  turnbody: function turnBody(obj: object) {
    let query = '';
    let name, value, fullSubName, subName, subValue, innerObj, i;
    for ( name in obj) {
      value = obj[name];
      if (value instanceof Array) {
        for (i = 0; i < value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += turnBody(innerObj) + '&';
        }
      } else if (value instanceof Object) {
        for (subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += turnBody(innerObj) + '&';
        }
      } else if (value !== undefined && value !== null) {
        query += encodeURIComponent(name) + '='
          + encodeURIComponent(value) + '&';
      }
    }

    return query.length ? query.substr(0, query.length - 1) : query;
  },

  /*设置session值*/
  setSession: function (key: string, val: string) {
    sessionStorage.setItem( key, val);
  },
  /*获取session值*/
  getSession: function (key: string) {
    const val = sessionStorage.getItem( key);
    return val ? val : '';
  }
};
