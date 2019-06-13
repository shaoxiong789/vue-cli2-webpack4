<template functional>
  <div style="height:100%;">
    <div v-if="personType === 'dialog'">
      <div @click="initDialogData">
        <slot name="show">
          <wq-person-show :autoSize="autoSize" :edit="edit" :result="result" :type="type" :size="size" :placeholder="placeholder"></wq-person-show>
        </slot>
      </div>
      <!-- <keep-alive> -->
      <!-- <wq-person-show :autoSize="autoSize" :edit="edit" :result="result" :type="type" @add-person="initDialogData" :size="size" :placeholder="placeholder"></wq-person-show> -->
      <wq-person-selection ref="wqPersonSelect" :title="title" :hasEmp="hasEmp" :loadAll="loadAll" :treeData="treeList" :showSearch="showSearch" :multiSelect="multiSelect" :type="type" :showHigherBtn="showHigherBtn" @saveSuccess="saveSuccess" :dialog.sync="dialogShow" v-model="result" :getEmps="getEmpsInDep" :save="save" :searchList="querySearch" :searchCondition="searchCondition" :remoteCondition="remoteCondition"></wq-person-selection>
      <!-- </keep-alive> -->
    </div>
    <div v-if="personType === 'tree'" style="height:100%;">
      <wq-person-tree :autoSelect="autoSelect" :selectDid="selectDid" style="height:100%;" :expand="expand" :treeData="treeList" :showSearch="showSearch" @handleNodeClick="handleNodeClick"></wq-person-tree>
    </div>
    <div v-if="personType === 'select'">
      <wq-person-dropdown :showSearch="showSearch" :edit="!edit" :autoSelect="autoSelect" :size="size" :treeData="treeList" v-model="dropdownValue" :placeholder="placeholder"></wq-person-dropdown>
    </div>
    <div v-if="personType === 'jList'" style="overflow:hidden;text-overflow: ellipsis;white-space: nowrap;" :title="listText">
      <span>{{listText}}</span>
    </div>
    <div v-if="personType === 'vList'" style="overflow:hidden;text-overflow: ellipsis;white-space: nowrap;" :title="listText">
      <span>{{listText}}</span>
    </div>
  </div>
</template>

<script>
import personApi from "@/common/services/personServer";
import http from "@/common/services/http";
// import lodash from 'lodash';
import { xorArray } from "@/common/utils/utils";
export default {
  name: "wqPersonSelect",
  props: {
    title: {
      type: String
    },
    personType: {
      type: String,
      default: "dialog"
    },
    options: {
      type: Object,
      default () {
        return {};
      }
    },
    treeData: {
      type: Array,
      default () {
        return [];
      }
    },
    value: {
      type: Object,
      default () {
        return {};
      }
    },
    index: {
      type: Number
    },
    bid: {
      type: String
    },
    listType: {
      type: String,
      default: "dep"
    },
    listData: {
      type: Array,
      default () {
        return [];
      }
    },
    remote: {
      type: Boolean,
      default: false
    },
    loadPerson: {
      type: Boolean,
      default: false
    },
    personData: {
      type: Array,
      default () {
        return [];
      }
    },
    scopeData: {
      type: Object,
      default () {
        return {};
      }
    },
    extend: {
      type: Object,
      default () {
        return {};
      }
    },
    batchBids: {
      type: Array,
      default () {
        return [];
      }
    },
    bids: {
      type: Array,
      default () {
        return [];
      }
    },
    eids: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  data () {
    return {
      treeList: this.treeData,
      expand: true,
      selectDid: this.options.did || 0,
      size: this.options.size || "medium", // 控制大小, 参数medium, large
      edit: this.options.edit || false, // 是否可编辑
      showSearch: this.options.showSearch || false, // 是否可搜索
      multiSelect: this.options.multiSelect || false, // 是否多选
      autoSize: this.options.autoSize || false, // 显示样式 参数false, true, {maxRows: 1}
      autoSelect: this.options.autoSelect || false, // 是否默认选择
      type: this.options.type || "dep", // 选择器类型 参数dep, emp, dep,emp
      usage: this.options.usage || "", // 权限
      scene: this.options.scene || "", // 高级搜索权限
      hasEmp: this.options.hasEmp || false, // 获取部门下的人员信息,
      loadAll: false, // 获取部门下的人员信息
      placeholder: this.options.placeholder || "", // 提示语,
      defaultProps: this.options.defaultProps || {},
      workStatues: this.options.workStatues, // 人员工作状态 all on off
      showHigherBtn: false,
      dialogShow: false,
      result: {
        deps: [],
        emps: [],
        conds: [],
        selectDeps: [],
        selectEmps: [],
        dids: [],
        eids: [],
        key: this.options.key || '',
        selected: false
      },
      dropdownValue: {},
      listText: "",
      extendPro: this.extend
    };
  },
  mounted () {
    window.sessionStorage.setItem("usage", "");
    window.sessionStorage.setItem("scene", "");
    if (typeof this.options.expand === "boolean") {
      this.expand = this.options.expand;
    }
    if (
      (this.personType === "tree" || this.personType === "select") &&
      this.treeData.length === 0
    ) {
      this.initTreeData();
    }
    if (this.personType === "dialog") {
      if (
        (this.value.selectDeps && this.value.selectDeps.length) ||
        (this.value.selectEmps && this.value.selectEmps.length)
      ) {
        this.value["selected"] = true;
        this.value.key = this.options.key || '';
        this.result = this.value;
      } else if (this.value.dids || this.value.eids) {
        this.getDepsEmpsByDIdEid(this.value);
      } else if (this.autoSelect) {
        var param = {
          usage: this.usage,
          modes: this.type
        };
        personApi.getTreeData(param, data => {
          window.sessionStorage.setItem("treeData", JSON.stringify(data));
          window.sessionStorage.setItem("usage", this.usage);
          window.sessionStorage.setItem("treeKey", this.options.key || '');
          this.treeList = data;
          var result = {
            'key': this.options.key || '',
            'cond': []
          };
          if (data.length) {
            result['selected'] = true;
          }
          var treeSelectNode = {};
          for (var item in data[0]) {
            if (item !== 'children') {
              treeSelectNode[item] = data[0][item];
            }
          }
          if (treeSelectNode.type === 2) {
            result['dids'] = [treeSelectNode.did];
            result['deps'] = [treeSelectNode];
            result['selectDeps'] = [treeSelectNode];
          } else {
            result['eids'] = [treeSelectNode.eid];
            result['emps'] = [treeSelectNode];
            result['selectEmps'] = [treeSelectNode];
          }
          this.result = result;
        });
      }
    }
    if (this.personType === "select") {
      if (this.value.name) {
        this.dropdownValue = this.value;
      } else if (this.value.did) {
        this.getDepsEmpsByDIdEid(this.value);
      }
    }
    if (this.personType === "jList") {
      // console.log(this.listData);
      if (
        this.listData.length > 0 &&
        this.remote &&
        (this.index === 0 || this.loadPerson)
      ) {
        var dids = [];
        var eids = [];
        this.listData.forEach(item => {
          if (this.defaultProps.dids.indexOf(".") >= 0) {
            dids = xorArray(
              dids,
              this.getPersonKey(this.defaultProps.dids.split("."), item) || []
            );
          } else {
            if (Array.isArray(item[this.defaultProps.dids])) {
              dids = xorArray(dids, item[this.defaultProps.dids] || []);
            } else {
              if (item[this.defaultProps.dids]) {
                dids = xorArray(dids, [item[this.defaultProps.dids]])
              } else {
                dids = xorArray(dids, []);
              }
            }
          }
          if (this.defaultProps.eids.indexOf(".") >= 0) {
            eids = xorArray(
              eids,
              this.getPersonKey(this.defaultProps.eids.split("."), item) || []
            );
          } else {
            if (Array.isArray(item[this.defaultProps.eids])) {
              eids = xorArray(eids, item[this.defaultProps.eids] || []);
            } else {
              if (item[this.defaultProps.eids]) {
                eids = xorArray(eids, [item[this.defaultProps.eids]])
              } else {
                eids = xorArray(eids, []);
              }
            }
          }
        });
        if (dids.length || eids.length) {
          this.getPersonData(dids, eids);
        }
      }
    }
    if (this.personType === "vList") {
      if (Object.keys(this.scopeData).length) {
        this.initSelectInfo(this.scopeData);
      } else {
        if (this.listData.length > 0 && this.index === 0) {
          var bids = [];
          this.listData.forEach(item => {
            bids.push(item.bid);
          });
          this.getChooserScopes(bids);
        }
      }
    }
  },
  watch: {
    options: {
      handler (val) {
        this.result.key = this.options.key || '';
        if (val.treeData) {
          this.treeList = val.treeData;
        }
        if (typeof this.options.expand === "boolean") {
          this.expand = val.expand;
        }
        if (val.did && this.personType === "tree") {
          console.log(val.did);
          this.selectDid = val.did;
        }
        this.edit = val.edit;
        this.scene = val.scene;
      },
      deep: true
    },
    result: {
      handler (newVal, oldVal) {
        if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
          this.$emit("input", newVal);
          // this.$emit("change");
        }
        // this.$emit("input", newVal);
        if (newVal) {
          this.$emit("change");
        }
        // if (this.autoSelect) {
        //   this.$emit('autoSelect');
        // }
      },
      deep: true
    },
    value: {
      handler (val) {
        if (this.personType === "dialog") {
          if (
            (val.selectDeps && val.selectDeps.length > 0) ||
            (val.selectEmps && val.selectEmps.length > 0)
          ) {
            val["selected"] = true;
            this.result = val;
          } else if ((val.dids && val.dids.length) || (val.eids && val.eids.length)) {
            this.getDepsEmpsByDIdEid(val);
          } else {
            this.result = {
              deps: [],
              emps: [],
              conds: [],
              selectDeps: [],
              selectEmps: [],
              dids: [],
              eids: [],
              selected: false,
              key: this.options.key || ''
            };
          }
        }
        if (this.personType === "select") {
          if (val.name) {
            this.dropdownValue = val;
          } else if (val.did) {
            this.getDepsEmpsByDIdEid(val);
          }
        }
      },
      deep: true
    },
    dropdownValue: {
      handler (val) {
        this.$emit("input", val);
        this.$emit("update:did", val.did);
        this.$emit("change");
      },
      deep: true
    },
    listData: {
      handler (val) {
        if (this.personType === "jList") {
          if (
            val.length > 0 &&
            this.remote &&
            (this.index === 0 || this.loadPerson)
          ) {
            var dids = [];
            var eids = [];
            val.forEach(item => {
              if (this.defaultProps.dids.indexOf(".") >= 0) {
                dids = xorArray(
                  dids,
                  this.getPersonKey(this.defaultProps.dids.split("."), item) ||
                  []
                );
              } else {
                if (Array.isArray(item[this.defaultProps.dids])) {
                  dids = xorArray(dids, item[this.defaultProps.dids] || []);
                } else {
                  if (item[this.defaultProps.dids]) {
                    dids = xorArray(dids, [item[this.defaultProps.dids]])
                  } else {
                    dids = xorArray(dids, []);
                  }
                }
              }
              if (this.defaultProps.eids.indexOf(".") >= 0) {
                eids = xorArray(
                  eids,
                  this.getPersonKey(this.defaultProps.eids.split("."), item) ||
                  []
                );
              } else {
                if (Array.isArray(item[this.defaultProps.eids])) {
                  eids = xorArray(eids, item[this.defaultProps.eids] || []);
                } else {
                  if (item[this.defaultProps.eids]) {
                    eids = xorArray(eids, [item[this.defaultProps.eids]])
                  } else {
                    eids = xorArray(eids, []);
                  }
                }
              }
            });
            this.getPersonData(dids, eids);
          }
        } else {
          if (val.length > 0 && this.index === 0) {
            var bids = [];
            val.forEach(item => {
              bids.push(item.bid);
            });
            this.getChooserScopes(bids);
          }
        }
      },
      deep: true
    },
    personData: {
      handler (val) {
        var dids = "";
        var eids = "";
        if (this.defaultProps.dids.indexOf(".") >= 0) {
          dids = this.getPersonKey(
            this.defaultProps.dids.split("."),
            this.listData[this.index]
          );
        } else {
          dids = this.listData[this.index][this.defaultProps.dids] || "";
        }
        if (this.defaultProps.eids.indexOf(".") >= 0) {
          eids = this.getPersonKey(
            this.defaultProps.eids.split("."),
            this.listData[this.index]
          );
        } else {
          eids = this.listData[this.index][this.defaultProps.eids] || "";
        }
        var listText = "";
        if (Array.isArray(dids)) {
          val.forEach((item, itemIndex) => {
            if (dids.indexOf(item.did) >= 0) {
              listText = listText + item.name + "、";
            }
          });
        } else {
          val.forEach((item, itemIndex) => {
            if (dids === item.did && item.type === 2) {
              listText = listText + item.name + "、";
            }
          });
        }
        if (Array.isArray(eids)) {
          val.forEach((item, itemIndex) => {
            if (eids === item.eid) {
              listText = listText + item.name + "、";
            }
          });
        } else {
          val.forEach((item, itemIndex) => {
            if (eids === item.eid) {
              listText = listText + item.name + "、";
            }
          });
        }
        var listArr = listText.split("、");
        listArr = listArr.splice(0, listArr.length - 1);
        this.listText = listArr.join("、");
      },
      deep: true
    },
    scopeData: {
      handler (val) {
        this.initSelectInfo(val);
      },
      deep: true
    },
    extend: {
      handler (val) {
        this.extendPro = val;
        if (val.type === "customTree") {
          this.loadAll = true;
        }
      },
      deep: true
    }
  },
  methods: {
    getPersonKey (arr, data) {
      var val = data;
      arr.forEach(item => {
        if (typeof val[item] === "string" && val[item].indexOf("{") === 0) {
          val = JSON.parse(val[item]) || {};
        } else {
          val = val[item] || {};
        }
      });
      if (JSON.stringify(val) === "{}") {
        return "";
      } else {
        return val;
      }
    },
    initSelectInfo (value) {
      this.listText = "";
      var val = value[this.bid] || {
        deps: [],
        emps: [],
        conds: [],
        selectDeps: [],
        selectEmps: [],
        dids: [],
        eids: []
      };
      var conds = val.conds || [];
      val.selectDeps.forEach((dep, depIndex) => {
        if (depIndex === val.selectDeps.length - 1) {
          this.listText = this.listText + dep.name;
        } else {
          this.listText = this.listText + dep.name + "、";
        }
      });
      if (
        conds.length === 0 &&
        this.listType.indexOf("emp") >= 0 &&
        val.selectDeps.length > 0
      ) {
        // this.listText = this.listText + '(' + this.$t('el.wq.allEmployee') + ')';
        if (val.selectEmps.length > 0) {
          this.listText = this.listText + "、";
        }
      }
      if (val.selectDeps) {
        conds.forEach((con, conIndex) => {
          if (conIndex === 0) {
            this.listText = this.listText + "(";
          }
          con.condData.forEach((dataItem, dataIndex) => {
            if (dataIndex === con.condData.length - 1) {
              if (conIndex !== conds.length - 1) {
                this.listText = this.listText + dataItem.v + "+";
              } else {
                this.listText = this.listText + dataItem.v;
              }
            } else {
              this.listText = this.listText + dataItem.v + "、";
            }
          });
          if (conIndex === conds.length - 1) {
            if (val.selectEmps.length > 0) {
              this.listText = this.listText + ")、";
            } else {
              this.listText = this.listText + ")";
            }
          }
        });
      }
      val.selectEmps.forEach((emp, empIndex) => {
        if (empIndex === val.selectEmps.length - 1) {
          this.listText = this.listText + emp.name;
        } else {
          this.listText = this.listText + emp.name + "、";
        }
      });
    },
    saveSuccess (result) {
      this.$emit("saveSuccess", result);
    },
    getPersonData (dids, eids) {
      var param = {
        dids: dids,
        eids: eids
      };
      personApi.getShowValues(param, data => {
        this.$emit("update:personData", data);
      });
    },
    getChooserScopes (bids) {
      var param = {
        bids: bids.join(","),
        scene: this.scene,
        workStatuses: this.workStatues
      };
      personApi.getChooserScopes(param, data => {
        this.$emit("update:scopeData", data);
      });
    },
    getDepsEmpsByDIdEid (val) {
      var param = {
        dids: val.dids || val.did || "",
        eids: val.eids
      };
      personApi.getShowValues(param, data => {
        if (this.personType === "dialog") {
          var result = {
            deps: [],
            emps: [],
            conds: [],
            selectDeps: [],
            selectEmps: [],
            dids: [],
            eids: [],
            selected: false,
            key: this.options.key || ''
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
            this.result = result;
          }
        }
        if (this.personType === "select") {
          this.dropdownValue = data[0];
        }
      });
    },
    initTreeData () {
      var param = {
        usage: this.usage,
        modes: this.type
      };
      personApi.getTreeData(param, data => {
        this.treeList = data;
      });
    },
    handleNodeClick (node) {
      this.$emit("handleNodeClick", node);
    },
    initDialogData () {
      if (!this.edit) {
        return;
      }
      this.$nextTick(() => {
        this.dialogShow = true;
      })
      this.initSwitch();
      var param = {};
      if (this.extendPro.type === "customTree") {
        var scene = window.sessionStorage.getItem("scene");
        var treeDataExtend =
          JSON.parse(window.sessionStorage.getItem("treeDataExtend")) || [];
        if (scene && scene === this.scene && treeDataExtend.length) {
          // this.treeList = treeDataExtend;
          return;
        }
        param = {
          scene: this.scene,
          hasSub: this.extendPro.hasSub,
          bids: this.extendPro.bids,
          bidsRemove: this.extendPro.bidsRemove,
          modes: this.type.split(",")
        };
        personApi.treeDataExtend(param, data => {
          window.sessionStorage.setItem("treeDataExtend", JSON.stringify(data));
          this.treeList = data;
        });
      } else {
        var usage = window.sessionStorage.getItem("usage");
        var treeData =
          JSON.parse(window.sessionStorage.getItem("treeData")) || [];
        var treeKey = window.sessionStorage.getItem("treeKey");
        var optionKey = this.options.key || '';
        if (usage && usage === this.usage && treeData.length && treeKey === optionKey) {
          this.treeList = [];
          console.log(this.$refs.wqPersonSelect);
          this.$refs.wqPersonSelect.clearClickDeps();
          setTimeout(() => {
            this.treeList = treeData;
          }, 0);
          return;
        }
        param = {
          usage: this.usage,
          modes: this.type
        };
        personApi.getTreeData(param, data => {
          window.sessionStorage.setItem("treeData", JSON.stringify(data));
          window.sessionStorage.setItem("usage", this.usage);
          window.sessionStorage.setItem("treeKey", this.options.key || '');
          this.treeList = data;
        });
      }
    },
    initSwitch () {
      if (this.scene) {
        var scene = window.sessionStorage.getItem("scene");
        if (scene && scene === this.scene) {
          this.showHigherBtn =
            window.sessionStorage.getItem("showHigherBtn") === "true";
          return;
        }
        var param = {
          scene: this.scene
        };
        personApi.getStrategySwitch(param, data => {
          window.sessionStorage.setItem("scene", this.scene);
          window.sessionStorage.setItem("showHigherBtn", data.rule || false);
          this.showHigherBtn = data.rule;
        });
      }
    },
    remoteCondition (query, cb) {
      var param = {
        key: query.key
      };
      http.get(query.url, param).then(data => {
        var searchData = data.data.data;
        cb(searchData);
      });
    },
    save (query, cb) {
      var param = {
        depData: {
          dids: query.dids,
          eids: query.eids
        },
        data: query.data
      };
      personApi.getCondsEmps(param, data => {
        cb(data);
      });
    },
    searchCondition (query, cb) {
      var param = {
        dids: query.dids,
        scene: this.scene
      };
      personApi.getChooserCond(param, data => {
        cb(data);
      });
    },
    getEmpsInDep (queryString, cb) {
      var param = {
        usage: this.usage,
        did: queryString.did
      };
      personApi.getTreeEmpsInDep(param, data => {
        cb(data);
      });
    },
    querySearch (queryString, cb) {
      var param = {
        usage: this.usage,
        modes: this.type,
        queryString: queryString,
        workStatus: this.workStatues
      };
      personApi.getSearch(param, data => {
        cb(data);
      });
    }
  }
};
</script>
