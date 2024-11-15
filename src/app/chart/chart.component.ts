import { Component, AfterViewInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('canvas', { static: false }) canvasRef!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    // Only run on the browser (not during SSR)
    if (isPlatformBrowser(this.platformId)) {
      const canvas = this.canvasRef.nativeElement;
      const ctx = canvas.getContext('2d');

      // Clear canvas before drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Set fill color and draw a rectangle
      ctx.fillStyle = 'green';
      ctx.fillRect(10, 10, 200, 200); // Draw a 200x200 green square
    }
  }
}









