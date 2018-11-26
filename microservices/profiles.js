import axios from 'axios';
import * as gateway from './gateway';
import { logRequest } from './utils';

const profiles = [
    {
        id: 1,
        username: "iduchan0",
        firstName: "Ivor",
        secondName: "Duchan",
        fullName: "Ivor Duchan",
        emailAddress: "iduchan0@dmoz.org",
        rating: 3.6,
        description: "Hi! I am a cool guy, who is an expert Software Engineer." +
            "\n I can help you with any of your projects for a low price.",
        walletAddress: "WalletAddress",
        location: "Lviv",
        profilePicturePath: "https://media.giphy.com/media/3M9zf3NSuNgBWM3RWC/giphy.gif"
    }
];

export async function getProfile(id) {
    let request = await axios.get(gateway.paths.profiles.profile, {
        params: {
            id: id
        }
    });

    logRequest("getProfile", request)

    return {
        status: request.status,
        result: request.data
    }
}