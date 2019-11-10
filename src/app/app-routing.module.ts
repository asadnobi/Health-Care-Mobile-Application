import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'setting', loadChildren: './pages/setting/setting.module#SettingPageModule' },
  { path: 'notification', loadChildren: './pages/notification/notification.module#NotificationPageModule' },

  { path: 'account', loadChildren: './pages/user/account/account.module#AccountPageModule' },
  { path: 'sign-up', loadChildren: './pages/user/sign-up/sign-up.module#SignUpPageModule' },
  { path: 'sign-in', loadChildren: './pages/user/sign-in/sign-in.module#SignInPageModule' },
  { path: 'change-pass', loadChildren: './pages/user/change-pass/change-pass.module#ChangePassPageModule' },
  { path: 'forget-pass', loadChildren: './pages/user/forget-pass/forget-pass.module#ForgetPassPageModule' },
  { path: 'activity', loadChildren: './pages/user/activity/activity.module#ActivityPageModule' },
  { path: 'message', loadChildren: './pages/user/message/message.module#MessagePageModule' },
  { path: 'review', loadChildren: './pages/user/review/review.module#ReviewPageModule' },
  { path: 'favourite', loadChildren: './pages/user/favourite/favourite.module#FavouritePageModule' },

  { path: 'hospital-list', loadChildren: './pages/hospital/list/list.module#ListPageModule' },
  { path: 'hospital-details', loadChildren: './pages/hospital/details/details.module#DetailsPageModule' },
  { path: 'hospital-filter-list', loadChildren: './pages/hospital/filter-list/filter-list.module#FilterListPageModule' },

  { path: 'doctor-list', loadChildren: './pages/doctor/list/list.module#ListPageModule' },
  { path: 'doctor-details', loadChildren: './pages/doctor/details/details.module#DetailsPageModule' },
  { path: 'doctor-filter-list', loadChildren: './pages/doctor/filter-list/filter-list.module#FilterListPageModule' },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
