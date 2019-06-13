import http from '@/common/services/http';
export default {
  // 获取部门人员树数据
  getTreeData(param, cb) {
    http.post('/common/chooser/treeData.htm', {
      'cond.usage': param.usage, // 权限控制，由后台提供
      'cond.modes': param.modes.split(',') // 控制类型 参数dep, emp, dep,emp
    }).then(res => {
      if (res.data.result === 0) {
        var data = res.data.data && res.data.data.data || {}
        cb(data.nodes || [])
      }
    });
  },
  // 通过did或eid获取部门或人员的详细信息
  getShowValues(param, cb) {
    http.post('/common/chooser/showValues.htm', {
      'cond.dids': param.dids, // dids [1,2]
      'cond.eids': param.eids // eids [1,2]
    }).then(res => {
      var data = res.data.data && res.data.data.data || {}
      cb(data.nodes || [])
    });
  },
  // 通过scene获取高级搜索权限
  getStrategySwitch(param, cb) {
    http.post('/forward_webfront/api/ers/chooser/strategySwitch.htm', {
      'scene': param.scene // 该参数由后台提供
    }).then(res => {
      if (res.data) {
        var data = res.data.data || {}
        cb(data)
      }
    });
  },
  getChooserCond(param, cb) {
    http.post('/forward_webfront/api/ers/chooser/getChooserCond.htm', {
      'scene': param.scene,
      'dids': param.dids
    }).then(res => {
      var data = res.data.data || {}
      cb(data)
    });
  },
  getTreeEmpsInDep(param, cb) {
    http.post('/common/chooser/treeEmpsInDep.htm', {
      'cond.usage': param.usage,
      'cond.did': param.did
    }).then(res => {
      var data = res.data.data && res.data.data.data || {}
      cb(data.nodes)
    });
  },
  getSearch(param, cb) {
    http.post('/common/chooser/search.htm', {
      'cond.usage': param.usage,
      'cond.modes': param.modes.split(','),
      'cond.q': param.queryString,
      'cond.workStatus': param.workStatus
    }).then(res => {
      var data = res.data.data && res.data.data.data || {}
      cb(data)
    });
  },
  getCondsEmps(param, cb) {
    http.post('/forward_webfront/api/ers/chooser/conds2Emps.htm', {
      'chData': param.depData,
      'data': JSON.stringify(param.data)
    }).then(res => {
      var data = res.data.data && res.data.data.data || {}
      cb(data)
    });
  },
  saveChoooserScope(param, cb) {
    http.post('/forward_webfront/api/ers/chooser/saveChoooserScope.htm', {
      'scopeRule.scene': param.scene || '',
      'scopeRule.outId': param.outId || '',
      'scopeRule.dids': param.dids || '',
      'scopeRule.eids': param.eids || '',
      'scopeRule.positionIds': param.positionIds || '',
      'scopeRule.scope': JSON.stringify(param.scope || [])
    }).then(res => {
      var data = res.data.data && res.data.data.data || {}
      cb(data)
    });
  },
  getChooserScope(param, cb) {
    http.post('/forward_webfront/api/ers/chooser/getChooserScope.htm', {
      'outId': param.outId,
      'scenes': param.scene
    }).then(res => {
      var data = res.data.data && res.data.data.data
      cb(data)
    });
  },
  getRuleOfEid(param, cb) {
    http.post('/forward_webfront/api/ers/chooser/getRuleOfEid.htm', {
      'outIds': param.outIds,
      'scenes': param.scenes,
      'eid': param.eid
    }).then(res => {
      var data = res.data.data && res.data.data.data
      cb(data)
    });
  },
  getChooserScopes(param, cb) {
    http.post('/forward_webfront/api/ers/chooser/getChooserScopes.htm', {
      'bids': param.bids,
      'scene': param.scene,
      'query.workStatuses': param.workStatuses
    }).then(res => {
      var data = res.data.data || {}
      cb(data)
    });
  },
  treeDataExtend(param, cb) {
    http.post('/forward_webfront/api/ers/chooser/treeDataExtend.htm', {
      'treeData.scene': param.scene,
      'treeData.hasSub': param.hasSub,
      'treeData.bids': param.bids,
      'treeData.bidsRemove': param.bidsRemove,
      'treeData.modes': param.modes
    }).then(res => {
      console.log(res);
      var data = res.data.data && res.data.data.data || {}
      cb(data.nodes || [])
    });
  },
  getListChooserScopeByBids(param, cb) {
    http.post('/forward_webfront/api/ers/chooser/listChooserScopeByBids.htm', {
      'data': JSON.stringify(param.data),
      'query.workStatuses': param.workStatuses
    }).then(res => {
      var data = res.data.data || {}
      cb(data)
    });
  }
}