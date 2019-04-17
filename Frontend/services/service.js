export default class Service {

    constructor(api){
        this.api=api;
        this.prefix = '';
    }

    getUrl(url){
        if(url){
            return this.prefix + '/' + url;
        }
        return this.prefix;
    }

    get(url, config){
        arguments[0] = this.getUrl(url);
        return this.api.$get(...arguments);
    }
    post(url, data, config){
        arguments[0] = this.getUrl(url);
        return this.api.$post(...arguments);
    }
    put(url, data, config){
        arguments[0] = this.getUrl(url);
        return this.api.$put(...arguments);
    }
    patch(url, data, config){
        arguments[0] = this.getUrl(url);
        return this.api.$patch(...arguments);
    }
    delete(url, config){
        arguments[0] = this.getUrl(url);
        return this.api.$delete(...arguments);
    }
    page(page){
        return this.get('', {
            params:{
                page: page
            }
        })
    }
    save(id,data){
        return this.post(id, data);
    }
    remove(id){
        return this.delete(id);
    }
    create(data){
        return this.put('', data);
    }
}