<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Kommunity</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Kommunity</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Kommunity',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
}
</script>
