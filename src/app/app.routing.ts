/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { FilterComponent } from './filter/filter.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'filter', pathMatch: 'full'},
    {path: 'filter', component: FilterComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
