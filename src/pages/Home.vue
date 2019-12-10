<template>
  <div class="container">
      <table class="table">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Имя</th>
            <th scope="col">Фамилия</th>
            <th scope="col">Должность</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(candidat, index) in candidates" :key="index" @click="openCard(candidat)">
                <th scope="row">
                    <img class="candidat__img" :src="candidat.photoUrl" alt="">
                </th>
                <td valign="center">{{candidat.firstName}}</td>
                <td>{{candidat.lastName}}</td>
                <td>{{candidat.jobTitle}}</td>
            </tr>
        </tbody>
        </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'CandidatesTable',
    data(){
        return{
            candidates: []
        }
    },
    created() {
        const url = `${window.location.href}data.json`
        axios.get(url)
            .then(res => {
                this.candidates = res.data
            })
    },
    methods: {
        openCard(candidate) {
            this.$store.commit('SET_CARD_VISABILITY', true)
            this.$store.commit('SET_CANDIDAT', candidate)
        }
    }
}
</script>

<style>
.candidat__img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
}
.table td, .table th {
    vertical-align: middle;
}
tbody tr {
    cursor: pointer;
    transition: all 0.2s ease-out;
}
tbody tr:hover {
    opacity: 0.6;
}
</style>