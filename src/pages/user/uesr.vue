<template>
        <div class="g-main f-clearfix">
            <h3>router: user</h3>
            <div class="box1">
                <input type="text" v-focus>
                <input type="text" v-demo="{ color: 'white', text: 'hello!' }">
            </div>
            <div>
                {{info}}
            </div>
            <div>
                Store.count: {{count}}
            </div>
            <!-- <Counter></Counter>       -->
        </div>
    
</template>
<style lang="scss">
    .box1{
        width: 300px;
        height: 200px;
    }

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
        console.log(this.$store)
        axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info = response))
  
    },
    methods: {
        
    },
    computed:{
        count () {
            return 1234;
            // return this.$store.state.count
        }
    }
}
</script>