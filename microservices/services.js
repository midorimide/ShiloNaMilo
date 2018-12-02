import axios from 'axios';
import * as gateway from './gateway';
import { logRequest } from './utils';

export const services = [
    {
        id: 11,
        name: "Walk Your Dog",
        description: "Hamburger excepteur ex non. Picanha labore t-bone excepteur, shoulder jerky frankfurter jowl venison veniam andouille tail shank chicken prosciutto. Lorem et capicola pariatur frankfurter, fugiat turkey. Ex consequat dolore, eiusmod shank bacon tri-tip shoulder elit. Jowl rump tenderloin officia labore reprehenderit.",
        user_id: 11,
        category: "pet",
        mark: 4.5,
        mark_amount: 10
    },
    {
        id: 12,
        name: "Walk Your Cat",
        description: "Hamburger excepteur ex non. Picanha labore t-bone excepteur, shoulder jerky frankfurter jowl venison veniam andouille tail shank chicken prosciutto. Lorem et capicola pariatur frankfurter, fugiat turkey. Ex consequat dolore, eiusmod shank bacon tri-tip shoulder elit. Jowl rump tenderloin officia labore reprehenderit.",
        user_id: 11,
        category: "pet",
        mark: 3.7,
        mark_amount: 6
    },
    {
        id: 13,
        name: "Bake a cake",
        description: "Hamburger excepteur ex non. Picanha labore t-bone excepteur, shoulder jerky frankfurter jowl venison veniam andouille tail shank chicken prosciutto. Lorem et capicola pariatur frankfurter, fugiat turkey. Ex consequat dolore, eiusmod shank bacon tri-tip shoulder elit. Jowl rump tenderloin officia labore reprehenderit.",
        user_id: 12,
        category: "food",
        mark: 4,
        mark_amount: 26
    },
    {
        id: 14,
        name: "Stay in queue",
        description: "Hamburger excepteur ex non. Picanha labore t-bone excepteur, shoulder jerky frankfurter jowl venison veniam andouille tail shank chicken prosciutto. Lorem et capicola pariatur frankfurter, fugiat turkey. Ex consequat dolore, eiusmod shank bacon tri-tip shoulder elit. Jowl rump tenderloin officia labore reprehenderit.",
        user_id: 13,
        category: "social",
        mark: 5,
        mark_amount: 13
    }
];

export async function getAllServices(start = 0, amount = 10, sortingField = 'id', ascending = true){
    let request = await axios.get(gateway.paths.services.all, {
        params: {amount, start, sortingField, ascending}
    })

    request.data = request.data.concat(services)

    logRequest("getAllServices", request)

    return {
        status: request.status,
        result: request.data
    }
}

export async function getServiceById(id){
    let request = await axios.get(gateway.paths.services.id, {
        params: {id}
    })

    services.forEach((service) => {
        if (service.id == id){
            request.data = {result: Object}
            request.data.result = service
        }
    })

    logRequest("getServiceById", request)

    return {
        status: request.status,
        result: request.data.result
    }
}

export async function getServicesInCategory(category,
    start = 0, amount = 10, sortingField = 'id', ascending = true){
    let request = await axios.get(gateway.paths.services.category, {
        params: {category, amount, start, sortingField, ascending}
    })

    services.forEach((service) => {
        if (service.category == category){
            request.data.result = request.data.result.concat(service)
        }
    })

    logRequest("getServicesInCategory", request)

    return {
        status: request.status,
        result: request.data.result
    }
}

export async function getServicesByUser(user,
    start = 0, amount = 10, sortingField = 'id', ascending = true){
    let request = await axios.get(gateway.paths.services.user, {
        params: {user, amount, start, sortingField, ascending}
    })

    services.forEach((service) => {
        if (service.user_id == user){
            request.data.result = request.data.result.concat(service)
        }
    })

    logRequest("getServicesByUser", request)

    return {
        status: request.status,
        result: request.data.result
    }
}