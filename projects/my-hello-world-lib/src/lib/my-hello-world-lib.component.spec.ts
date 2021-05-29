import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHelloWorldLibComponent } from './my-hello-world-lib.component';

describe('MyHelloWorldLibComponent', () => {
  let component: MyHelloWorldLibComponent;
  let fixture: ComponentFixture<MyHelloWorldLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyHelloWorldLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHelloWorldLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
