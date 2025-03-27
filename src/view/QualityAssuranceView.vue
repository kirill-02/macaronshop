<template>
  <div class="guarantee">
    <div class="container">
      <div class="title">Гарантии вкуса и качества</div>
      <div class="description">При изготовлении пирожных мы используем только натуральные ингредиенты, избегая
        использования конвер
      </div>
      <div class="guarantee__wrapper">
        <div class="guarantee__wrapper__cards">

          <div class="guarantee__wrapper__cards_card" v-for="guarantees in guarantee" :key="guarantees.id">
            <div class="guarantee__wrapper__cards_card_img">
              <img :src="require(`@/../public/imagesFirebase/guarantee/${guarantees.photo}`)" alt="">
            </div>
            <div class="guarantee__wrapper__cards_card__information">
              <div class="guarantee__wrapper__cards_card__information_title">{{ guarantees.name }}</div>
              <div class="guarantee__wrapper__cards_card__information__description">
                {{ guarantees.description }}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {collection, onSnapshot, query} from "firebase/firestore";
import {db} from "@/firebase";
import {ref} from "vue"

export default {


  data() {
    return {
      guarantee: ref([]),
    };
  },

  methods: {
    withdrawalQuarantee: function () {
      const guaranteeQuery = query(collection(db, "guarantee"));

      onSnapshot(guaranteeQuery, (snapshot) => {
        this.guarantee = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            photo: doc.data().photo || [],
          }
        });
      });
    },

  },
  mounted() {
    this.withdrawalQuarantee()
  },
};
</script>

<style src="../assets/style/QualityAssurance.css" scoped>

</style>