<script setup lang="ts">
import { ref,onMounted } from 'vue';
import Button from './components/Button/Button.vue';
import type {ButtonInstance} from './components/Button/types'
import Collapse from './components/Collapse/Collapse.vue';
import Item from './components/Collapse/CollapseItem.vue';
import Tooltip from './components/Tooltip/Tooltip.vue';
const buttonRef=ref<ButtonInstance|null>(null)
const openedValue=ref(['a'])


onMounted(()=>{
  if(buttonRef.value){
    console.log('buttonRef',buttonRef.value.ref);

  }
})

</script>

<template>
  <Tooltip content="hello world">
      <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125"/>
  </Tooltip>
  <vk-button>我是vkbutton</vk-button>

  <main>
    <Button ref="buttonRef">Test Button</Button>
    <Button plain>Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br/><br/>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br/><br/>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br/><br/>
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br/><br/>
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button>

<Collapse v-model="openedValue">
      <Item name="a">
        <template #title>
          <h1>headline title</h1>
        </template>
        <h1>headline title</h1>
        <div> this is content a aaa </div>
      </Item>
      <Item name="b" title="Title B">
        <div> this is bbbbb test </div>
      </Item>
      <Item name="c" title="Disabled Title" disabled>
        <div> this is cccc test </div>
      </Item>
    </Collapse>


  </main>
</template>


