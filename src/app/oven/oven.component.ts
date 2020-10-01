import { ElementRef } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[oven]',
  templateUrl: './oven.component.html',
  styleUrls: ['./oven.component.scss']
})
export class OvenComponent implements OnInit {

  @Input() x = 0;

  elRef: ElementRef;
  xyz = '0 0 0';

  constructor(elRef: ElementRef) {
    this.elRef = elRef;
  }

  ngOnInit(): void {
    this.xyz = `${this.x} 0 -4`;

    this.elRef.nativeElement.setAttribute('position', this.xyz);
  }

}
