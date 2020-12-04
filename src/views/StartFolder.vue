<template>
  <ion-page>
    <ion-grid class="main-container">
      <ion-row class="header">
        <ion-img
          class="logo-image"
          src="./assets/images/logo.jpg"
          alt="Logo image"
        />
      </ion-row>
      <ion-row class="description">
        <ion-text
          >Ta strona internetowa powstała, aby pokazać moje książki.</ion-text
        >
      </ion-row>
    </ion-grid>
  </ion-page>
</template>

<style scoped>
.main-container {
  width: 100%;
  padding: 0;
}

.header {
  width: 100%;
  height: 40%;
  background-image: url("../../public/assets/images/books_shelf.jpg");
  background-size: 100% 100%;
}

.logo-image {
  max-width: 500px;
  position: relative;
  margin: auto;
}

.description {
  text-align: center;
  justify-content: center;
  padding: 50px;
  font-family: "Century Schoolbook";
  font-size: 1rem;
}
</style>

<script lang="ts">
import { IonPage, IonImg, IonText, IonRow, IonGrid } from "@ionic/vue";

export default {
  name: "StartTab",
  components: { IonPage, IonImg, IonText, IonRow, IonGrid },
};
</script>