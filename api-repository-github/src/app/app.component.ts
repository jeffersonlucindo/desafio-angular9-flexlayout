import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <div class="d-flex flex-column min-vh-100">
      <div class="navbar-container">
          <mat-toolbar class="navbar">
             <img class="logo ml-3 mr-3" src="./assets/img/github.svg" alt="Repo Finder Logo"/>
              <h1>
                  Repo Finder
              </h1>
              <span class="navbar-spacer"></span>
          </mat-toolbar>
      </div>
      <div class="container-fluid">
        <app-loader></app-loader>

        <app-home></app-home>       
      </div>
      <footer class="mt-auto">
        <div class="row">
          <div class="col">Desenvolvido por Jefferson Lucindo</div>
          <div class="col text-right">&copy; {{ year | date: 'yyyy' }} Todos os direitos reservados</div>
        </div>
    </footer>
  </div>
`
})
export class AppComponent {
  year: Date = new Date();
}
