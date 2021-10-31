<template>
  <div>
    <Navbar :links="links" />
    <section id="menu" class="section menu container">
      <h1 class="heading heading--center menu__heading">Menu</h1>
      <div class="row">
        <Loader :isLoading="loading" />
        <div class="section__col" v-for="category in menu.menu" :key="category.id">
          <article class="menu__container">
            <h2 class="menu__title">{{ category.id }}</h2>
            <MenuList :category="category" />
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./Menu.ts" lang="ts"></script>
