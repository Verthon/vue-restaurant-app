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
            <strong class="review-booking__name">{{ booking.currentBooking.name || 'John Doe' }}</strong> reservation
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

<script src="./ReviewBooking.ts" lang="ts"></script>
