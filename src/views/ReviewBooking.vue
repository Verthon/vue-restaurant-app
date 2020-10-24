<template>
<div>
  <div v-if="edit" class="review-booking">
        <article class="review-booking__content">
          <h1 class="heading review-booking__company">
            <router-link to="/">{{ company.contact.name }}</router-link>
          </h1>
          <img class="review-booking__image" :src="image" alt="" />
          <h2 class="review-booking__title">Edit booking</h2>
          <div class="review-booking__form">
            <EditForm/>
          </div>
          <footer class="review-booking__footer review-booking__footer--edit">
            <form @submit.prevent="handleSubmit">
              <Button variant="light" type="submit">
                Confirm Booking
              </Button>
            </form>
          </footer>
        </article>
      </div>

  <div v-if="!edit" class="review-booking">
        <article class="review-booking__content">
          <h1 class="heading review-booking__company">
            <router-link to="/">{{ company.contact.name }}</router-link>
          </h1>
          <img class="review-booking__image" :src="image" alt="" />
          <p class="review-booking__client">
            <strong class="review-booking__name">{{ booking.currentBooking.name || 'Jason Lengstorf' }}</strong> reservation
          </p>
          <div class="review-booking__container">
            <div class="section__col section__col--flexible">
              <p class="review-booking__value">{{ booking.currentBooking.guests }}</p>
              <p class="review-booking__description">Guests</p>
            </div>
            <div class="section__col section__col--flexible">
              <p class="review-booking__value">{{ renderDate }}</p>
              <p class="review-booking__description">Date</p>
            </div>
            <div class="section__col section__col--flexible">
              <p class="review-booking__value">{{ renderTime }}</p>
              <p class="review-booking__description">Time</p>
            </div>
          </div>
          <p class="review-booking__address">{{ company.location.address }}</p>
          <p class="review-booking__address">
            {{company.location.city}}, {{company.location.province}}, {{company.location.code}}
          </p>
          <footer class="review-booking__footer">
            <form @submit.prevent="handleSubmit">
              <Button variant="transparent" type="button" v-on:click="handleEdit">
                Edit booking
              </Button>
              <Button variant="light" type="submit">
                Confirm Booking
              </Button>
            </form>
          </footer>
        </article>
      </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import EditForm from '@/components/Forms/EditForm/EditForm.vue'
import Button from '@/components/Button/Button.vue'
import { splitDate, formatDate, convertToDate, splitTime } from '@/utils/date'
import * as types from '@/types/store'
import about from '@/assets/landing/brooke-lark-about.jpg'
export default {
  data () {
    return {
      edit: false,
      image: about
    }
  },
  computed: {
    ...mapState({
      company: (state) => state.company,
      booking: (state) => state.booking
    }),
    renderDate: function () {
      const date = this.booking.currentBooking.date
      return splitDate(formatDate(convertToDate(date)))
    },
    renderTime: function () {
      const date = this.booking.currentBooking.date
      return splitTime(formatDate(convertToDate(date)))
    }
  },
  methods: {
    ...mapActions({ addBookingToDb: types.ACTION_BOOKING_SAVE_TO_DB }),
    handleSubmit: async function () {
      await this.addBookingToDb(this.booking.currentBooking)
    },
    handleEdit: function (e) {
      e.preventDefault()
      this.edit = true
    }
  },
  components: {
    EditForm,
    Button
  }
}
</script>

<style lang="scss"></style>
