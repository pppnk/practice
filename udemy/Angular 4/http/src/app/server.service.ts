import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ServerService {
    rootUrl: string = 'https://udemy-ng-http-e2192.firebaseio.com/';
    constructor(private http: Http){}

    storeServers(servers: any[]){
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        // return this.http.post(this.rootUrl + 'data.json', servers, {
        //     headers: headers
        // });
        return this.http.put(this.rootUrl + 'data.json', servers, {
            headers: headers
        });
    }

    getServers(){
        return this.http.get(this.rootUrl + 'data.json').map(
            (response: Response) => {
                const data = response.json();
                // for(let server of data){
                //     server.name = 'FETCHED_' + server.name;
                // }
                return data;
            }
        )
        .catch(
            (error: Response) => {
                return Observable.throw('Something went wrong');
            }
         );
    }

    getAppName(){
        return this.http.get(this.rootUrl + 'appName.json').map(
            (response: Response) => {
                return response.json();
            }
        );
    }
}