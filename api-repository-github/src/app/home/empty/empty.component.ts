import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empty',
  template: `
  <div class="container">
    <div class="row mt-5">
        <div class="col text-center mt-5">
            <img src="assets/img/empty.svg" alt="Sem resultados" height="300px">
        </div>
    </div>
  </div>
  `
})
export class EmptyComponent {
}
