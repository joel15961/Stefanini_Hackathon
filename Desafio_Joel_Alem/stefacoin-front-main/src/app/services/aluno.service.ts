import { Aluno } from './../models/aluno';
import { HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError} from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

const URL = 'http://localhost:3000/stefanini/aluno';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient: HttpClient) { }

  saveAluno(aluno: Aluno): Observable<Aluno> {
    return this.httpClient.post<Aluno>(URL, JSON.stringify(aluno), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
