import{Injectable} from '@angular/core';
import{Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export class Letters{
    text: string;
    createdAt: string;
    updatedAt: string;
    id: number;
    constructor( text: string, createdAt: string, updatedAt:string, id: number){}
}

@Injectable()
export class LettersService{
    constructor(private http: Http){}

    getLetters(){
        return this.http
            .get('/api/v1/letters')
            .map((response: Response) => <Letters[]>response.json())
            .do(data => console.log('letter data:' + data))
            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error);
        let msg = `Error status code ${error.status} at $error.url}`;
        return Observable.throw(msg);
    }
}