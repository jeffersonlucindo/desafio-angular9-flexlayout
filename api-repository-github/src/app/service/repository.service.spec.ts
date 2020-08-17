import { RepositoryService } from "./repository.service";
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { Repository } from "../model/repository";

describe("O serviço RepositoruService", () => {
    let service: RepositoryService;
    let httpMock: HttpTestingController;
    let repository: Repository[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers:[RepositoryService]
        });
        service = TestBed.get(RepositoryService);
        httpMock = TestBed.get(HttpTestingController);
    });
    
    it("deve ser instânciado", () => {
       expect(service).toBeTruthy();
    });

    it("deve recuparar os repositórios públicos", () => {
        const fakebody = repository;
        service.getRepositories("jeffersonlucindo")
        .subscribe((response) => {
            expect(response).toEqual(fakebody);
        })
    });

});