import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectiveComponent } from './directive.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioChange, MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DirectiveComponent', () => {
  let component: DirectiveComponent;
  let fixture: ComponentFixture<DirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DirectiveComponent,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatRadioModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct initial page title', () => {
    expect(component.currentPage).toEqual('Home');
  });

  it('should update current page when onPageChange is called', () => {
    component.onPageChange('Contact');
    expect(component.currentPage).toEqual('Contact');
  });

  it('should handle radio button changes correctly', () => {
    component.onRadioChange({ value: 'lala' } as MatRadioChange);
    expect(component.currentClasses['color-yellow']).toBeTrue();
    expect(component.currentClasses['shape-1']).toBeTrue();
  });
});
