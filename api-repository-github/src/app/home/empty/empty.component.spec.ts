import { EmptyComponent } from "./empty.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe("O component EmptyComponent", () => {

    let fixture: ComponentFixture<EmptyComponent>;
    let component: EmptyComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[EmptyComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EmptyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

    it("deve ser instânciado", () => {
        expect(component).toBeTruthy();
     })  ; 
});