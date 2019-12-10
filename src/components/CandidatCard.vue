<template>
    <div v-if="$store.state.card_visability">
        <div class="card__bg"  @click="closeCard"/>
        <div class="candidat__card">
            <div class="card__info container row">
                <div class="col-md-4 col-12">
                    <img class="card__img" :src="$store.state.candidat.photoUrl" alt="photo">
                </div>
                <div class="col-md-8 col-12">
                    <p>Имя: {{$store.state.candidat.firstName}}</p>
                    <p>Фамилия: {{$store.state.candidat.lastName}}</p>
                    <p>Должность: {{$store.state.candidat.jobTitle}}</p>
                    <div class="text-right">
                        <button class="card__btn" @click="closeCard">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{}
    },
    methods: {
        closeCard() {
            this.$store.commit('SET_CARD_VISABILITY', false)
            this.$store.commit('SET_CANDIDAT', {})
        }
    }
}
</script>

<style>
.card__bg {
    position: fixed;
    top: 0;
    z-index: 9;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
}
.candidat__card {
    position: fixed;
    top: 0;
    z-index: 99;
    background: none;
    width: 50%;
    margin-left: 25%;
    margin-top: 20vh;
}
.card__info {
    background-color: #fff;
    border-radius: 10px;
    padding: 15px 0px;
}
.card__img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
}
.card__btn {
    text-align: right;
    border: none;
    padding: 5px 10px;
    background-color: rgb(0, 255, 98);
    color: #fff;
    border-radius: 5px;
    outline: none;
    transition: all 0.2s ease-out;
    margin-top: 10px;
}
.card__btn:hover{
    background-color: rgb(0, 200, 77);
}
.card__btn:active{
    outline: none;
    background-color: rgb(59, 255, 134);
}

@media (max-width: 576px) {
    .candidat__card {
        width: 100%;
        margin-left: 15px;
    }
    .card__bg {
        height: 200vh;
    }
    .card__img {
        margin-bottom: 15px;
    }
}
</style>