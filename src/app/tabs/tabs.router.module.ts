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
          {path: '', loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)}
        ]
      },
      {
        path: 'setting',
        children: [
          {path: '', loadChildren: () => import('../pages/setting/setting.module').then(m => m.SettingPageModule)}
        ]
      },
      {
        path: 'notification',
        children: [
          {path: '', loadChildren: () => import('../pages/notification/notification.module').then(m => m.NotificationPageModule)}
        ]
      },
      {
        path: 'account',
        children: [
          {path: '', loadChildren: () => import('../pages/user/account/account.module').then(m => m.AccountPageModule)}
        ]
      },
      {
        path: 'activity',
        children: [
          {path: '', loadChildren: () => import('../pages/user/activity/activity.module').then(m => m.ActivityPageModule)}
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
