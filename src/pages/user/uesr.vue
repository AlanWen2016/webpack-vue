<template>
        <div class="g-main f-clearfix">
            user啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
            {{info}}
        </div>
    
</template>
<style lang="scss">

</style>



<script>
import axios from 'axios';
export default {
    data() {
        return {
            info: {}
            
        }
    },
    components:{
       
    },
    created(){
        // console.log(this.$route.meta.menu)
    },
    mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  
    },
    methods: {
        
    },
}
</script>