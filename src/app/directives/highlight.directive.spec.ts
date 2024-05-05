import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: `
    <h2 appHighlight="yellow" aditira="additional data">Something Yellow</h2>
    <h2 appHighlight>The Default (Gray)</h2>
    <h2>No Highlight</h2>
    <input #box [appHighlight]="box.value" value="cyan" />
  `,
})
class TestComponent {}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];
  let bareH2: DebugElement;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [HighlightDirective],
      declarations: [TestComponent],
    }).createComponent(TestComponent);
    fixture.detectChanges();
    des = fixture.debugElement.queryAll(By.directive(HighlightDirective));
    bareH2 = fixture.debugElement.query(By.css('h2:not([appHighlight])'));
  });

  it('should have three highlighted elements', () => {
    expect(des.length).toBe(3);
  });

  it('should color 2nd <h2> background with default color', () => {
    const dir = des[1].injector.get(HighlightDirective);
    const bgColor = des[1].nativeElement.style.backgroundColor;
    expect(bgColor).toBe(dir.appHighlight);
  });

  it('bare <h2> should not have a backgroundColor', () => {
    expect(bareH2.nativeElement.style.backgroundColor).toBe('');
  });

  it('should highlight the element on click', () => {
    const targetElement = des[0].nativeElement;
    targetElement.click();
    expect(targetElement.style.backgroundColor).toBe('yellow');
  });

  it('should remove the highlight on mouseleave', () => {
    const targetElement = des[0].nativeElement;
    const event = new MouseEvent('mouseleave');
    targetElement.dispatchEvent(event);
    expect(targetElement.style.backgroundColor).toBe('');
  });

  it('should log the highlight color and additional data on click', () => {
    spyOn(console, 'log');
    const targetElement = des[0].nativeElement;
    targetElement.click();
    expect(console.log).toHaveBeenCalledWith(
      'Highlight:',
      'yellow',
      'additional data'
    );
  });
});
