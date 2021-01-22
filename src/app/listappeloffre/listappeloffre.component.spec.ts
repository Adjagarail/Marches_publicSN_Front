import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListappeloffreComponent } from './listappeloffre.component';

describe('ListappeloffreComponent', () => {
  let component: ListappeloffreComponent;
  let fixture: ComponentFixture<ListappeloffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListappeloffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListappeloffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
