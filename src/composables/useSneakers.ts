import {ref} from 'vue'


export type Color = {color:string, img:string}

export interface ISneakerObj {
    title:string,
    colors:{
        primary: Color[],
        secondary: Color[],
    },
    primaryIdx: number,
    secondaryIdx: number,
    sizes:number[],
    price:number
}


const sneakers = ref<ISneakerObj[]>([
    {
        title:'AIR JORDAN 1 RETRO HIGH OG',
        colors:{
            
            primary:[
                { color:'#A8000A', img:new URL('../assets/air-jordan/red.png', import.meta.url).href },
                { color:'#002B7B', img:new URL('../assets/air-jordan/blue.png', import.meta.url).href },
                { color:'#000000', img:new URL('../assets/air-jordan/black.png', import.meta.url).href },
                { color:'#86942F', img:new URL('../assets/air-jordan/lightGreen.png', import.meta.url).href },
                { color:'#3D996D', img:new URL('../assets/air-jordan/green.png', import.meta.url).href },
                { color:'#9B0E95', img:new URL('../assets/air-jordan/purple.png', import.meta.url).href },
                { color:'#973030', img:new URL('../assets/air-jordan/darkRed.png', import.meta.url).href }
            ],
            secondary:[
                { color:'#FFFFFF', img:new URL('../assets/air-jordan/secondWhite.png', import.meta.url).href },
                { color:'#002B7B', img:new URL('../assets/air-jordan/secondBlue.png', import.meta.url).href },
                { color:'#000000', img:new URL('../assets/air-jordan/secondBlack.png', import.meta.url).href },
                { color:'#3D996D', img:new URL('../assets/air-jordan/secondGreen.png', import.meta.url).href },
                { color:'#9B0E95', img:new URL('../assets/air-jordan/secondPurple.png', import.meta.url).href },
                { color:'#973030', img:new URL('../assets/air-jordan/secondRed.png', import.meta.url).href },
            ],
        },
        primaryIdx:3,
        secondaryIdx:2,
        sizes:[39, 40, 41, 42, 43, 44, 45],
        price:245,
    },
    {
        title:'AIR MAX 1 MID',
        colors:{
            
            primary:[
                { color:'#A8000A', img:new URL('../assets/air-max/red.png', import.meta.url).href },
                { color:'#002B7B', img:new URL('../assets/air-max/blue.png', import.meta.url).href },
                { color:'#000000', img:new URL('../assets/air-max/dark.png', import.meta.url).href },
                { color:'#FFFFFF', img:new URL('../assets/air-max/white.png', import.meta.url).href },
            ],
            secondary:[
              
            ],
        },
        primaryIdx:2,
        secondaryIdx:0,
        sizes:[41, 42, 43, 44, 45],
        price:230,
    },
    {
        title:'COURT VISION',
        colors:{
            
            primary:[
                { color:'#A8000A', img:new URL('../assets/court/red.png', import.meta.url).href },
                { color:'#fbffd4', img:new URL('../assets/court/whiteyellow.png', import.meta.url).href },
                { color:'#ffe978', img:new URL('../assets/court/yellow.png', import.meta.url).href },
                { color:'#002B7B', img:new URL('../assets/court/whiteblue.png', import.meta.url).href },
                { color:'#000000', img:new URL('../assets/court/whiteblack.png', import.meta.url).href },
            ],
            secondary:[
              
            ],
        },
        primaryIdx:2,
        secondaryIdx:0,
        sizes:[39, 40, 41, 42, 43],
        price:205,
    },
    {
        title:'DUNK LOW',
        colors:{
            
            primary:[
                { color:'#78f1ff', img:new URL('../assets/dunk/aquared.png', import.meta.url).href },
                { color:'#000000', img:new URL('../assets/dunk/blackpink.png', import.meta.url).href },
                { color:'#3D996D', img:new URL('../assets/dunk/green.png', import.meta.url).href },
                { color:'#A8000A', img:new URL('../assets/dunk/redblue.png', import.meta.url).href },
            ],
            secondary:[
              
            ],
        },
        primaryIdx:1,
        secondaryIdx:0,
        sizes:[40, 41, 42, 43, 44],
        price:219,
    },

]) 






export const useSneakers = () => {



    



   const moveForward = (arr:Color[], activeIdx:number) => {
       arr.unshift(...arr.splice(arr.length - 1, 1))
       if(activeIdx >= arr.length - 1){
           activeIdx = 0
       }else{
           activeIdx++
       }
   }


   const moveBackward = (arr:Color[], activeIdx:number) => {
       arr.push(...arr.splice(0, 1))
       if(activeIdx <= 0){
           activeIdx = arr.length - 1
       }else{
           activeIdx--
       }
   }
   
    return {
        sneakers,
        moveForward,
        moveBackward
    }
}