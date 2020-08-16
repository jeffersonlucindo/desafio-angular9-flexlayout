import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Repository } from '../model/repository';
import { environment } from '../../environments/environment';

const API = environment.api

@Injectable({ providedIn: 'root' })
export class RepositoryService {

    constructor(private http: HttpClient){}

    getRepositories(userName: string){
        return this.http.get<Repository[]>(`${API + userName}/repos`);
    }
}