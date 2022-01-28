<template>
  <div>
    <FormulateForm
      v-slot="{ isValid }"
      v-model="formData"
      class="login-form"
      @submit="submitHandler"
    >
      <div class="space-y-4 flex-col items-start mx-auto text-left mt-8">
        <div class="px-4 py-5 sm:p-6">
          <div
            class="space-y-2 max-w-fit flex-col items-start options-container relative mb-12"
          >
            <FormulateInput
              v-for="option in options"
              :key="option.text"
              name="selectedOption"
              class=""
              type="radio"
              validation="required"
              errors-class="absolute -bottom-6 text-red-700"
              :validation-messages="{
                required: 'Please let us know if you think you can come.',
              }"
            >
              <template #element>
                <div
                  class="flex items-end min-h-64 font-serif py-4 cursor-pointer sm:flex focus:outline-none"
                  @click="selectOption(option)"
                >
                  <div
                    class="w-8 border-b-2 border-b-black h-full mr-2 relative flex justify-center"
                  >
                    <span
                      class="response text-lg font-bold"
                      :class="{
                        active: formData.selectedOption == option.number,
                      }"
                      >X</span
                    >
                  </div>
                  <div class="text-base">
                    <p
                      class="rsvp-option font-medium text-gray-900 md:leading-4 text-left"
                      :class="{
                        active: formData.selectedOption == option.number,
                      }"
                    >
                      {{ option.text }}
                    </p>
                  </div>
                </div>
              </template>
            </FormulateInput>
          </div>
          <div class="mt-5 md:mt-0">
            <div class="grid grid-cols-12 gap-6">
              <div class="col-span-12">
                <label
                  for="street-address"
                  class="block text-base font-medium text-black"
                  >Email</label
                >
                <FormulateInput
                  type="email"
                  name="email"
                  input-class="mt-1 block w-full sm:text-base border-b-2 border-b-black bg-sage focus:ring-0 focus:border-none focus:ring-transparent"
                  element-class="focus:ring-0"
                  wrapper-class="focus:ring-0"
                  errors-class="text-red-700 mt-2"
                  validation="required|email"
                  :validation-messages="{
                    required: 'Please fill in your email address.',
                  }"
                  @blur="handleEmail()"
                />
              </div>

              <div
                v-show="existingGuest === false"
                class="col-span-12 sm:col-span-6"
              >
                <label for="city" class="block text-base font-medium text-black"
                  >First Name</label
                >
                <FormulateInput
                  type="text"
                  name="firstName"
                  input-class="mt-1 block w-full sm:text-base border-b-2 border-b-black bg-sage focus:ring-0 focus:border-none"
                  errors-class="text-red-700 mt-2"
                />
              </div>

              <div
                v-show="existingGuest === false"
                class="col-span-12 sm:col-span-6"
              >
                <label
                  for="lastName"
                  class="block text-base font-medium text-black"
                  >Last Name</label
                >
                <FormulateInput
                  type="text"
                  name="lastName"
                  input-class="mt-1 block w-full sm:text-base border-b-2 border-b-black bg-sage focus:ring-0 focus:border-none"
                  errors-class="text-red-700 mt-2"
                />
              </div>

              <div class="col-span-12">
                <label
                  for="street-address"
                  class="block text-base font-medium text-black"
                  >Street address</label
                >
                <FormulateInput
                  type="text"
                  name="streetAddress"
                  input-class="mt-1 block w-full sm:text-base border-b-2 border-b-black bg-sage focus:ring-0 focus:border-none"
                  errors-class="text-red-700 mt-2"
                  validation="required"
                  :validation-messages="{
                    required: 'Please fill in your street address.',
                  }"
                />
              </div>

              <div class="col-span-12">
                <label
                  for="street-address-2"
                  class="block text-base font-medium text-black"
                  >Street address 2</label
                >
                <FormulateInput
                  type="text"
                  name="streetAddress2"
                  input-class="mt-1 block w-full sm:text-base border-b-2 border-b-black bg-sage focus:ring-0 focus:border-none"
                  errors-class="text-red-700 mt-2"
                />
              </div>

              <div class="col-span-12 lg:col-span-4">
                <label for="city" class="block text-base font-medium text-black"
                  >City</label
                >
                <FormulateInput
                  type="text"
                  name="city"
                  input-class="mt-1 block w-full sm:text-base border-b-2 border-b-black bg-sage focus:ring-0 focus:border-none"
                  errors-class="text-red-700 mt-2"
                  validation="required"
                  :validation-messages="{
                    required: 'Please fill in your city.',
                  }"
                />
              </div>

              <div class="col-span-12 sm:col-span-6 lg:col-span-4">
                <label
                  for="region"
                  class="block text-base font-medium text-black"
                  >State / Province</label
                >
                <FormulateInput
                  type="text"
                  name="region"
                  input-class="mt-1 block w-full sm:text-base border-b-2 border-b-black bg-sage focus:ring-0 focus:border-none"
                  errors-class="text-red-700 mt-2"
                  validation="required"
                />
              </div>

              <div class="col-span-12 sm:col-span-6 lg:col-span-4">
                <label
                  for="postal-code"
                  class="block text-base font-medium text-black"
                  >ZIP / Postal code</label
                >
                <FormulateInput
                  type="text"
                  name="postalCode"
                  input-class="mt-1 block w-full sm:text-base border-b-2 border-b-black bg-sage focus:ring-0 focus:border-none"
                  errors-class="text-red-700 mt-2"
                  validation="required"
                  :validation-messages="{
                    required: 'Please fill in your postal code',
                  }"
                />
              </div>

              <div class="col-span-12">
                <FormulateInput
                  name="country"
                  label="Country"
                  :options="['United States', 'Germany']"
                  type="select"
                  placeholder="Select country"
                  input-class="mt-1 block w-full py-2 px-3 border border-b-black focus:outline-none sm:text-base bg-sage focus:ring-0 focus:border-none"
                  validation="required"
                  errors-class="text-red-700 mt-2"
                  :validation-messages="{
                    required: 'Please select your street country.',
                  }"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="submit-container">
          <FormulateInput
            type="submit"
            name="Submit this form!"
            input-class="w-full"
          >
            <button
              v-if="!isLoading"
              type="button"
              class="w-full inline-flex items-center justify-center my-4 px-4 py-4 border border-transparent text-base font-medium text-white bg-black text-center hover:bg-gray-900"
              :class="{
                'bg-gray-600 text-black hover:bg-gray-600': !isValid,
              }"
              :loading="isLoading"
            >
              {{
                isValid ? 'Submit' : 'Please fill out the requested information'
              }}
            </button>
            <button
              v-else
              type="button"
              class="w-full inline-flex items-center justify-center my-4 px-4 py-4 border border-transparent text-base font-medium bg-black text-white"
              :loading="isLoading"
              disabled
            >
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </button>
          </FormulateInput>
        </div>
      </div>
    </FormulateForm>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      uiState: 'submit not clicked',
      empty: true,
      errors: null,
      isLoading: false,
      options: [
        {
          number: 1,
          text: 'Count us in!',
        },
        {
          number: 2,
          text: "We'd love to, but need a little more time to decide.",
        },
        {
          number: 3,
          text: "Sadly, we won't be able to make it.",
        },
      ],
      formData: {
        // selectedOption: 1,
        // email: 'phjohnson08@gmail.com',
        // firstName: 'Philip',
        // lastName: 'Johnson',
        // streetAddress: '2310 Indian Trl',
        // streetAddress2: null,
        // city: 'Austin',
        // region: 'TX',
        // postalCode: '78703',
        // country: 'United States',
        selectedOption: null,
        email: null,
        firstName: null,
        lastName: null,
        streetAddress: null,
        streetAddress2: null,
        city: null,
        region: null,
        postalCode: null,
        country: null,
      },
      existingResponse: null,
      existingGuest: null,
    }
  },
  computed: {
    endpoint() {
      return 'https://rsvp-handler.plj.workers.dev'
      // return 'http://127.0.0.1:8787'
    },
  },
  created() {
    if (this.$route.query.email) {
      this.checkExistingResponse()
    }
  },
  methods: {
    handleEmail() {
      // this.$v.formData.email.$touch()
      this.checkExistingGuest()
    },
    selectOption(option) {
      this.formData.selectedOption = option.number
    },
    async submitHandler() {
      this.isLoading = true
      this.uiState = 'submit clicked'

      // this is where you send the responses

      const data = JSON.stringify(this.formData)

      try {
        const response = await axios.post(this.endpoint, data)
        this.posts = response.data
        this.$router.push({ path: '/thank-you' })
      } catch (e) {
        this.errors.push(e)
      }
      this.isLoading = false
      this.uiState = 'form submitted'
    },
    async checkExistingResponse() {
      this.formData.email = this.$route.query.email
      const data = { email: this.$route.query.email }
      const dj = JSON.stringify(data)

      try {
        const response = await axios.post(this.endpoint + '/response', dj)
        // console.log(response)

        if (response.data.length > 0) {
          this.existingResponse = response.data
          this.$router.push({ path: '/thank-you' })
        }
      } catch (e) {
        this.errors.push(e)
      }
    },
    async checkExistingGuest() {
      const data = { email: this.formData.email }

      const dj = JSON.stringify(data)

      try {
        const response = await axios.post(this.endpoint + '/guest', dj)
        // console.log(response)

        this.existingGuest = response.data
      } catch (e) {
        this.errors.push(e)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.response {
  display: none;

  &.active {
    @apply block;
  }
}

.rsvp-option {
  &.active {
    font-weight: bold;
  }
}

.border-b-black {
  border: transparent;
  border: 2px transparent solid;
  border-bottom: 2px solid black;

  &:focus {
    // border: 2px solid black;
    background-color: lighten(#a1a994, 5%);
  }
}

.min-h-64 {
  min-height: 64px;
}
</style>
