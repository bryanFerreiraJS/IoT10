<template>
  <RoomInformations
    v-for='room in rooms'
    :room='room'
  />
</template>

<script>
import { defineComponent } from 'vue'
import RoomInformations from '@/components/RoomInformations.vue'

export default defineComponent({
  data() {
    return {
      rooms : [{
        'id': 1,
        'isOpen': true,
        'nbPeoples': 1,
        'temperature': 12,
        'lightIntensity': 'low'

      },{
        'id': 2,
        'isOpen': false,
        'nbPeoples': 0,
        'temperature': 18,
        'lightIntensity': 'regular'
      },{
        'id': 3,
        'isOpen': false,
        'nbPeoples': 0,
        'temperature': 24,
        'lightIntensity': 'high'
      }]
    }
  },
  components: { RoomInformations }
})
</script>
