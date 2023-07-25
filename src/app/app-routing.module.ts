import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { TaskComponent } from './components/task/task.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  {path: 'home', component: TaskComponent},
  {path: 'completed', component: CompletedTasksComponent},
  {path: 'settings', component: SettingsComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
