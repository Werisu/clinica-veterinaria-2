import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OwnerSearchComponent } from './owner-search.component';

describe('OwnerSearchComponent', () => {
  let component: OwnerSearchComponent;
  let fixture: ComponentFixture<OwnerSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OwnerSearchComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OwnerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
