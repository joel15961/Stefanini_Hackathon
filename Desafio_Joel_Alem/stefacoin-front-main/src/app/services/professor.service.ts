import { HttpClient ,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError  } from 'rxjs';
import { Professor } from '../models/professor';
import { retry, catchError } from 'rxjs/operators';

const URL = 'http://localhost:3000/stefanini/professor';

@Injectable({
  providedIn: 'root',
})
export class ProfessorService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // #pegabandeira
  listar(filtro: Partial<Professor>): Observable<Professor[]> {
    return this.httpClient.get<Professor[]>(URL)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }

  obter() {}

  incluir(professor: Professor): Observable<Professor> {
    return this.httpClient.post<Professor>(URL, JSON.stringify(Professor), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  alterar() {}

  excluir() {}

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
