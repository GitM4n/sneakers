import {ref} from 'vue'

export const sneakers = ref({
    airJordan:{
       primary:[
        { color:'#A8000A', img:new URL('./assets/air-jordan/red.png', import.meta.url).href },
        { color:'#002B7B', img:new URL('./assets/air-jordan/blue.png', import.meta.url).href },
        { color:'#000000', img:new URL('./assets/air-jordan/black.png', import.meta.url).href },
        { color:'#86942F', img:new URL('./assets/air-jordan/lightGreen.png', import.meta.url).href },
        { color:'#3D996D', img:new URL('./assets/air-jordan/green.png', import.meta.url).href },
        { color:'#9B0E95', img:new URL('./assets/air-jordan/purple.png', import.meta.url).href },
        { color:'#973030', img:new URL('./assets/air-jordan/darkRed.png', import.meta.url).href },
          { color:'#86942F', img:new URL('./assets/air-jordan/lightGreen.png', import.meta.url).href },
        { color:'#3D996D', img:new URL('./assets/air-jordan/green.png', import.meta.url).href },
        { color:'#9B0E95', img:new URL('./assets/air-jordan/purple.png', import.meta.url).href },
        { color:'#973030', img:new URL('./assets/air-jordan/darkRed.png', import.meta.url).href }
       ],
       secondary:[
           { color:'#FFFFFF', img:new URL('./assets/air-jordan/secondWhite.png', import.meta.url).href },
           { color:'#002B7B', img:new URL('./assets/air-jordan/secondBlue.png', import.meta.url).href },
           { color:'#000000', img:new URL('./assets/air-jordan/secondBlack.png', import.meta.url).href },
           { color:'#3D996D', img:new URL('./assets/air-jordan/secondGreen.png', import.meta.url).href },
           { color:'#9B0E95', img:new URL('./assets/air-jordan/secondPurple.png', import.meta.url).href },
           { color:'#973030', img:new URL('./assets/air-jordan/secondRed.png', import.meta.url).href },
       ],
       primaryIdx:3,
       secondaryIdx:2,
    }

})