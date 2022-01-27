<template>
  <div>
    <FormulateForm v-model="formData" class="login-form">
      <div
        class="space-y-2 max-w-fit flex-col items-start mx-auto options-container"
      >
        <fieldset>
          <label
            v-for="option in options"
            :key="option.text"
            class="relative block px-6 py-4 cursor-pointer sm:flex sm:justify-between focus:outline-none"
            @click="selectOption(option)"
          >
            <input
              type="radio"
              name="server-size"
              value="Startup"
              class="sr-only"
              aria-labelledby="server-size-1-label"
              aria-describedby="server-size-1-description-0 server-size-1-description-1"
            />
            <div class="flex items-end min-h-30 font-serif">
              <div
                class="w-8 border-b-2 border-b-black h-full mr-2 relative flex justify-center"
              >
                <span
                  class="response text-lg font-bold"
                  :class="{ active: formData.selectedOption == option.number }"
                  >X</span
                >
              </div>
              <div class="text-base">
                <p
                  class="rsvp-option font-medium text-gray-900 leading-4 text-left"
                  :class="{
                    active: formData.selectedOption == option.number,
                  }"
                >
                  {{ option.text }}
                </p>
              </div>
            </div>
          </label>
        </fieldset>
      </div>

      <div class="space-y-4 flex-col items-start mx-auto text-left mt-12">
        <div class="px-4 py-5 sm:p-6">
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
                  input-class="mt-1 block w-full sm:text-base border-b-2 border-b-black bg-sage focus:ring-0 focus:border-none"
                  errors-class="text-red-700 mt-2"
                  validation="required|email"
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
                  validation="required"
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
                  validation="required"
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
                />
              </div>

              <div class="col-span-12">
                <FormulateInput
                  v-model="value"
                  name="country"
                  label="Country"
                  :options="['United States', 'Germany']"
                  type="select"
                  placeholder="Select country"
                  input-class="mt-1 block w-full py-2 px-3 border border-b-black focus:outline-none sm:text-base bg-sage focus:ring-0 focus:border-none"
                  validation="required"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="submit-container">
          <div class="rounded-md bg-red-200 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg
                  class="h-5 w-5 text-red-800"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div class="ml-3">
                <div class="text-base text-red-800">
                  <p>
                    Oops! Looks like you missed something above. Make sure you
                    filled out the whole form.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            v-if="!isLoading"
            type="button"
            class="w-full inline-flex items-center justify-center my-4 px-4 py-4 border border-transparent text-base font-medium text-white bg-black text-center hover:bg-gray-900"
            :class="{
              'bg-gray-600 text-black hover:bg-gray-600': !ableToSubmit,
            }"
            :loading="isLoading"
            @click.prevent="submitForm"
          >
            {{
              ableToSubmit
                ? 'Submit'
                : 'Please fill out the requested information'
            }}
          </button>
          <button
            v-else
            type="button"
            class="w-full inline-flex items-center justify-center my-4 px-4 py-4 border border-transparent text-base font-medium bg-black text-white"
            :loading="isLoading"
            disabled
            @click.prevent="submitForm"
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
    ableToSubmit() {
      return true
    },
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
    async submitForm() {
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

.options-container {
  min-width: 386px;
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

.min-h-30 {
  min-height: 32px;
}

.max-w-fit {
  max-width: fit-content;
}
</style>
