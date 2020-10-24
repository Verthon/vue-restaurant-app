<template>
  <div class="table-booking">
    <Navbar :links="links" />
    <div
      class="table-booking__wrapper container"
    >
      <div class="section section__col section__col--flexible">
        <h2 class="table-booking__subtitle">Make a reservation</h2>
        <Form />
      </div>
      <article class="section section__col section__col--flexible">
        <h2 class="table-booking__subtitle">Located in {{location.city}}</h2>
        <p>{{location.address}}</p>
        <p>{{location.city}}, {{location.province}}, {{location.code}}</p>
        <p>{{contact.phone}}</p>

        <h2 class="table-booking__subtitle">Hours of operation</h2>
        <p>{{hours.weekdays.days}} {{hours.weekdays.time}}</p>
        <p>{{hours.weekend.days}} {{hours.weekend.time}}</p>
      </article>
      <div
        class="section section__col section__col--flexible table-booking__image"
      >
        <picture>
          <img
            :src="image"
            alt=""
            class="table-booking__image"
            loading="lazy"
          />
        </picture>
      </div>
    </div>
    <footer class="table-booking__footer" />
  </div>
</template>

<script>
import bookTableImg from '@/assets/brooke-lark-book-table.jpg'
import Navbar from '@/components/Navbar/Navbar.vue'
import Form from '@/components/Forms/Form/Form.vue'

export default {
  data () {
    return {
      links: [
        { name: 'Menu', link: 'menu' },
        { name: 'Book Table', link: 'book-table' }
      ],
      location: {
        address: 'test',
        city: 'Montreal',
        province: 'Quebec',
        code: 'test'
      },
      hours: {
        weekdays: {
          days: 'Mon-Fri',
          time: '12:00'
        },
        weekend: {
          days: 'Mon-Fri',
          time: '12:00'
        }
      },
      contact: {
        phone: '+1 555 555 555'
      },
      image: bookTableImg
    }
  },
  components: {
    Navbar,
    Form
  }
}
</script>

<style>
</style>
