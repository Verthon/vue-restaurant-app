<template>
  <div>
    <Navbar :links="links" />
    <h1>Admin</h1>
    <Button @click="handleLogout">Logout</Button>
  </div>
</template>

<script src="./Admin.js" lang="ts"></script>
