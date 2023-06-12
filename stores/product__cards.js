import { defineStore } from 'pinia'
export const useCardStore = defineStore ('cardStore', {
    state: () => {
        return {
            cards: [
                {
                    id: 1,
                    facture: 'Рогожка',
                    name: 'Альпийская деревенька',
                    width: 1.5,
                    structure: "100%",
                    density: '170 гр/м2',
                    price: 240,
                    totalPrice: 360,
                    image: "/assets/matting1.png"
                },
                {
                    id: 2,
                    facture: 'Рогожка',
                    name: 'Альпийская деревенька',
                    width: 1.5,
                    structure: "100%",
                    density: '170 гр/м2',
                    price: 240,
                    totalPrice: 360,
                    image: "/assets/matting2.png"
                },
                {
                    id: 3,
                    facture: 'Рогожка',
                    name: 'Альпийская деревенька',
                    width: 1.5,
                    structure: "100%",
                    density: '170 гр/м2',
                    price: 240,
                    totalPrice: 360,
                    image: "/assets/matting3.png"
                },
            ]
        }
    }
})