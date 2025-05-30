import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudSelectorComponent } from './cloud-selector.component';

describe('CloudSelectorComponent', () => {
  let component: CloudSelectorComponent;
  let fixture: ComponentFixture<CloudSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
