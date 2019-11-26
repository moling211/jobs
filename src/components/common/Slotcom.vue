<template>
    <div class="slot-wrapper">
        <div class="slot-head">
            <div class="left" @click="goBack"><i class="el-icon-arrow-left"></i>返回</div>
            <div class="middle">
                <slot name="menuText"></slot>
            </div>
            <div class="right">
                <slot name="menuIcon"></slot>
            </div>
        </div>
        <slot name="slot-container"></slot>
    </div>
</template>
<script>
export default {
    name:'Slotcom',
    data(){
        return{

        }
    },
    created(){

    },
    methods:{
        goBack(){
            // if(this.$route.name==='newsDetail'){
            //     this.$router.push({path:'/News'})
            // }else{
            //     this.$router.push({path:'/Home'})
            // }
            this.$router.go(-1);
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .slot-wrapper{
        width: 100%;
        .slot-head{
            width: 100%;
            height: 40px;
            line-height: 40px;
            background: rgba($color: $active, $alpha: 0.8);
            color: #fff;
            display: flex;
            justify-content: space-between;
            .left{
                width: 15%;
                text-align: left;
                padding-left: 10px;
            }
            .middle{
                text-align: center;
            }
            .right{
                width: 15%;
                text-align: right;
                padding-right:10px;
            }
        }
    }
</style>