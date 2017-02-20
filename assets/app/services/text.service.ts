import{Injectable} from '@angular/core';
import{Http, Response} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export class TextContent{
    text: string[];
    constructor();
    constructor( text?: string){}
}

@Injectable()
export class TextService{
    constructor(private http: Http){}

    getText(fileName: string){
        return this.http
            .get('/c/t/'+fileName)
            .map((response: Response) => <string>response.text())
            //.do(data => console.log('sentence data:' + data))
            .catch(this.handleError);
    }

    handleError(error: Response){
        console.error(error);
        let msg = `Error status code ${error.status} at $error.url}`;
        return Observable.throw(msg);
    }
}