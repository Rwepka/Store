import { defineStore } from "pinia";
export const useCheckStore = defineStore('checkStore', {
  state() {
    return {
      check: [
        {
          id: 1,
          name: "Акрил",
          checked: true
        },
        {
          id: 2,
          name: "Альпака",
          checked: true
        },
        {
          id: 3,
          name: "Атлас",
          checked: false
        },
        {
          id: 4,
          name: "Ацетат",
          checked: false
        },
        {
          id: 5,
          name: "Бархат",
          checked: true
        },
        {
          id: 6,
          name: "Батист",
          checked: false
        },
        {
          id: 7,
          name: "Акрил",
          checked: false
        },
        {
          id: 8,
          name: "Альпака",
          checked: false
        },
        {
          id: 9,
          name: "Атлас",
          checked: false
        },
        {
          id: 10,
          name: "Ацетат",
          checked: false
        },
        {
          id: 11,
          name: "Бархат",
          checked: false
        },
        {
          id: 12,
          name: "Батист",
          checked: false
        },
      ]
    }
  }
})