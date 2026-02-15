import { Component } from '@angular/core';
import {Child} from './child';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-user',
  template: ` Username: {{ username }} `,
  standalone: true,
})

export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [User, Child, NgOptimizedImage],
    template: `
    Hello Universe
    <br>
    Hello {{ city }}, {{ 1 + 1 }} 
    <br>
    <section>
      <app-user />
    </section>
    <br>
    @if (isServerRunning) {
  <span>Yes, the server is running</span> 
  }
  @else {
  <p> No, the server is not running</p>
  }
  <br>
      @for (user of users; track user.id) {
      <p>{{ user.name }}</p>
    }

  <br>

  <div [contentEditable]="isEditable"> heyy</div> 

  <br>

  <section (mouseover)="showSecretMessage()">
  There's a secret message for you, hover to reveal:
  {{ message }}
  </section>

  <br>

  <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>

  <br>

  <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted.
        </p>
      </article>
    </div>
    
    <br>

    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>
  `,
  styles: [`
    :host {
      color: #a144eb;
    }
  `],
})
export class App {
  city = 'San Francisco';

  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';

  isServerRunning = true;

  users = [
  {id: 0, name: 'Sarah'},
  {id: 1, name: 'Amy'},
  {id: 2, name: 'Rachel'},
  {id: 3, name: 'Jessica'},
  {id: 4, name: 'Poornima'},
  ];

  isEditable = true;

  message = '';
  showSecretMessage()
  {
    this.message = 'Way to go 🚀';
  }

    items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}

