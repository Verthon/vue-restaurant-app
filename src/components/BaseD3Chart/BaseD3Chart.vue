<template>
   <div class="base-3d-chart">
     <svg class="base-3d-chart__container" :viewBox="viewBox">
       <g class="base-3d-chart__x-axis">

       </g>
       <g class="base-3d-chart__y-axis"></g>
       <g :transform="wrapperTransform">
         <rect class="base-3d-chart__bar" v-for="item in views" :key="item['date']" :x="item['date']" :y="item['value']"></rect>
       </g>
     </svg>
   </div>
</template>

<script src="./BaseD3Chart.ts" lang="ts"></script>
<style src="./BaseD3Chart.scss" lang="scss" scoped></style>
