<template>
  <div class="container">
    <Navbar :links="links"/>
    <!-- <BaseChart /> -->
    <BaseApexChart />
    <BaseD3Chart />
    <DatePicker locale="ar"/>
  </div>
</template>

<script src="./Home.ts" lang="ts"></script>
