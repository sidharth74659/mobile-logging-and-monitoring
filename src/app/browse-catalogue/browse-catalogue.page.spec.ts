import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowseCataloguePage } from './browse-catalogue.page';

describe('BrowseCataloguePage', () => {
  let component: BrowseCataloguePage;
  let fixture: ComponentFixture<BrowseCataloguePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseCataloguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
