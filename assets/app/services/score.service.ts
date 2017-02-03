import{Injectable} from '@angular/core';
import{Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ScoreService{
    constructor(private http: Http){}

    saveSentences(data: any){
        let jsonData = JSON.stringify(data);
        this.http
            .post('/api/v1/score', jsonData)
            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error);
        let msg = `Error status code ${error.status} at $error.url}`;
        return Observable.throw(msg);
    }
}