<template>
  <div :id="id" class="popular-sets__wrapper__cards__card">
    <router-link :to="`/product/${id}`">
      <div class="popular-sets__wrapper__cards__card_img">
        <img :src="img" alt="">
      </div>
      <div class="popular-sets__wrapper__cards__card__information">
        <div class="popular-sets__wrapper__cards__card__information_title">{{ title }}</div>
        <div class="popular-sets__wrapper__cards__card__information_description">{{ description }}</div>
      </div>
    </router-link>
    <div class="popular-sets__wrapper__cards__card__price-basket">
      <div class="popular-sets__wrapper__cards__card__price-basket_price">{{ price }} руб</div>

      <button
          @click="addCarts(currentCartId, id)"
          type="submit"
          class="popular-sets__wrapper__cards__card__price-basket_basket"
          v-if="isLoggedIn"
      >
        <i class="ic_basket"></i>
        <span>В корзину</span>
      </button>
      <div v-else class="popular-sets__wrapper__cards__card__price-basket_basket no_login">
        <router-link to="/auth"> зарегистрируйтесь чтобы добавить корзину</router-link>
      </div>

    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {collection, onSnapshot, query, doc, addDoc, getDocs, updateDoc} from "firebase/firestore";
import {db} from "@/firebase";

const auth = getAuth();
export default {
  props: ['id', 'img', 'title', 'price', 'description'],
  data() {
    return {
      basket: ref([]),
      carts: ref([]),
    }
  },
  methods: {

    withdrawalBasket: function () {
      const basketQuery = query(collection(db, "basket"));
      onSnapshot(basketQuery, (snapshot) => {
        this.basket = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            cartsId: doc.data().cartsId,
            userId: doc.data().userId,
          }
        });
        const currentUser = this.basket.find(basket => basket.userId === auth.lastNotifiedUid);
        if (currentUser) {
          this.currentCartId = currentUser.cartsId;
          this.withdrawalCarts(this.currentCartId);
        } else {
          console.error("Корзина для пользователя не найдена.");
        }
      });
    },

    withdrawalCarts: function (cartId) {
      if (!cartId) {
        console.error("CartId возможно не найден");
        return;
      }
      const cartsDocRef = doc(db, "basket", "carts");
      const cartsCollectionRef = collection(cartsDocRef, cartId);
      const cartsQuery = query(cartsCollectionRef);
      onSnapshot(cartsQuery, (snapshot) => {
        this.carts = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            product_id: doc.data().product_id,
            quantity: doc.data().quantity,
          }
        });
      });
    },

    addCarts: async function (cartId, itemId) {
      if (!cartId || !itemId) {
        console.error("CartId или itemId возможно не найден");
        return;
      }

      const cartsDocRef = doc(db, 'basket', "carts");
      const cartsCollectionRef = collection(cartsDocRef, cartId);

      const cartsQuery = query(cartsCollectionRef);
      const querySnapshot = await getDocs(cartsQuery);

      let existingItem = null;
      querySnapshot.forEach(doc => {
        if (doc.data().product_id === itemId) {
          existingItem = doc;
        }
      });

      if (existingItem) {
        const newQuantity = existingItem.data().quantity + 1;
        await updateDoc(existingItem.ref, {
          quantity: newQuantity,
        });
      } else {
        await addDoc(cartsCollectionRef, {
          product_id: itemId,
          quantity: 1,
        });
      }
    },
  },
  setup() {
    const isLoggedIn = ref(true);

    onAuthStateChanged(auth, (user) => {
          // console.log(user.uid);
          if (user) {
            isLoggedIn.value = true;
          } else {
            isLoggedIn.value = false;
          }
        }
    )

    return {
      isLoggedIn,
    }
  },
  mounted() {
    this.withdrawalBasket();
    this.withdrawalCarts();
  },
}
</script>

<style scoped lang="scss">
.popular-sets__wrapper__cards__card {
  display: grid;
  background: #FFFFFF;
  outline: 1px solid rgb(237, 237, 240);
  border-radius: 5px;
  position: relative;
  height: 100%;

  &_img {
    width: 100%;
    height: 300px;

    img {
      width: 100%;
      height: 300px;
    }
  }

  &__information {
    padding: 21px;

    &_title {
      font-size: 18px;
      font-weight: 600;
    }

    &_description {
      margin-top: 14px;
      font-size: 14px;
      font-weight: 400;
      color: #292929;
    }
  }

  &__price-basket {
    color: #292929;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    &_price {
      display: flex;
      align-items: center;
      width: 100%;
      outline: 1px solid rgb(237, 237, 240);
      padding: 0 0 0 21px;
      color: #E7426A;
      font-size: 18px;
      font-weight: 600;
      height: 100%;
      border-radius: 0 0 0 5px;
    }

    &_basket {
      text-align: center;
      cursor: pointer;
      align-content: flex-end;
      width: 70%;
      padding: 13px 22px;
      outline: 1px solid rgb(237, 237, 240);
      font-size: 14px;
      height: 100%;
      font-weight: 600;
      border: none;
      background: #FFFFFF;
      color: #292929;
      border-radius: 0 0 5px 0;

      i {
        margin-right: 11px;
      }
    }

    &_basket.no_login {
      cursor: auto;
      font-size: 10px;
    }
  }
}


@media screen and (max-width: 768px) {
  .popular-sets__wrapper__cards__card {
    &_img {
      height: 235px;

      img {
        height: 235px;
      }
    }

    &__information {
      position: relative;
    }

    &__price-basket {
      &_basket {

        padding: 10px 8px;
      }

      &_basket.no_login {
        font-size: 8px;
      }
    }
  }
}

@media screen and (max-width: 560px) {
  .popular-sets__wrapper__cards__card {
    &_img {
      padding: 10px 10px 0 10px;
      height: 130px;

      img {
        height: 130px;
      }
    }

    &__information {
      margin-top: 5px;
      position: relative;
      padding: 10px 12px;

      &_title {
        font-size: 14px;
      }

      &_description {
        font-size: 12px;
      }
    }

    &__price-basket {

      &_price {
        font-size: 14px;
      }

      &_basket {
        padding: 10px 8px;
        font-size: 20px;

        span {
          display: none;
        }

        i {
          margin: 0;
        }
      }

      &_basket.no_login {
        font-size: 6px;
      }
    }
  }
}

@media screen and (max-width: 360px) {
  .popular-sets__wrapper__cards__card {
    &_img {
      padding: 8px 8px 0 8px;
      height: 100px;

      img {
        height: 100px;
      }
    }

    &__information {
      padding: 6px 12px;

      &_title {
        font-size: 12px;
      }

      &_description {
        font-size: 10px;
        margin-top: 5px;
      }
    }

    &__price-basket {
      font-size: 16px;

      &_price {
        padding: 0 0 0 8px;
        font-size: 10px;
      }

      &_basket {
        padding: 4px 4px;
        width: 48%;
        font-size: 14px;

        i {
          margin-right: 4px;
        }
      }

      &_basket.no_login {
        font-size: 4px;
      }
    }
  }
}
</style>