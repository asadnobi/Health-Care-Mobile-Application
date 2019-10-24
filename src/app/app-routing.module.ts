import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },

  { path: 'account', loadChildren: './pages/user/account/account.module#AccountPageModule' },
  { path: 'sing-in', loadChildren: './pages/user/sing-in/sing-in.module#SingInPageModule' },
  { path: 'sing-up', loadChildren: './pages/user/sing-up/sing-up.module#SingUpPageModule' },
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

  { path: 'service-list', loadChildren: './pages/service/list/list.module#ListPageModule' },
  { path: 'service-details', loadChildren: './pages/service/details/details.module#DetailsPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
