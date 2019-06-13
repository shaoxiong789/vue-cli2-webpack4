<template>
  <div>123</div>
</template>
<script>
  import http from '@/common/services/http.js'
  export default {
    name: 'app',
    mounted() {
      console.log(http);
      http.form('/api/hr/common/chooser/treeData.htm', {
        cond: {
          usage: 'hmc_employee_read',
          modes: 'dep'
        }
      }).then((res) => {
        console.log(res.data);
      })
    }
  }
</script>
