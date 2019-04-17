import Service from "./service";

export default class ServiceContainer {
    constructor(api){
        this.service = new Service(api);
    }
}