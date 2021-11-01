<template>
  <div>
    <Navbar :links="links" />
    <section id="menu" class="section menu container">
      <h1 class="heading heading--center menu__heading">Menu</h1>
      <div class="row">
        <Loader :isLoading="isLoading" />
        <div class="section__col">
          <article class="menu__container">
            <h2 class="menu__title">Appetizers</h2>
            <MenuList :category="appetizers" />
          </article>
        </div>
        <div class="section__col">
          <article class="menu__container">
            <h2 class="menu__title">Desserts</h2>
            <MenuList :category="desserts" />
          </article>
        </div>
        <div class="section__col">
          <article class="menu__container">
            <h2 class="menu__title">Mains</h2>
            <MenuList :category="mains" />
          </article>
        </div>
        <div class="section__col">
          <article class="menu__container">
            <h2 class="menu__title">Salads</h2>
            <MenuList :category="salads" />
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./Menu.ts" lang="ts"></script>
