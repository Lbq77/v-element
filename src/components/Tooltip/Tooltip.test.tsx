import { describe, test, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Tooltip from './Tooltip.vue'
vi.mock('@popperjs/core')
const onVisibleChange = vi.fn()
describe('Tooltip.vue', () => {
  beforeEach(() => {
    //生成一个假的timer
    vi.useFakeTimers()
  })
  test('basic tooltip', async () => {
    // 使用外侧节点进行模拟
    const wrapper = mount(() =>
    <div>
      <div id="outside"></div>
      <Tooltip content="hello tooltip" trigger='click' onVisibleChange={onVisibleChange}>
        <button id="trigger">Trigger</button>
      </Tooltip>
    </div>
    , {
      attachTo: document.body
    })
    // 静态测试
    const triggerArea = wrapper.find('#trigger')
    expect(triggerArea.exists()).toBeTruthy()
    expect(wrapper.find('.vk-tooltip__popper').exists()).toBeFalsy()
    console.log('before', wrapper.html())
    // 测试点击行为,debounce其实是触发了延时的，那么我们需要对这个延时来进行处理
    triggerArea.trigger('click')
    //因为要等待DOM更新完毕，所以要加上await
    await vi.runAllTimers()
    expect(wrapper.find('.vk-tooltip__popper').exists()).toBeTruthy()
    expect(wrapper.get('.vk-tooltip__popper').text()).toBe('hello tooltip')
    expect(onVisibleChange).toHaveBeenCalledWith(true)
    console.log('after', wrapper.html())
    wrapper.get('#outside').trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.vk-tooltip__popper').exists()).toBeFalsy()
    expect(onVisibleChange).toHaveBeenLastCalledWith(false)
  })
})