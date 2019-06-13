<template>
  <div class="vue-peopleSelect">
    <div v-if="personSelectType == 'tree'" class="wqFrame-tree-selector fn-search-plain" :usage="usage" :dids="dids" :types="type" :show-search="showSearch"></div>
    <div v-if="personSelectType == 'list'" class="ch-show wqFrameui-chooserList" :dids="listDids" :eids="listEids"></div>
    <div v-if="personSelectType == 'dialog'" class="wqFrameui-chooserList input-group fn-ch-list" show-leave="true" :class="['fn-ch-list-' + key, {'sm' : size === 'sm'}]" :usage="usage" :data-key="key" :types="type" :dids="dids" :eids="eids" :show-search="showSearch" :selected-multi="multi"></div>
    <div v-if="personSelectType == 'form'" :id="personSelectID" class="wqFrame-tree-selector input-group fn-dp-chooser" show-mode="dropdown" :usage="usage" :data-key="key" :types="type" :dids="dids" :eids="eids" :selected-multi="multi"></div>
    <div v-if="personSelectType == 'other'" class="wqFrameui-chooserList input-group selected-list" :class="'fn-ch-list-'+key" :usage="usage" :data-key="key" :types="type" :dids="dids" :eids="eids" :deps="deps" :emps="emps" :show-search="showSearch" :selected-multi="multi"></div>
  </div>
</template>

<script>
export default {
  name: "PersonSelect",
  props: [
    "personSelectType",
    "options",
    "personSelectID",
    "listDataDids",
    "listDataEids",
    "keyIndex",
    "dialogDids",
    "dialogEids",
    "listFirstLoad"
  ],
  data () {
    var that = this;
    return {
      edit: that.options.edit,
      size: that.options.size || 'sm',
      type: that.options.type || "dep",
      multi: that.options.multi || false,
      showSearch: that.options.showSearch || false,
      showLeave: that.options.showLeave || false,
      dids: that.dialogDids ? that.dialogDids : that.options.dids || "",
      eids: that.dialogEids ? that.dialogEids : that.options.eids || "",
      listDids: that.listDataDids || "",
      listEids: that.listDataEids || "",
      autoSelect: that.options.autoSelect || false,
      key: that.keyIndex ? that.keyIndex : that.options.key || "",
      deps: that.options.deps || "",
      emps: that.options.emps || "",
      usage: that.options.usage || "",
      beforeFunction: that.options.beforeFunction || 'undefined'
    };
  },
  mounted () {
    this.init();
  },
  updated () {
    this.init();
  },
  methods: {
    init () {
      var that = this;
      if (that.personSelectType == "tree") {
        setTimeout(function () {
          $(".fn-search-plain").wqChooserTree({
            showMode: "plain",
            autoSelect: that.autoSelect,
            callback: {
              selected: function (data, ele, tId) {
                var dep = data.getDep();
                that.$emit("sel-callback", dep);
              }
            }
          });
        }, 200);
      } else if (that.personSelectType == "list") {
        console.log(that.listFirstLoad);
        // if (that.listFirstLoad) {
        $(function () {
          $(".ch-show").wqChooserShow();
        })
        // }
      } else if (that.personSelectType == "dialog") {
        $(() => {
          $(".fn-ch-list-" + that.key).wqChooserList({
            before: that.beforeFunction,
            showLeave: that.showLeave,
            callback: {
              selected: function (data, ele) {
                var dids = data._dids;
                var eids = data._eids;
                that.$emit("getEmps", data.getEmps());
                that.$emit("getDeps", data.getDeps());
                that.$emit("sel-callback", dids, eids, data.key, data);
              }
            }
          });
          if (that.edit === "false") {
            $(".fn-ch-list-" + that.key + " .input-group-btn").hide();
            $(".fn-ch-list-" + that.key + " .fn-list-show-selected").css(
              "background",
              "#eee"
            );
          }
        });
      } else if (that.personSelectType == "form") {
        $(function () {
          $(".fn-dp-chooser").wqChooserTree({
            autoSelect: that.autoSelect,
            callback: {
              selected: function (data, ele, tId) {
                // var dep = data.getDep();
                that.$emit("sel-callback", data);
              }
            }
          });
        });
      } else if (that.personSelectType == "other") {
        var div = "<div class='other-selected'></div>";
        if (!$(".fn-ch-list-" + this.key + " div").hasClass("other-selected")) {
          $(".selected-list").append(div);
        }
        setTimeout(function () {
          $(".fn-ch-list-" + that.key).wqChooserList({
            showLeave: that.showLeave,
            callback: {
              selected: function (data, ele) {
                var dids = data.getDids();
                var eids = data.getEids();
                that.deps = data.getDeps();
                that.emps = data.getEmps();
                that.$emit(
                  "sel-callback",
                  dids,
                  eids,
                  that.deps,
                  that.emps,
                  data.key
                );
              }
            }
          });
        }, 200);
        that.otherInit();
      }
    },
    otherInit () {
      var p = '';
      if (this.dids) {
        if (this.dids.length === 1) {
          p = "<p class='departmentNum'>" + this.deps[0].name + "</p>";
        } else if (this.dids.length > 1) {
          p = "<p class='departmentNum'>" + this.dids.length + "部门</p>";
        }
        if ($(".other-selected p").hasClass("departmentNum")) {
          $(".departmentNum").remove();
          $(".other-selected").prepend(p);
        } else {
          $(".other-selected").prepend(p);
        }
      }
      if (this.eids) {
        if (this.eids.length === 1) {
          p = "<p class='personNum'>" + this.emps[0].name + "</p>";
        } else if (this.eids.length > 1) {
          p = "<p class='personNum'>" + this.eids.length + "人</p>";
        }
        if ($(".other-selected p").hasClass("personNum")) {
          $(".personNum").remove();
          $(".other-selected").prepend(p);
        } else {
          $(".other-selected").prepend(p);
        }
      }
    }
  },
  watch: {
    listDataDids: {
      handler (newValue, oldValue) {
        this.listDids = newValue;
        this.$nextTick(function () {
          $(".ch-show").wqChooserShow();
        });
      }
    },
    listDataEids: {
      handler (newValue, oldValue) {
        this.listEids = newValue;
        this.$nextTick(function () {
          $(".ch-show").wqChooserShow();
        });
      }
    },
    "options.autoSelect": {
      handler (newValue, oldValue) {
        console.log(newValue);
        this.autoSelect = newValue;
      }
    },
    "options.dids": {
      handler (newValue, oldValue) {
        if (typeof newValue === "string" || typeof newValue === "number") {
          if (newValue.toString().indexOf(",") > 0) {
            newValue = newValue.split(",") || [];
          } else {
            newValue = [newValue];
          }
        }
        if (
          newValue != undefined &&
          this.personSelectType == "other" &&
          newValue.length != 0
        ) {
        } else {
          $(".departmentNum").remove();
        }
        if (this.type === 'dep') {
          $(".fn-ch-list-" + this.key).wqChooserList('setValues', { dids: newValue })
        }
        this.dids = newValue;
      }
    },
    "options.eids": {
      handler (newValue, oldValue) {
        if (typeof newValue === "string" || typeof newValue === "number") {
          if (newValue.toString().indexOf(",") > 0) {
            newValue = newValue.split(",") || [];
          } else {
            newValue = [newValue];
          }
        }
        if (
          newValue != undefined &&
          this.personSelectType == "other" &&
          newValue.length != 0
        ) {
        } else {
          $(".personNum").remove();
        }
        this.eids = newValue;
      }
    },
    "options.edit": {
      handler (val) {
        this.edit = val;
        if (val === "false") {
          $(".fn-ch-list-" + this.key + " .input-group-btn").hide();
          $(".fn-ch-list-" + this.key + " .fn-list-show-selected").css(
            "background",
            "#eee"
          );
        } else {
          $(".fn-ch-list-" + this.key + " .input-group-btn").show();
          $(".fn-ch-list-" + this.key + " .fn-list-show-selected").css(
            "background",
            "#fff"
          );
        }
      }
    }
  }
};
</script>

<style lang="less">
.wqFrameui-dialog-selectTree .wqFrameui-searchBar {
  button.fn-ch-search-btn {
    top: 4px;
  }
}
.vue-peopleSelect {
  height: 100%;
  .fn-search-plain {
    padding-bottom: 70px;
  }
  .fn-list-ch-dialog {
    padding: 0px 12px;
  }
  .wqFrameui-chooserList .form-control {
    border: none;
  }
  .fn-ch-list {
    border: 1px solid #e8e9ea;
    overflow: hidden;
  }
  .wqFrame-tree-selector {
    height: 100%;
    width: 100%;
    padding-bottom: 0;
  }
  .personNum,
  .departmentNum {
    display: inline-block;
    margin: 0;
    height: 38px;
    padding-left: 5px;
  }
  .selected-list ul {
    left: -300px;
    max-height: 38px;
    overflow: hidden;
  }
  .other-selected {
    border: 1px solid #e8e9ea;
    border-radius: 4px;
    height: 38px;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .other-selected .input-group-btn {
    max-height: 38px;
    overflow: hidden;
  }
  .ch-fn-search {
    position: absolute;
    width: 90%;
    top: -10px;
    box-sizing: border-box;
  }
  .wqFrameui-searchBar button.wqFrame-search {
    right: -14px;
    top: 25px;
  }
  .fn-search-plain .fn-ch-search-input {
    margin-top: 20px;
    margin-left: 15px;
  }
  .ch-fn-search .input-group {
    display: block;
  }
  .wqFrameui-dialog-panelH {
    padding-top: 60px;
  }
  .wqFrameui-searchBar input.form-control {
    min-width: auto;
  }
  .ch-show.wqFrameui-chooserList {
    max-height: 60px;
  }
  #wqChooser {
    width: 100%;
    height: 100%;
    padding: 12px;
    overflow: hidden;
  }
  #wqChooser .ch-fn-search {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  #wqChooser .ch-fn-search .input-group {
    display: block;
  }
}
</style>
