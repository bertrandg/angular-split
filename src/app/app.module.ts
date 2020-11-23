import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule, Routes } from '@angular/router'
import { AngularSplitModule } from 'angular-split'
import { ButtonsModule } from 'ngx-bootstrap/buttons'
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { SortableModule } from 'ngx-bootstrap/sortable'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { AppComponent } from './app.component'
import { ClassAccessComponent } from './component/examples/classAccess.route.component'
import { CollapseExpandComponent } from './component/examples/collapseExpandArea.route.component'
import { CustomGutterStyleComponent } from './component/examples/customGutterStyle.route.component'
import { DirRtlComponent } from './component/examples/dirRtl.route.component'
import { GeekDemoComponent } from './component/examples/geekDemo.route.component'
import { GutterClickComponent } from './component/examples/gutterClick.route.component'
import { IframeComponent } from './component/examples/iframe.route.component'
import { MinMaxComponent } from './component/examples/minMax.route.component'
import { NestedComponent } from './component/examples/nested.route.component'
import { SimpleComponent } from './component/examples/simple.route.component'
import { SyncComponent } from './component/examples/sync.route.component'
import { TogglingDomAndVisibleComponent } from './component/examples/togglingDomAndVisible.route.component'
import { TransitionsComponent } from './component/examples/transitions.route.component'
import { WorkspaceLocalstorageComponent } from './component/examples/workspaceLocalstorage.route.component'
import { ExampleTitleComponent } from './component/exampleTitle.component'
import { TopbarComponent } from './component/topbar.component'
import { examples } from './data/listExamples'

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  { path: 'changelog', loadChildren: () => import('./changelog/changelog.module').then((m) => m.ChangelogModule) },
  {
    path: 'documentation',
    loadChildren: () => import('./documentation/documentation.module').then((m) => m.DocumentationModule),
  },
  ...examples,
]

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ExampleTitleComponent,
    SimpleComponent,
    MinMaxComponent,
    NestedComponent,
    IframeComponent,
    TransitionsComponent,
    SyncComponent,
    CustomGutterStyleComponent,
    TogglingDomAndVisibleComponent,
    GutterClickComponent,
    ClassAccessComponent,
    GeekDemoComponent,
    DirRtlComponent,
    WorkspaceLocalstorageComponent,
    CollapseExpandComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    SortableModule.forRoot(),
    TooltipModule.forRoot(),
    AngularSplitModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
