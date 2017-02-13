import{Injectable} from '@angular/core';
import{Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export class Sentence{
    text: string;
    response: boolean;
    constructor();
    constructor( text?: string, response?: boolean, createdAt?: string, updatedAt?:string, id?: number){}
}

@Injectable()
export class SentenceService{
    constructor(private http: Http){}

    getSentences(){
        return this.http
            .get('/api/v1/sentence?limit=100')
            .map((response: Response) => <Sentence[]>response.json())
            //.do(data => console.log('sentence data:' + data))
            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error);
        let msg = `Error status code ${error.status} at $error.url}`;
        return Observable.throw(msg);
    }
}