import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-hello-world-lib',
  template: `
    <p>
      my-hello-world-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MyHelloWorldLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
