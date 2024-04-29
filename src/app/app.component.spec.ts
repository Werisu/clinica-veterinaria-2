import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutModule } from '@clinica-veterinaria-2/layout';
import { OwnerSearchComponent } from '@clinica-veterinaria-2/owner-search';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterTestingModule,
        LayoutModule,
        OwnerSearchComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  it('should contain header', () => {
    const header: HTMLHeadElement =
      fixture.nativeElement.querySelector('header');
    expect(header).toBeTruthy();
  });
});
