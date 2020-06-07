import React from 'react';

import ModuleTabs from '../components/ModuleTabs/ModuleTabs';

const ModuleTabsPage = () => (
    <div className="main-section__content">
        <h1>
            Module Tabs
        </h1>

        <ModuleTabs>
            <div>First tab content</div>
            <div>Second tab content</div>
            <div>Third tab content</div>
        </ModuleTabs>

        <ModuleTabs tabs={[ "First tab", "Second tab", "Third tab" ]}>
            <div>First tab content</div>
            <div>Second tab content</div>
            <div>Third tab content</div>
        </ModuleTabs>
    </div>
);

export default ModuleTabsPage;