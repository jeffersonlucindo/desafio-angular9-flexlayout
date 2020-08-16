import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Repository } from 'src/app/model/repository';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public repo: Repository) {}

  download() {
    window.open(this.repo.html_url, '_blank')
  }
}
