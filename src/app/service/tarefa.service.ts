import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { Tarefa } from '../interface/tarefa';

@Injectable({
  providedIn: 'root',
})
export class TarefaService {
  private readonly API = 'http://localhost:3000/tarefas';
  private tarefasSubject = new BehaviorSubject<Tarefa[]>([]);
  tarefas$ = this.tarefasSubject.asObservable();

  constructor(private http: HttpClient) {}

  listar(): void { //categoria: string e Observable<Tarefa[]>
    let params = new HttpParams().appendAll({
      _sort: 'id',
      _order: 'desc',
    });
    // if (categoria) {
    //   params = params.append('categoria', categoria);
    // }
    this.http.get<Tarefa[]>(this.API, { params }).subscribe((tarefas) => {
      let tarefasTemporarias = this.tarefasSubject.getValue();
      tarefasTemporarias = tarefasTemporarias.concat(tarefas);
      this.tarefasSubject.next(tarefasTemporarias);
    });
  }

  criar(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.API, tarefa);
  }

  editar(tarefa: Tarefa): Observable<Tarefa> {
    const url = `${this.API}/${tarefa.id}`;
    return this.http.put<Tarefa>(url, tarefa);
  }

  excluir(id: number): Observable<Tarefa> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Tarefa>(url);
  }

  buscarPorId(id: number): Observable<Tarefa> {
    const url = `${this.API}/${id}`;
    return this.http.get<Tarefa>(url);
  }

  atualizarStatusTarefa(tarefa: Tarefa): Observable<Tarefa> {
    tarefa.statusFinalizado = !tarefa.statusFinalizado;
    return this.editar(tarefa);
  }
}
