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

}
