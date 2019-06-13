<script>
import wqPersonSelect from './wqPersonSelect.vue';
export default {
  name: 'wqTopPersonSelect',
  components: {
    wqPersonSelect
  },
  props: {
    value: Object,
    dids: Array,
    eids: Array,
    options: Object
  },
  data() {
    return {
      result: {
        dids: [],
        eids: []
      }
    }
  },
  render(h) {
    console.log('render', this.dids, this.eids);
    const self = this;
    self.result.dids = this.dids || this.value.dids;
    self.result.eids = this.eids || this.value.dids;
    return h(wqPersonSelect, {
      key: new Date().getTime(),
      props: { value: self.result,
        ...self.$attrs,
        ...{
          options: self.options
        } },
      on: { ...self.$listeners,
        ...{
          'input' (result) {
            self.$emit('input', result);
            self.result = result;
            self.$emit('update:dids', result.dids);
            self.$emit('update:eids', result.eids);
            // self.$emit('saveSuccess', result);
          },
          'saveSuccess' (result) {
            self.$emit('input', result);
            self.result = result;
            self.$emit('update:dids', result.dids);
            self.$emit('update:eids', result.eids);
            self.$emit('saveSuccess', result);
          }
        } }
    })
  }
}
</script>