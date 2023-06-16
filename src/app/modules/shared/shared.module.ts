import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';

const NG_ZORRO_MODULES =[
  NzLayoutModule,
  NzMenuModule,
  NzBreadCrumbModule,
  NzSpaceModule,
  NzFormModule,
  NzButtonModule,
  NzTableModule,
  NzMessageModule,
  NzModalModule,
  NzNotificationModule,
  NzPopconfirmModule,
  NzSpinModule,
  NzAlertModule,
  NzDividerModule,
  NzSegmentedModule,
  NzCardModule,
  NzInputModule,
];
const NG_MODULES = [
  RouterModule
]



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ...NG_MODULES,
    ...NG_ZORRO_MODULES,
  ],
  exports:[
    CommonModule,
    FormsModule,
    ...NG_MODULES,
    ...NG_ZORRO_MODULES,
  ]
})
export class SharedModule { }
