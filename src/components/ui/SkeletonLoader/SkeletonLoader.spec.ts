import { shallowMount, type ComponentMountingOptions } from '@vue/test-utils'
import SkeletonLoader from './SkeletonLoader.vue'
import { describe, expect, it } from 'vitest'

const skeletonLoaderSelector = '[data-testid=skeleton]'

const defaultMountOptions: ComponentMountingOptions<typeof SkeletonLoader> = {
  props: {
    height: '100px',
    width: '777px'
  }
}

describe('ItemIcon', () => {
  describe('props', () => {
    it('height - should render with md (26px) height if was not provided', () => {
      const wrapper = shallowMount(SkeletonLoader)
      expect(wrapper.get(skeletonLoaderSelector).attributes('style')).toContain('height: 26px;')
    })
    it('height - should render with set height from preset list', () => {
      const wrapper = shallowMount(SkeletonLoader, {
        propsData: {
          height: 'xl'
        }
      })
      expect(wrapper.get(skeletonLoaderSelector).attributes('style')).toContain('height: 36px;')
    })
    it('height - should render with set height not from preset list', () => {
      const wrapper = shallowMount(SkeletonLoader, defaultMountOptions)
      expect(wrapper.get(skeletonLoaderSelector).attributes('style')).toContain(
        `height: ${defaultMountOptions.props!.height};`
      )
    })
    it('width - should render with set width', () => {
      const wrapper = shallowMount(SkeletonLoader, defaultMountOptions)
      expect(wrapper.get(skeletonLoaderSelector).attributes('style')).toContain(
        `width: ${defaultMountOptions.props!.width};`
      )
    })
    it('width - should render with 100% height if was not provided', () => {
      const wrapper = shallowMount(SkeletonLoader)
      expect(wrapper.get(skeletonLoaderSelector).attributes('style')).toContain('width: 100%;')
    })
  })
})
