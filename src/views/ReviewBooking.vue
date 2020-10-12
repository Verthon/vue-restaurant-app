<template>
  <div class="review-booking">
    <h2 class="heading modal-book__heading">Thank you</h2>
    <p class="text modal-book__text">Thank you for booking reservation.</p>
    <p class="text modal-book__text">We will contact you shortly.</p>
    <footer class="modal-book__footer">
      <router-link class="btn btn--transparent" to="/">
        Back to Home
      </router-link>
      <router-link class="btn btn--light" to="/menu">
        See Menu
      </router-link>
    </footer>
    <article class="review-booking__content">
      <h1 class="heading review-booking__company">
        <router-link to="/">{contact.name}</router-link>
      </h1>
      <img class="review-booking__image" src="{about}" alt="" />
      <h2 class="review-booking__title">Edit booking</h2>
      <div class="review-booking__form">
        <Form
          booking="{bookingData?.booking}"
          config="{DATEPICKER_CONFIG}"
          handleChange="{bookingData?.handleBookingChange}"
          handleDate="{bookingData?.handleDateChange!}"
          handleSubmit="{onSubmit}"
          submitBtn="{false}"
          cssClass="form--edit"
          action="{getEmailActionUrl(email)}"
          withBookingDesc="{true}"
        />
      </div>
      <footer class="review-booking__footer review-booking__footer--edit">
        <form onSubmit="{onSubmit}">
          <Button class="btn--light" type="submit">
            Confirm Booking
          </Button>
        </form>
      </footer>
    </article>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
