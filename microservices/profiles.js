import axios from 'axios';
import * as gateway from './gateway';
import { logRequest } from './utils';

const profiles = [
    {
        id: 11,
        username: "naruto",
        firstName: "Naruto",
        secondName: "Uzumaki",
        fullName: "Naruto Uzumaki",
        emailAddress: "rassengun@konoha.jp",
        rating: 4.8,
        description: "Yow, sobaki, ya Naruto Uzumaki. I da, kstati, ya budushhij Hokage.",
        walletAddress: "WalletAddress",
        location: "Kyiv",
        profilePicturePath: "https://vignette.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png"
    },
    {
        id: 12,
        username: "sasuke",
        firstName: "Uchiha",
        secondName: "Sasuke",
        fullName: "Uchiha Sasuke",
        emailAddress: "chidori@konoha.jp",
        rating: 3.9,
        description: "Ya Saske ot slova \" Sosat' \". Mogu ujti iz Konohi.",
        walletAddress: "WalletAddress",
        location: "Lviv",
        profilePicturePath: "https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png"
    },
    {
        id: 13,
        username: "sakura",
        firstName: "Sakura",
        secondName: "Haruno",
        fullName: "Sakura Haruno",
        emailAddress: "shanaroo@konoha.jp",
        rating: 4.3,
        description: "Ya Sakura. Nichego ne delaju i ljublju Saske.",
        walletAddress: "WalletAddress",
        location: "Odessa",
        profilePicturePath: "https://vignette.wikia.nocookie.net/naruto/images/6/64/Sakura_Part_1.png"
    }
];

export async function getProfile(id) {
    let request = await axios.get(gateway.paths.profiles.profile, {
        params: {
            id: id
        }
    })

    profiles.forEach((profile) => {
        if (profile.id == id){
            request.data = profile
        }
    })

    logRequest("getProfile", request)

    return {
        status: request.status,
        result: request.data
    }
}