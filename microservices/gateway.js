export const GATEWAY_ENDPOINT = 'http://localhost:8762/api';

export function get(path) {
    return GATEWAY_ENDPOINT + path;
}

function servicePath(rootPath, pathsGen) {
    let entry = (path = '') => rootPath + path;
    let paths = pathsGen(entry)[0];
    Object.assign(entry, paths);
    return entry;
}

export const paths = {
    auth: 'http://localhost:8080/auth',
    profiles: servicePath('http://35.244.240.101/profiles', get => [{
        profile: get('/get'),
        update: get('/update'),
        search: get('/search'),
    }]),
    services: servicePath('http://35.244.186.40/services', get => [{
        all: get('/all'),
        id: get('/id'),
        category: get('/category'),
        user: get('/user'),
        intext: get('/intext'),
        suggest: get('/suggest'),
        addService: get('/add_service'),
        updateService: get('/update_service'),
        addMark: get('/add_mark'),
        delete: get('/delete')
    }]),
    chat: servicePath('http://35.244.172.73', get => [{
        allDialogs: get('/dialogs/aquire/all'),
        saveDialog: get('/save'),
        dialogByServiceAndCustomer: get('/dialog/aquire/service'),
        allComments: get('/comments/aquire/all'),
        saveComment: get('comments/save'),
        commentByServiceAndCustomer: get('/comments/aquire/service')
    }]),
};
