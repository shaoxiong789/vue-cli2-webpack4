<template>
  <wq-person-selection :title="title" :treeData="treeList" :showSearch="showSearch" :multiSelect="multiSelect" :type="type" :showHigherBtn="showHigherBtn" @saveSuccess="saveSuccess" :dialog.sync="dialogShow" @close="close" v-model="result" :getEmps="getEmpsInDep" :save="save" :searchList="querySearch" :searchCondition="searchCondition" :remoteCondition="remoteCondition"></wq-person-selection>
</template>

<script>
import personApi from '@/common/services/personServer'
import http from '@/common/services/http'
export default {
  name: 'wqPersonDialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: {}
    },
    treeData: {
      type: Array,
      default: []
    },
    value: {
      type: Object,
      default: {}
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      treeList: this.treeData,
      showSearch: this.options.showSearch || false, // 是否可搜索
      multiSelect: this.options.multiSelect || false, // 是否多选
      autoSelect: this.options.autoSelect || false, // 是否默认选择
      type: this.options.type || 'dep', // 选择器类型 参数dep, emp, dep,emp
      usage: this.options.usage || '', // 权限
      scene: this.options.scene || '', // 高级搜索权限
      defaultProps: this.options.defaultProps || {},
      showHigherBtn: false,
      dialogShow: this.show,
      result: {
        deps: [],
        emps: [],
        conditions: [],
        selectDeps: [],
        selectEmps: [],
        dids: [],
        eids: [],
        selected: false
      }
    }
  },
  created () {
    if ((this.value.selectDeps && this.value.selectDeps.length > 0) || (this.value.selectEmps && this.value.selectEmps.length > 0)) {
      this.value['selected'] = true;
      this.result = this.value;
    } else if (this.value.dids || this.value.eids) {
      this.getDepsEmpsByDIdEid(this.value);
    }
  },
  watch: {
    'result': {
      handler (newVal, oldVal) {
        this.$emit('input', newVal);
        this.$emit('change');
      },
      deep: true
    },
    'value': {
      handler (val) {
        if ((val.selectDeps && val.selectDeps.length > 0) || (val.selectEmps && val.selectEmps.length > 0)) {
          val['selected'] = true;
          this.result = val;
        } else if (val.dids || val.eids) {
          this.getDepsEmpsByDIdEid(val);
        }
      },
      deep: true
    }
  },
  methods: {
    saveSuccess (result) {
      this.$emit('saveSuccess', result);
    },
    initDialogData () {
      this.dialogShow = true;
      this.initSwitch();
      var param = {
        'usage': this.usage,
        'modes': this.type
      }
      personApi.getTreeData(param, (data) => {
        this.treeList = data
      });
    },
    initSwitch () {
      if (this.scene) {
        var param = {
          'scene': this.scene
        }
        personApi.getStrategySwitch(param, (data) => {
          this.showHigherBtn = data.rule;
        });
      }
    },
    getDepsEmpsByDIdEid (val) {
      var param = {
        'dids': val.dids || val.did || '',
        'eids': val.eids
      }
      personApi.getShowValues(param, (data) => {
        var result = {
          deps: [],
          emps: [],
          conditions: [],
          selectDeps: [],
          selectEmps: [],
          dids: [],
          eids: [],
          selected: false
        };
        for (var item of data) {
          if (item.type == 2) {
            result.selectDeps.push(item);
            result.dids.push(item.did);
          } else {
            result.selectEmps.push(item);
            result.eids.push(item.eid);
          }
        }
        result.emps = result.selectEmps;
        result.deps = result.selectDeps;
        if (result.emps.length > 0 || result.deps.length > 0) {
          result.selected = true;
        }
        this.result = result;
      });
    },
    remoteCondition (query, cb) {
      var param = {
        'key': query.key
      }
      http.get(query.url, param).then(data => {
        var searchData = data.data.data;
        cb(searchData)
      })
    },
    save (query, cb) {
      var param = {
        'depData': {
          dids: query.dids,
          eids: query.eids
        },
        'data': query.data
      }
      personApi.getCondsEmps(param, (data) => {
        cb(data)
      });
    },
    searchCondition (query, cb) {
      var param = {
        'dids': query.dids,
        'scene': this.scene
      }
      personApi.getChooserCond(param, (data) => {
        cb(data)
      });
    },
    getEmpsInDep (queryString, cb) {
      var param = {
        'usage': this.usage,
        'did': queryString.did
      }
      personApi.getTreeEmpsInDep(param, (data) => {
        cb(data);
      });
    },
    querySearch (queryString, cb) {
      var param = {
        'usage': this.usage,
        'modes': this.type,
        'queryString': queryString
      }
      personApi.getSearch(param, (data) => {
        cb(data)
      });
    }
  }
}
</script>

<style lang="less">
</style>
