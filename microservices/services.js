import axios from 'axios';
import * as gateway from './gateway';

export const services = [
    {
        id: 1,
        name: "Walk Your Dog",
        description: "Hamburger excepteur ex non. Picanha labore t-bone excepteur, shoulder jerky frankfurter jowl venison veniam andouille tail shank chicken prosciutto. Lorem et capicola pariatur frankfurter, fugiat turkey. Ex consequat dolore, eiusmod shank bacon tri-tip shoulder elit. Jowl rump tenderloin officia labore reprehenderit.",
        user_id: "@iduchan0",
        category: "category",
        mark: 3,
        mark_amount: 10
    }
];

export async function getAllServices(start = 0, amount = 10, sortingField = 'id', ascending = true){
    let request = await axios.get(gateway.paths.services.all, {
        params: {amount, start, sortingField, ascending}
    });

    console.log(request)

    return {
        status: request.status,
        result: request.data
    }
}

export async function getServiceById(id){
    let request = await axios.get(gateway.paths.services.id, {
        params: {id}
    });

    console.log(request)

    return {
        status: request.status,
        result: request.data.result
    }
}

export async function getServicesInCategory(category,
    start = 0, amount = 10, sortingField = 'id', ascending = true){
    let request = await axios.get(gateway.paths.services.category, {
        params: {category, amount, start, sortingField, ascending}
    });

    console.log(request)

    return {
        status: request.status,
        result: request.data
    }
}

export async function getServicesByUser(user,
    start = 0, amount = 10, sortingField = 'id', ascending = true){
    let request = await axios.get(gateway.paths.services.user, {
        params: {user, amount, start, sortingField, ascending}
    });

    console.log(request)

    return {
        status: request.status,
        result: request.data
    }
}