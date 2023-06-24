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
                    image: "/assets/matting1.png",
                    favorite: false, 
                    inBusket: 1
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
                    image: "/assets/matting2.png",
                    favorite: true,
                    inBusket: 0
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
                    image: "/assets/matting3.png",
                    favorite: false, 
                    inBusket: 0
                },
                {
                  id: 4,
                  facture: 'Рогожка',
                  name: 'Альпийская деревенька',
                  width: 1.5,
                  structure: "100%",
                  density: '170 гр/м2',
                  price: 240,
                  totalPrice: 360,
                  image: "/assets/matting4.png",
                  favorite: false, 
                  inBusket: 0
                },
                {
                  id: 5,
                  facture: 'Рогожка',
                  name: 'Альпийская деревенька',
                  width: 1.5,
                  structure: "100%",
                  density: '170 гр/м2',
                  price: 240,
                  totalPrice: 360,
                  image: "/assets/matting5.png",
                  favorite: false, 
                  inBusket: 0
                },
                {
                  id: 6,
                  facture: 'Рогожка',
                  name: 'Альпийская деревенька',
                  width: 1.5,
                  structure: "100%",
                  density: '170 гр/м2',
                  price: 240,
                  totalPrice: 360,
                  image: "/assets/matting6.png",
                  favorite: false, 
                  inBusket: 0
                },
                {
                  id: 7,
                  facture: 'Рогожка',
                  name: 'Альпийская деревенька',
                  width: 1.5,
                  structure: "100%",
                  density: '170 гр/м2',
                  price: 240,
                  totalPrice: 360,
                  image: "/assets/matting7.png",
                  favorite: false, 
                  inBusket: 0
                },
                {
                  id: 8,
                  facture: 'Рогожка',
                  name: 'Альпийская деревенька',
                  width: 1.5,
                  structure: "100%",
                  density: '170 гр/м2',
                  price: 240,
                  totalPrice: 360,
                  image: "/assets/matting8.png",
                  favorite: false, 
                  inBusket: 0
                },
                {
                  id: 9,
                  facture: 'Рогожка',
                  name: 'Альпийская деревенька',
                  width: 1.5,
                  structure: "100%",
                  density: '170 гр/м2',
                  price: 240,
                  totalPrice: 360,
                  image: "/assets/matting9.png",
                  favorite: false, 
                  inBusket: 0
                },
                {
                  id: 10,
                  facture: 'Рогожка',
                  name: 'Альпийская деревенька',
                  width: 1.5,
                  structure: "100%",
                  density: '170 гр/м2',
                  price: 240,
                  totalPrice: 360,
                  image: "/assets/matting10.png",
                  favorite: false, 
                  inBusket: 0
                },
                {
                  id: 11,
                  facture: 'Рогожка',
                  name: 'Альпийская деревенька',
                  width: 1.5,
                  structure: "100%",
                  density: '170 гр/м2',
                  price: 240,
                  totalPrice: 360,
                  image: "/assets/matting11.png",
                  favorite: false, 
                  inBusket: 0
                },
                {
                  id: 12,
                  facture: 'Рогожка',
                  name: 'Альпийская деревенька',
                  width: 1.5,
                  structure: "100%",
                  density: '170 гр/м2',
                  price: 240,
                  totalPrice: 360,
                  image: "/assets/matting12.png",
                  favorite: false, 
                  inBusket: 0
                },
              
            ]
        }
    }
})