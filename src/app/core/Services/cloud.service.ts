import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectIdeaRequest } from '../models/cloud-service-model-item';

@Injectable({
    providedIn: 'root'
})
export class CloudService {

    private apiUrl = 'http://localhost:3000/api';
    constructor(private http: HttpClient) { }

    getProjectIdeas(payload: ProjectIdeaRequest) {
        return this.http.post(`${this.apiUrl}/project-ideas`, payload);
    }
}
