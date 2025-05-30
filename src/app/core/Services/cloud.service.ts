import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectIdeaRequest } from '../models/cloud-service-model-item';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CloudService {

    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) { }

    getProjectIdeas(payload: ProjectIdeaRequest) {
        return this.http.post(`${this.apiUrl}/project-ideas`, payload);
    }
}
