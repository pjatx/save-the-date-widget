<template>
  <div>
    <div class="py-4 bg-gray-50 overflow-hidden lg:py-8">
      <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center text-center">
          <h1 class="font-bold text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Thanks!
          </h1>
          <p
            class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            We received your response. Stay tuned for more updates!
          </p>
          <p class="mt-8">
            <nuxt-link to="/" class="underline text-blue-700 cursor-pointer"
              >Back home</nuxt-link
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThankYouPage',
}
</script>

<style lang="scss" scoped></style>
