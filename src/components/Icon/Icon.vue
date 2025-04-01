<!-- 禁用透传要记得给外层属性赋值 -->
<template>
  <i class="vk-icon"
  :class="{[`vk-icon--${type}`]:type}"
  :style="customStyles" v-bind="$attrs">
    <font-awesome-icon v-bind="filteredProps"  />
  </i>


</template>


<script setup lang="ts">
   import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
   import {computed} from 'vue'
   import {omit} from 'lodash-es'
   import type {IconProps} from './types'
   defineOptions({
    name:'VkIcon',
    inheritAttrs:false
   })
   const props = defineProps<IconProps>()

   //让其跟着响应式对象一起变化，很重要
   const filteredProps=computed(()=>omit(props,['type','color']))
   const customStyles=computed(()=>{
    return props.color?{color:props.color}:{}
   })

</script>