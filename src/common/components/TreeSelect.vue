<template>
  <tree-select v-bind="$attrs" v-model="selectValue" :options="options" :normalizer="normalizer" v-on="$listeners"></tree-select>
</template>
<script>
import treeSelect from 'woqu-treeselect';
import 'woqu-treeselect/dist/vue-treeselect.css';
export default {
  name: 'selectTree',
  components: { treeSelect },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    defaultProps: {
      type: Object,
      default() {
        return {
          children: 'children',
          label: 'title'
        };
      }
    },
    nodeKey: {
      type: String,
      default() {
        return 'bid';
      }
    },
    value: [String, Array]
  },
  computed: {
    options() {
      const self = this;
      const getList = (data) => {
        return data.map((item) => {
          if (item[self.defaultProps.children] && item[self.defaultProps.children].length > 0) {
            item[self.defaultProps.children] = getList(item[self.defaultProps.children]);
          } else {
            delete item[self.defaultProps.children];
          }
          return item
        })
      }
      return getList(self.data);
    }
  },
  data () {
    return {
      selectValue: undefined
    }
  },
  watch: {
    selectValue(val) {
      this.$emit('input', val);
    }
  },
  mounted() {
    if (this.value && this.value != 'null') {
      this.selectValue = this.value;
    }
  },
  methods: {
    normalizer(node) {
      const newNode = {
        id: node[this.nodeKey],
        label: node[this.defaultProps.label]
      };
      if (node[this.defaultProps.children] && node[this.defaultProps.children].length > 0) {
        newNode['children'] = node[this.defaultProps.children];
      }
      return newNode;
    }
  }
};
</script>
<style lang="less">
.vue-treeselect{
  line-height: initial;
}
</style>
