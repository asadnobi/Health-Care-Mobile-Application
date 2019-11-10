import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {path: '', loadChildren: '../pages/home/home.module#HomePageModule'}
        ]
      },
      {
        path: 'setting',
        children: [
          {path: '', loadChildren: '../pages/setting/setting.module#SettingPageModule'}
        ]
      },
      {
        path: 'notification',
        children: [
          {path: '', loadChildren: '../pages/notification/notification.module#NotificationPageModule'}
        ]
      },
      {
        path: 'account',
        children: [
          {path: '', loadChildren: '../pages/user/account/account.module#AccountPageModule'}
        ]
      },
      {
        path: 'activity',
        children: [
          {path: '', loadChildren: '../pages/user/activity/activity.module#ActivityPageModule'}
        ]
      },
      {
        path: '', redirectTo: '/tabs/home', pathMatch: 'full'
      }
    ]
  },
  {path: '', redirectTo: '/tabs/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
