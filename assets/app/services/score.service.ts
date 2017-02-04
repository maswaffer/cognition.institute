import{Injectable} from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class ScoreService{
    constructor(private http: Http){}

    saveSentences(data: any){
        var jsonData = JSON.stringify(data);
        console.log('saving scores ' + data);
        console.log('saving scores ' + jsonData);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .post('/api/v1/score/', jsonData, options)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    handleError(error: Response){
        console.log('caught error');
        
        console.error(error);
        let msg = `Error status code ${error.status} at $error.url}`;
        return Observable.throw(msg);
    }
}