const axios = require('axios');
import supabase from '..';


// async function retrieveAPI(food){
//     let foodResponse = []


// const options = ({
//     method: 'GET',
//     url: `https://api.api-ninjas.com/v1/nutrition?query=${food}`,
//     headers: {
//         'X-Api-Key': 'jw6X1fPFcqvluLn2axFOhw==hPnmUVnWDfJqglC8'
//         },
//     })
//     try {
//         const response = await axios.request(options);
//         console.log(response.data);
//     } catch (error) {
//         console.error(error);
//     }
//     const randomValue = []
//     for(let i = 0; i< foodResponse.length; i++){
//         randomValue.push({name :foodResponse[i].name, calories: foodResponse[i].calories, price: 0, img:''})
//     }
// const { data, error } = await supabase
// .from('habibisstupid')
// .insert([...randomValue])
// .select()
// }

async function meat(){
let { data: meat, error } = await supabase
    .from('meat')
    .select('*')
    return meat
}

async function featured(){
let { data: featured, error } = await supabase
    .from('featured')
    .select('*')
    return featured
    }

async function retrieveData(name){
let { data: featured, error } = await supabase
.from('featured')
.select('*')
.eq('name',name)
return featured
}

async function bothTables(){
    let { data: meat, error } = await supabase
    .from('meat')
    .select('*')
    let { data: featured, error1 } = await supabase
    .from('featured')
    .select('*')
    return [...featured, ...meat]
}


    export default {
        // retrieveAPI,
        meat,
        featured,
        retrieveData,
        bothTables
    }