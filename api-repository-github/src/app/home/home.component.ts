import { Component, OnInit } from '@angular/core';
import { RepositoryService } from "../service/repository.service";
import { Repository } from '../model/repository';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from './detail/detail.component';
import { debounceTime, map, distinctUntilChanged, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  repositories: Repository[] = [];
  term: string
  private term$ = new Subject<string>();
  
  constructor( 
    private service: RepositoryService,
    private dialog: MatDialog) 
    { }

  ngOnInit(): void {
    this.prepareSearchByTerm();
  }

  search(){
    this.term$.next(this.term);
  }

  clear(){
    this.term = '';
    this.repositories = [];
  }

  private prepareSearchByTerm(){
    this.term$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map(e => e.trim()),
      tap(e => !e && this.clear)
    ).subscribe(this.complete);
  }

  private complete = (term: string) => {
    this.service.getRepositories(term).subscribe(
      result => this.repositories = result,
      error => {
        console.warn(error)
      }
    )
  }

  viewDetails(repo: Repository) {
    this.dialog.open(DetailComponent, { data: repo })
  }
}
