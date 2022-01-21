<template>
  <div>
    <div class="py-4 overflow-hidden lg:py-8 h-full font-decorative">
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center text-center">
          <img class="my-8 w-full h-auto" src="~/assets/images/3.svg" alt="" />
        </div>
        <div class="text-center">
          <h1
            class="mt-24 mb-16 text-3xl text-black sm:text-4xl tracking-widest"
          >
            Danielle + Philip
          </h1>
          <h2 class="font-decorative text-xl">
            23 <span class="font-serif italic text-sm px-1">to</span> SEPTEMBER
            2022
          </h2>
          <div class="border-b-black w-8 mx-auto mt-2 mb-3"></div>
          <p class="font-decorative uppercase text-xs leading-relaxed">
            Douro Valley<br />Portugal
          </p>
          <div class="mt-16">
            <h2 class="text-xl font-bold">
              Please let us know if you think you can make it
            </h2>
            <p class="italic text-sm">
              We know traveling to Portugal is not a small ask! We're trying to
              gauge how many are considering the journey.
            </p>
            <p class="mt-4 text-sm font-bold font-serif">
              (This is not an official RSVP)
            </p>
          </div>

          <RSVPIntent class="py-8 m-auto rsvp-intent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RSVPIntent from '~/components/RSVPIntent.vue'

export default {
  name: 'IndexPage',
  components: {
    RSVPIntent,
  },
}
</script>

<style lang="scss">
html,
body,
#__nuxt,
#__layout {
  @apply bg-sage;
}

.border-b-black {
  border: transparent;
  border: 2px transparent solid;
  border-bottom: 2px solid black;
}
</style>
