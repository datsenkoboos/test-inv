import { shallowMount } from '@vue/test-utils'
import ItemIcon from './ItemIcon.vue'
import { describe, expect, it } from 'vitest'

const itemIconSelector = '[data-testid=item-icon]'
const itemIconMainPartSelector = '[data-testid=item-icon-main]'
const itemIconBlurredPartSelector = '[data-testid=item-icon-blurred]'

describe('ItemIcon', () => {
  it('renders correctly with passed props', () => {
    const color = 'blue'
    const size = 20

    const wrapper = shallowMount(ItemIcon, {
      props: {
        color,
        size
      }
    })
    expect(wrapper.find(itemIconMainPartSelector).attributes('style')).toContain(
      `background-color: ${color}`
    )
    expect(wrapper.find(itemIconMainPartSelector).attributes('style')).toContain(`width: ${size}px`)
    expect(wrapper.find(itemIconMainPartSelector).attributes('style')).toContain(
      `height: ${size}px`
    )
    expect(wrapper.find(itemIconBlurredPartSelector).attributes('style')).toContain(
      `width: ${size}px`
    )
    expect(wrapper.find(itemIconBlurredPartSelector).attributes('style')).toContain(
      `height: ${size}px`
    )
    expect(wrapper.find(itemIconSelector).attributes('style')).toContain(`width: ${1.1 * size}px`)
    expect(wrapper.find(itemIconSelector).attributes('style')).toContain(`height: ${1.1 * size}px`)
  })
})
