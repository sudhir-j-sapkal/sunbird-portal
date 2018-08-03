import { Component, OnInit, Input } from '@angular/core';
import { ResourceService } from '@sunbird/shared';
import {TenantService } from './../../services/index';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-public-footer',
  templateUrl: './public-footer.component.html',
  styleUrls: ['./public-footer.component.css']
})
export class PublicFooterComponent implements OnInit {

/**
* content is used to render IContents value on the view
*/
@Input() instanceName: string;
logo: string;
/* cookieValue = 'UNKNOWN'; */
tenantDataSubscription: Subscription;
/**
* to show the footer bar
*/
appFooter = true;
 /**
  * reference of tenant service.
  */
  public tenantService: TenantService;

  constructor(public resourceService: ResourceService,  tenantService: TenantService) {
    this.tenantService = tenantService;
  }

  ngOnInit() {
    this.tenantDataSubscription = this.tenantService.tenantData$.subscribe(
      data => {
        if (data && !data.err) {
          this.logo = data.tenantData.logo;
        }
      }
    );
  }

  setPOPStorage() {
    const cookieValue = this.getCookie('showpopup');
    if (!cookieValue) {
      this.setCookie('showpopup', 'false', 30);
    }
  }

  setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }

  getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
  }
}
