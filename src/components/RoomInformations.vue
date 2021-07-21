<template>
  <div class="w-full">
    <div class="w-full mx-auto rounded-2xl">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex justify-between w-full px-6 py-4 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <img src='@/assets/images/logo_temperature.png'>
          <ChevronUpIcon
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          If you're unhappy with your purchase for any reason, email us within
          90 days and we'll refund you in full, no questions asked.
        </DisclosurePanel>
      </Disclosure>

      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        >
          <span>Do you offer technical support?</span>
          <ChevronUpIcon
            :class="open ? 'transform rotate-180' : ''"
            class="w-5 h-5 text-purple-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          No.
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/solid'

export default defineComponent({
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronUpIcon
  }
})
</script>

<style scoped>
</style>
