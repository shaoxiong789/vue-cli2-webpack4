<template>
<el-popover placement="bottom-start" trigger="manual" popper-class="tree-select-popover" v-model="visible">
    <el-tree class="common-tree" ref="tree" :data="treeData" :props="treeProps"
               :node-key="nodeKey"
               :check-strictly="checkStrictly"
               :filter-node-method="filterNode"
               default-expand-all
               :expand-on-click-node="false"
               :highlight-current="true"
               :check-on-click-node="multiple"
               :defaultCheckedKeys="defaultCheckedKeys"
               @current-change="handleNodeChange"
               @check-change="handleCheckChange"
               @node-expand="nodeExpand"
               @node-collapse="nodeExpand"
               >
        <span class="custom-tree-node" slot-scope="{ node }" >
        <span>
            <span class="button ico_open" v-if="node.childNodes.length>0"></span>
            <span>{{ node.label }}</span>
        </span>
        <i v-if="isSelected(node)" class="el-icon-circle-check" style="color: #3782F2;"></i>
        </span>
    </el-tree>
    <div class="el-select select-tree" @mouseover="mouseover" @mouseleave="mouseleave" @click.stop="toggleMenu" slot="reference">
        <div class="el-select__tags" style="width: 100%; max-width: 208px;">
            <span v-if="multiple">
                <span class="el-tag el-tag--info el-tag--small"  v-if="options.length>0">
                    <span class="el-select__tags-text" :title="options[0].label">{{options[0].label.length>8?options[0].label.substr(0,8)+'...':options[0].label}}</span>
                    <i class="el-tag__close el-icon-close" @click="tagClose(options[0].value)"></i>
                </span>
                <span class="el-tag el-tag--info el-tag--small" v-if="options.length>1">
                    <span class="el-select__tags-text">+ {{options.length}}</span>
                </span>
            </span>
            <!-- 此处用来搜索 -->
            <!-- 搜索有坑，tree的坑 -->
            <input type="text" @compositionstart="composition = 1" @compositionend="composition = 0" @input="queryChange" v-model="selectedlabel" :readonly="readonly" @blur="handleBlur" ref="input" autocomplete="off" class="el-select__input" style="flex-grow: 1; width: 0.0961538%; max-width: 198px;">
        </div>
        <el-input @blur="handleBlur" @focus="handleFocus" :readonly="true" :class="visible?'is-focus':''" ref="reference">
          <template slot="suffix">
            <i v-if="hover" @click.stop="closeSelect" style="    z-index: 10;" class="el-select__caret el-input__icon el-icon-circle-close-outline is-reverse"></i>
            <i v-else style="    z-index: 10;" class="el-select__caret el-input__icon el-icon-arrow-down is-reverse"></i>
          </template>
        </el-input>
       
    </div>

    </el-popover>
</template>
<script>
// import { t } from 'base-ui/src/locale';
// import clone from 'clone';
// import { isIE, isEdge } from 'element-ui/src/utils/util';
export default {
  name: 'selectTree',
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    placeholder: {
      type: String,
      default() {
        // return t('el.select.placeholder');
        return '请选择';
      }
    },
    // 配置是否可多选
    multiple: {
      type: Boolean,
      default() {
        return false;
      }
    },
    disabled: {
      type: Boolean,
      default() {
        return false;
      }
    },
    // 显示复选框情况下，是否严格遵循父子不互相关联
    checkStrictly: {
      type: Boolean,
      default() {
        return false;
      }
    },
    nodeKey: String,
    filterable: Boolean,
    automaticDropdown: Boolean,
    defaultProps: {
      type: Object,
      default() {
        return {
          lable: 'title'
        };
      }
    },
    value: [String, Array]
  },
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  watch: {
    visible(val) {
      if (!val) {
        this.menuVisibleOnFocus = false;
      }
    },
    options(val) {
      console.log('options', val);
      if (this.multiple) {
        const value = val.map((item) => {
          return item.value;
        });
        this.$emit('input', value);
      } else {
        if (val.length > 0) {
          this.$emit('input', val[0].value);
        } else {
          this.$emit('input', '');
        }
      }
    },
    filtertext(val) {
      this.$refs.tree.filter(val);
    }
  },
  data() {
    return {
      visible: false,
      menuVisibleOnFocus: false,
      isSilentBlur: false,
      minWidth: '',
      defaultCheckedKeys: [],
      multipleVisibleOnFocus: false,
      selectedData: [],
      selectedlabel: '',
      options: [],
      composition: 0,
      filtertext: '',
      hover: false
    };
  },
  computed: {
    selectDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
    readonly() {
      return !this.filterable;
    },
    treeData() {
      return this.data;
    },
    treeProps() {
      const children = this.defaultProps.children;
      const parentDisabled = this.parentDisabled;
      return {
        ...this.defaultProps,
        disabled(data, node) {
          // console.log(data);
          if (parentDisabled) {
            if (data[children] && (data[children].length > 0)) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
      };
    }
  },
  mounted() {
    console.log('初始化');
    if (this.multiple) {
      if (this.value.length > 0) {
        console.log(this.multiple, this.value);
        this.value.forEach((key) => {
          this.$refs.tree.setChecked(key, true, true);
        });
      }
    } else {
      if (this.value) {
        if (!this.value == '00000000000000000000000000000000') {
          this.$refs.tree.setCurrentKey(this.value);
          this.handleNodeChange();
        }
      }
    }
  },
  methods: {
    closeSelect() {
      if (this.multiple) {
        if (this.value.length > 0) {

        }
      } else {
        if (this.value) {
          console.log('清空');
          this.$refs.tree.setCurrentKey(null);
        }
      }
    },
    mouseover() {
      this.hover = true;
    },
    mouseleave() {
      this.hover = false;
    },
    openWindow() {
      console.log('openWindow');
    },
    filterNode(value, data) {
      console.log('filterNode', value, data);
      if (!value) return true;
      return data.title.indexOf(value) !== -1;
    },
    refreshChecked(keys) {
      if (this.multiple) {
        if (this.value.length > 0) {
          this.value.forEach((key) => {
            this.$refs.tree.setChecked(key, true, true);
          });
        }
      }
      if (this.multiple && keys) {
        keys.forEach((key) => {
          this.$refs.tree.setChecked(key, true, true);
        });
      }
    },
    queryChange(e) {
      if (!this.composition) {
        console.log(this.selectedlabel);
        this.filtertext = this.selectedlabel;
      }
    },
    tagClose(value) {
      this.$refs.tree.setChecked(value, false, true);
    },
    isSelected(node) {
      if (node.checked) {
        return true;
      } else {
        return node.key === this.value;
      }
    },
    handleNodeChange(data, node1) {
      if (!this.multiple) {
        let tmpMap = {};
        this.$nextTick(() => {
          let key = this.$refs.tree.getCurrentKey();
          if (!key) {
            return;
          }
          var node = this.$refs.tree.getNode(key);
          tmpMap.value = node.key;
          tmpMap.label = node.label;
          this.options = [];
          this.options.push(tmpMap);
          this.selectedlabel = node.label;
        })
      }
      console.log('handleNodeClick');
    },
    handleCheckChange(data, node1) {
      console.log(node1, 'node1');
      if (this.multiple) {
        this.$nextTick(() => {
          let checkedKeys = this.$refs.tree.getCheckedKeys(); // 所有被选中的节点的 key 所组成的数组数据
          console.log('checkedKeys', this.defaultCheckedKeys, checkedKeys);
          this.options = checkedKeys.map((item) => {
            var node = this.$refs.tree.getNode(item); // 所有被选中的节点对应的node
            let tmpMap = {};
            tmpMap.value = node.key;
            tmpMap.label = node.label;
            return tmpMap;
          });
        });
      } else {
        let checkedKeys = this.$refs.tree.getCheckedKeys();
        console.log(checkedKeys);
      }

      if (this.visible) {
        // 标识点击了多选项
        this.multipleVisibleOnFocus = true;
        (this.$refs.input || this.$refs.reference).focus();
      }
    },
    nodeExpand() {
      if (this.visible) {
        // 标识点击了多选项
        this.multipleVisibleOnFocus = true;
        (this.$refs.input || this.$refs.reference).focus();
      }
    },
    handleBlur(event) {
      setTimeout(() => {
        console.log('handleBlur', this.multipleVisibleOnFocus);
        if (!this.multipleVisibleOnFocus) {
          this.visible = false;
        }
        this.multipleVisibleOnFocus = false;
        if (this.filtertext) {
          this.filtertext = '';

          this.handleNodeChange();
          if (this.multiple) {
            this.selectedlabel = '';
          }
        }
      }, 150);
    },
    // 获取焦点
    handleFocus(event) {
      console.log('Focus');
      // 如果没有焦点
      if (!this.menuVisibleOnFocus) {
        this.visible = !this.visible;
        this.menuVisibleOnFocus = true;
      }
      if (this.multiple) {
        // 这是多选项并且处于焦点触发状态
        // this.multipleVisibleOnFocus = true;
      }
      this.$emit('focus', event);
    },
    toggleMenu() {
      console.log(12);
      if (!this.menuVisibleOnFocus) {
        this.visible = !this.visible;
        this.menuVisibleOnFocus = true;
        if (this.visible) {
          (this.$refs.input || this.$refs.reference).focus();
        }
      }
      if (this.filterable) {
        this.$refs.input.setSelectionRange(0, this.selectedlabel.length);
      }
    }
  }
};
</script>
<style>
.tree-select-popover{
    min-width: 250px;
}
.select-tree.el-input__suffix{
  z-index: 10;
}
.select-tree{
  min-width: 250px;

}
.select-tree input[readonly=readonly]{
  /* cursor: pointer; */
}
 .common-tree{
    overflow: auto;
    margin: -12px;
    padding: 6px 0;
  }
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 20px;
  }
  .button{
    width: 20px;
    height: 16px;
    padding-right: 3px;
    display: inline-block;
    vertical-align: middle;
    border: 0 none;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-image: url(https://style.woqukaoqin.com/ps/dest/images/chooser/wqZtree.png);
  }
  .button.ico_open {
    margin-right: 5px;
    background-position: 0 -36px;
    margin-top: -3px;
  }
</style>
