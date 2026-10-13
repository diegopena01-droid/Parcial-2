import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  menuAbierto = signal(false);

  alternarMenu() {
    this.menuAbierto.update((valor) => !valor);
  }

  cerrarMenu() {
    this.menuAbierto.set(false);
  }
}
