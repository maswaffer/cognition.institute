import{Injectable} from '@angular/core';
import{Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export class Sentence{
    constructor( text: string, response: boolean, createdAt: string, updatedAt:string, id: number){}
}

@Injectable()
export class SentenceService{
    constructor(private http: Http){}

    getSentences(){
        return this.http
            .get('/sentence')
            .map((response: Response) => <Sentence[]>response.json())
            .do(data => console.log('data:' + data))
            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error);
        let msg = `Error status code ${error.status} at $error.url}`;
        return Observable.throw(msg);
    }
}