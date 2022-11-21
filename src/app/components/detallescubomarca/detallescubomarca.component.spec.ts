import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallescubomarcaComponent } from './detallescubomarca.component';

describe('DetallescubomarcaComponent', () => {
  let component: DetallescubomarcaComponent;
  let fixture: ComponentFixture<DetallescubomarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallescubomarcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallescubomarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
