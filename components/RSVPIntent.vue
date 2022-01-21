<template>
  <div>
    <fieldset>
      <div class="space-y-2 max-w-fit flex-col items-start mx-auto">
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
            <div class="text-sm">
              <p
                id="server-size-1-label"
                class="font-medium text-gray-900 leading-3"
                :class="{
                  'text-black': formData.selectedOption == option.number,
                }"
              >
                {{ option.text }}
              </p>
            </div>
          </div>
        </label>
      </div>

      <div
        class="space-y-4 max-w-fit flex-col items-start mx-auto text-left mt-12"
      >
        <div
          v-show="formData.selectedOption != 3 && formData.selectedOption"
          class="px-4 py-5 sm:p-6"
        >
          <div class="md:grid md:grid-cols-2 md:gap-6">
            <div class="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div class="grid grid-cols-6 gap-6">
                  <div v-show="!$route.query.email" class="col-span-12">
                    <label
                      for="street-address"
                      class="block text-sm font-medium text-black"
                      >Email</label
                    >
                    <input
                      id="email"
                      v-model="email"
                      type="text"
                      name="email"
                      autocomplete="email"
                      class="mt-1 block w-full sm:text-sm border-b-2 border-b-black bg-sage focus:ring-0 focus:border-none"
                    />
                  </div>

                  <div class="col-span-12">
                    <label
                      for="street-address"
                      class="block text-sm font-medium text-black"
                      >Street address</label
                    >
                    <input
                      id="street-address"
                      v-model.lazy="$v.formData.streetAddress.$model"
                      type="text"
                      name="street-address"
                      autocomplete="street-address"
                      class="mt-1 block w-full sm:text-sm border-b-2 border-b-black bg-sage focus:ring-0 focus:border-none"
                    />
                    <p
                      v-if="
                        !$v.formData.streetAddress.required &&
                        $v.formData.streetAddress.$dirty
                      "
                      class="text-red-600"
                    >
                      This field is required.
                    </p>
                  </div>

                  <div class="col-span-12">
                    <label
                      for="street-address-2"
                      class="block text-sm font-medium text-black"
                      >Street address 2</label
                    >
                    <input
                      id="street-address-2"
                      v-model.lazy="$v.formData.streetAddress2.$model"
                      type="text"
                      name="street-address-2"
                      autocomplete="street-address-2"
                      class="mt-1 block w-full sm:text-sm border-b-2 border-b-black bg-sage focus:ring-0 focus:border-none"
                    />
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-4">
                    <label
                      for="city"
                      class="block text-sm font-medium text-black"
                      >City</label
                    >
                    <input
                      id="city"
                      v-model.lazy="$v.formData.city.$model"
                      type="text"
                      name="city"
                      autocomplete="address-level2"
                      class="mt-1 block w-full sm:text-sm border-b-2 border-b-black bg-sage focus:ring-0 focus:border-none"
                    />
                    <p
                      v-if="
                        !$v.formData.city.required &&
                        $v.formData.streetAddress.$dirty
                      "
                      class="text-red-600"
                    >
                      This field is required.
                    </p>
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-4">
                    <label
                      for="region"
                      class="block text-sm font-medium text-black"
                      >State / Province</label
                    >
                    <input
                      id="region"
                      v-model.lazy="$v.formData.region.$model"
                      type="text"
                      name="region"
                      autocomplete="address-level1"
                      class="mt-1 block w-full sm:text-sm border-b-2 border-b-black bg-sage focus:ring-0 focus:border-none"
                    />
                    <p
                      v-if="
                        !$v.formData.region.required &&
                        $v.formData.streetAddress.$dirty
                      "
                      class="text-red-600"
                    >
                      This field is required.
                    </p>
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-4">
                    <label
                      for="postal-code"
                      class="block text-sm font-medium text-black"
                      >ZIP / Postal code</label
                    >
                    <input
                      id="postal-code"
                      v-model.lazy="$v.formData.postalCode.$model"
                      type="text"
                      name="postal-code"
                      autocomplete="postal-code"
                      class="mt-1 block w-full sm:text-sm border-b-2 border-b-black bg-sage focus:ring-0 focus:border-none"
                    />
                    <p
                      v-if="
                        !$v.formData.postalCode.required &&
                        $v.formData.streetAddress.$dirty
                      "
                      class="text-red-600"
                    >
                      This field is required.
                    </p>
                  </div>

                  <div class="col-span-12">
                    <label
                      for="country"
                      class="block text-sm font-medium text-black"
                      >Country</label
                    >
                    <select
                      id="country"
                      v-model.lazy="$v.formData.country.$model"
                      name="country"
                      autocomplete="country-name"
                      class="mt-1 block w-full py-2 px-3 border border-b-black focus:outline-none sm:text-sm bg-sage focus:ring-0 focus:border-none"
                    >
                      <p
                        v-if="
                          !$v.formData.country.required &&
                          $v.formData.streetAddress.$dirty
                        "
                        class="text-red-600"
                      >
                        This field is required.
                      </p>
                      <option :value="null" disabled>Select Country</option>
                      <option>United States</option>
                      <option>Germany</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="submit-container">
          <div
            v-if="(formTouched && uiState === 'submit clicked') || errors"
            class="rounded-md bg-red-200 p-4"
          >
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
                <div class="text-sm text-red-800">
                  <p v-if="errors">The form above has errors</p>
                  <p v-else-if="formTouched && uiState === 'submit clicked'">
                    Looks like the form is empty! Please fill out the required
                    fields and try again.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
    <button
      type="button"
      class="w-full inline-flex items-center justify-center my-4 px-4 py-4 border border-transparent text-base font-medium text-white bg-black text-center hover:bg-gray-900 disabled:bg-gray-600"
      @click.prevent="submitForm"
    >
      {{
        ableToSubmit ? 'Submit' : 'Please fill out the requested information'
      }}
    </button>
  </div>
</template>

<script>
import axios from 'axios'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      uiState: 'submit not clicked',
      empty: true,
      options: [
        {
          number: 1,
          text: 'Count us in!',
        },
        {
          number: 2,
          text: "We'd love to, but need a little more time.",
        },
        {
          number: 3,
          text: "Sadly, we won't be able to make it.",
        },
      ],
      email: null,
      formData: {
        // selectedOption: 1,
        // streetAddress: '2310 Indian Trl',
        // streetAddress2: null,
        // city: 'Austin',
        // region: 'TX',
        // postalCode: '78703',
        // country: 'United States'
        selectedOption: null,
        streetAddress: null,
        streetAddress2: null,
        city: null,
        region: null,
        postalCode: null,
        country: null,
      },
      existingResponse: null,
    }
  },
  validations: {
    formData: {
      selectedOption: {
        required,
      },
      streetAddress: {
        required,
        minLength: minLength(2),
      },
      streetAddress2: {},
      city: {
        required,
        minLength: minLength(2),
      },
      region: {
        required,
        minLength: minLength(2),
      },
      postalCode: {
        required,
        minLength: minLength(2),
      },
      country: {
        required,
        minLength: minLength(2),
      },
    },
  },
  computed: {
    formTouched() {
      return !this.$v.formData.$anyDirty
    },
    errors() {
      return this.$v.formData.$anyError
    },
    ableToSubmit() {
      return (
        (!this.errors && !this.$v.$invalid) ||
        this.formData.selectedOption === 3
      )
    },
    endpoint() {
      return 'https://rsvp-handler.plj.workers.dev'
    },
  },
  created() {
    this.checkExistingResponse()
  },
  methods: {
    selectOption(option) {
      this.formData.selectedOption = option.number
    },
    async submitForm() {
      this.uiState = 'submit clicked'
      if (this.errors === false && this.formTouched === false) {
        // this is where you send the responses

        const formData = this.formData
        formData.email = this.$route.query.email
          ? this.$route.query.email
          : this.email

        const data = JSON.stringify(this.formData)

        try {
          const response = await axios.post(this.endpoint, data)
          this.posts = response.data
          // this.$router.push({ path: '/thank-you'})
        } catch (e) {
          this.errors.push(e)
        }

        this.uiState = 'form submitted'
      }
    },
    async checkExistingResponse() {
      if (this.$route.query.email) {
        const data = { email: this.$route.query.email }
        const dj = JSON.stringify(data)

        try {
          const response = await axios.post(this.endpoint + '/lookup', dj)
          // console.log(response)

          if (response.data.length > 0) {
            this.existingResponse = response.data
            this.$router.push({ path: '/thank-you' })
          }
          // this.$router.push({ path: '/thank-you'})
        } catch (e) {
          this.errors.push(e)
        }
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
