import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CloudServicesListService } from '../../core/Services/cloud-services-list.service';
import { CloudServiceItem } from '../../core/models/cloud-service-model-item';
import { CloudService } from '../../core/Services/cloud.service';
import { LoadingSkeletonComponent } from '../loading-skeleton/loading-skeleton.component';

@Component({
  selector: 'cloud-selector',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoadingSkeletonComponent],
  templateUrl: './cloud-selector.component.html',
  styleUrl: './cloud-selector.component.css'
})
export class CloudSelectorComponent {
  cloudForm: FormGroup;
  servicesList: CloudServiceItem[] = [];
  ideas: any;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder, private cloudServiceList: CloudServicesListService, private cloudService: CloudService) {
    this.cloudForm = this.fb.group({
      cloudProvider: ['Azure', Validators.required], // Default to Azure
      experienceLevel: ['', Validators.required],
      serviceList: this.fb.array([], Validators.required)
    });
    this.servicesList = this.cloudServiceList.getServicesList('Azure');
  }

  onProviderChange(event: any) {
    const provider = typeof event === 'string' ? event : event.target.value;
    this.servicesList = this.cloudServiceList.getServicesList(provider);
    // Reset selected services when provider changes
    (this.cloudForm.get('serviceList') as FormArray).clear();
  }

  onServiceChange(event: any) {
    const serviceArray = this.cloudForm.get('serviceList') as FormArray;
    if (event.target.checked) {
      serviceArray.push(this.fb.control(event.target.value));
    } else {
      const idx = serviceArray.controls.findIndex(x => x.value === event.target.value);
      if (idx !== -1) serviceArray.removeAt(idx);
    }
  }

  onSubmit() {
    if (this.cloudForm.valid) {
      const payload = {
        cloudProvider: this.cloudForm.value.cloudProvider,
        experienceLevel: this.cloudForm.value.experienceLevel,
        serviceList: this.cloudForm.value.serviceList,
        provider: 'gemini'
      };
      console.log('Submitting:', payload);
      this.isLoading = true; // Start loading state
      this.cloudService.getProjectIdeas(payload).subscribe({
        next: (response) => {
          console.log('Response:', response);
          this.ideas = response; // Assuming response contains the project ideas
          this.isLoading = false; // Stop loading state
        },
        error: (error) => {
          console.error('Error:', error);
          // Handle the error as needed
        }
      });
    }
  }
}
