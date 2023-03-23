import { Component, OnInit } from '@angular/core';
import { Fox } from 'src/app/models/fox';
import { FoxService } from 'src/app/services/fox.service';

@Component({
  selector: 'app-fox-result',
  templateUrl: './fox-result.component.html',
  styleUrls: ['./fox-result.component.scss'],
})
export class FoxResultComponent implements OnInit {
  fox?: Fox;
  constructor(private foxService: FoxService) {}

  ngOnInit(): void {
    this.getFox()
  }
  getFox() {
    this.foxService.getFox().subscribe((fox) => {
      this.fox = fox;
    });
  }
}
