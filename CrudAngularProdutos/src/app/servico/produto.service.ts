import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';
import { Api } from '../api/api';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient
  ) { }


  listarProdutos(): Observable<Produto[]> {
    const url = `${Api.url}/produtos`
    return this.http.get<Produto[]>(url);
  }

  buscarPorId(id: number): Observable<Produto> {
    const url = `${Api.url}/produto/${id}`;
    return this.http.get<Produto>(url);
  }

  cadastrar(produto: Produto): Observable<Produto> {
    const url = `${Api.url}`;
    return this.http.post(url, produto);
  }

  atualizar(produto: Produto): Observable<Produto> {
    const url = `${Api.url}/produto/${produto.id}`;
    return this.http.put<Produto>(url, produto);
  }

  deletar(id: number): Observable<Produto> {
    const url = `${Api.url}/produto/${id}`;
    return this.http.delete<Produto>(url);
  }

}
