import{Injectable} from '@angular/core';
import{Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export class Group{
    id: number;
    pid: string;
    gid: number;
    constructor();
    constructor( id?: number, pid?: string, gid?: number){};
}

@Injectable()
export class GroupService{
    constructor(private http: Http){}

    getGroups(){
        return this.http
            .get('api/v1/group?limit=1000')
            .map((response: Response) => <Group[]>response.json())
            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error);
        let msg = `Error status code ${error.status} at $error.url}`;
        return Observable.throw(msg);
    }
}

