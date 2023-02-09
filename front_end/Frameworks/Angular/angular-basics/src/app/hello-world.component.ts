import { Component } from '@angular/core';

@Component({
    selector: 'app-hello-world',
    template: '<h1>{{title}}</h1>',
    styles: [`
    h1 {
        color: blue;
    }`]
})

//All the public properties here are accessible on the template
export class HelloWorldComponent {
    title = 'Hello';
}