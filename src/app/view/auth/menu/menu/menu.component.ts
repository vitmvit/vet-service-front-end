import {Component, Input} from '@angular/core';
import {SessionService} from "../../../../service/session.service";
import {Router} from "@angular/router";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() itemName!: string;

  constructor(private sessionService: SessionService,
              private router: Router) {
    this.sessionService.checkCookies();
  }

  ngOnInit(): void {
  }

  // Метод для выхода из учетной записи
  logOff() {
    this.sessionService.clear();
    this.router.navigateByUrl('index');
  }
}
