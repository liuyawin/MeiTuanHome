import router from './router'

import recommend from './recommend';
import register from './register';
import login from './login';

export function registerModels(app){
    app.model(router);
    app.model(recommend);
    app.model(register);
    app.model(login);
}