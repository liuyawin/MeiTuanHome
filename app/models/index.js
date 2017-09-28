import router from './router'

import recommend from './recommend';

export function registerModels(app){
    app.model(router);
    app.model(recommend);
}