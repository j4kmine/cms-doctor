import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AdminComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'mydouctor-cms'`, () => {
    const fixture = TestBed.createComponent(AdminComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mydouctor-cms');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AdminComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('mydouctor-cms app is running!');
  });
});
