import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipePartComponent } from './recipe-part';

describe('RecipePart', () => {
  let component: RecipePartComponent;
  let fixture: ComponentFixture<RecipePartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipePartComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RecipePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
