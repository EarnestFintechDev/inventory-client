export interface Routes{
    create <Payload>(data: Payload,routeurl:string,id:string):any
    update<Payload>(data: Payload,ratingUrl:string,id:string):any;
    delete(routeurl:string,id: string):any;
    getOne(routeurl:string,id: string):any;
}