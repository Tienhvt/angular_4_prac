/**
 * Created by fox on 05/07/2017.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Engineer} from './engineer';

@Injectable()
export class EngineerService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private engineerUrl = 'api/engineers';

  constructor(private http: Http) { }
  save(engineer: Engineer):Promise<Engineer>  {
    return this.http
        .post(this.engineerUrl, JSON.stringify(engineer), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Engineer)
        .catch(this.handleError);
  }
  update(engineer: Engineer) :Promise<Engineer> {
    const url = `${this.engineerUrl}/${engineer.id}`;
    return this.http
      .put(url, JSON.stringify(engineer), {headers: this.headers})
      .toPromise()
      .then(() => engineer)
      .catch(this.handleError);
  }
  get(id: number): Promise<Engineer> {
    const url = `${this.engineerUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Engineer)
      .catch(this.handleError);
  }
  getAll():Promise<Engineer[]> {
    return this.http.get(this.engineerUrl)
      .toPromise()
      .then(response => response.json().data as Engineer[])
      .catch(this.handleError);
  }
  handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
