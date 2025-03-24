import {defineStore} from 'pinia';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {app, db} from '../firebase.js';
import {ref} from 'vue';
import {addDoc, collection, doc} from "firebase/firestore";

export const useStateStore = defineStore('stateStore', () => {
    const user = ref(null);
    const error = ref(null);
    const auth = getAuth(app); // Инициализация auth
    const email = ref('');
    const password = ref('');
    const name = ref('');
    const city = ref('');
    const phone = ref('');
    const company = ref('');
    const setEmail = (newEmail) => {
        email.value = newEmail;
    };
    const setPassword = (newPassword) => {
        password.value = newPassword;
    };
    const setName = (newName) => {
        name.value = newName;
    };
    const setCity = (newCity) => {
        city.value = newCity;
    };
    const setPhone = (newPhone) => {
        phone.value = newPhone;
    };
    const setCompany = (newCompany) => {
        company.value = newCompany;
    };


    const registerUser = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
            user.value = userCredential.user;
            error.value = null;
            console.log("Пользователь зарегистрирован:", user.value);

            await addDoc(collection(db, 'users'), {
                name: name.value,
                city: city.value,
                phone: phone.value,
                company: company.value,
                uid: user.value.uid,
            })

            const now = new Date();
            const year = now.getFullYear();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const cartsRandom = "carts_" + Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000 + year + minutes + seconds;

            await addDoc(collection(db, 'basket'), {
                userId: auth.lastNotifiedUid,
                cartsId: cartsRandom,

            })

            const cartsDocRef = doc(db, 'basket', "carts");
            const cartsRandomCollectionRef = collection(cartsDocRef, cartsRandom);

            await addDoc(cartsRandomCollectionRef, {});
        } catch (err) {
            error.value = err.message;
            console.error("Ошибка регистрации:", err.message);
        }
    };
    return {
        email,
        password,
        setEmail,
        setPassword,
        setName,
        setCity,
        setPhone,
        setCompany,
        registerUser,
    };
});