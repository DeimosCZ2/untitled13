import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled13';
  grid: boolean[][] = [
    [false, false, true, false],
    [false, false, true, false],
    [true, false, true, true],
    [false, true, true, false],
  ];

  toggle(x: number, y: number): void {
    this.grid[y][x] = !this.grid[y][x];

    if (x - 1 >= 0) {
      this.grid[y][x - 1] = !this.grid[y][x - 1];
    }
    if (x + 1 < 4) {
      this.grid[y][x + 1] = !this.grid[y][x + 1];
    }
    if (y - 1 >= 0) {
      this.grid[y - 1][x] = !this.grid[y - 1][x];
    }
    if (y + 1 < 4) {
      this.grid[y + 1][x] = !this.grid[y + 1][x];
    }

  }

}
