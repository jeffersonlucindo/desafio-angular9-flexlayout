import { HomeComponent } from "../home.component";
import { of } from 'rxjs';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { TestBed } from '@angular/core/testing';
import { repositoryFake } from 'src/app/model/repositor-fake';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('O componente DetailComponet', () => {
    let component: HomeComponent;
    let dialogSpy: jasmine.Spy;
    let dialogRefSpyObj = jasmine.createSpyObj({ afterClosed : of({}), close: null });
    let repository: repositoryFake;

    dialogRefSpyObj.componentInstance = { body: '' }; // attach componentInstance to the spy object...
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MatDialogModule,HttpClientTestingModule],
            providers: [HomeComponent]
        });
        component = TestBed.get(HomeComponent);
    });

    beforeEach(() => {
        dialogSpy = spyOn(TestBed.get(MatDialog), 'open').and.returnValue(dialogRefSpyObj);
    });

    it('deve abrir o modal ', () => {
        component.viewDetails(repository);
        expect(dialogSpy).toHaveBeenCalled();
    });
});