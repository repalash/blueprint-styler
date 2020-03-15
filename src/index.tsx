/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// tslint:disable-next-line:no-submodule-imports
import "@blueprintjs/test-commons/polyfill";
import "dom4";

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App';


// import { docsData } from "@blueprintjs/docs-data";
import { createDefaultRenderers, ReactDocsTagRenderer, ReactExampleTagRenderer } from "@blueprintjs/docs-theme";

// import { BlueprintDocs } from "./components/blueprintDocs";
import * as ReactDocs from "./tags/reactDocs";
import { reactExamples } from "./tags/reactExamples";


// const reactDocs = new ReactDocsTagRenderer(ReactDocs as any);
// const reactExample = new ReactExampleTagRenderer(reactExamples);

// const tagRenderers = {
//     ...createDefaultRenderers(),
//     reactDocs: reactDocs.render,
//     reactExample: reactExample.render,
// };


ReactDOM.render(
    <>
        <App/>
        {/* Working down from here
        <AlertExample id="AlertExample" data={data}/>
        <BreadcrumbsExample id="BreadcrumbsExample"/>
        <ButtonsExample id="ButtonsExample"/>
        <ButtonsIconsExample id="ButtonsIconsExample"/>
        <ButtonGroupExample id="ButtonGroupExample"/>
        <ButtonGroupPopoverExample id="ButtonGroupPopoverExample"/>
        <CalloutExample id="CalloutExample" options=""/>
        <CheckboxExample id="CheckboxExample"/>
        <CollapseExample id="CollapseExample"/>
        <CardExample id="CardExample"/>
        <CollapsibleListExample id="CollapsibleListExample"/>
        <ContextMenuExample id="ContextMenuExample"/>
        <ControlGroupExample id="ControlGroupExample"/>
        <DialogExample id="DialogExample" data={data}/>
        <DividerExample id="DividerExample"/>
        <DrawerExample id="DrawerExample" data={data}/>
        <DropdownMenuExample id="DropdownMenuExample"/>
        <EditableTextExample id="EditableTextExample"/>
        <FileInputExample id="FileInputExample"/>
        <FocusExample id="FocusExample"/>
        <FormGroupExample id="FormGroupExample"/>
        <HotkeyPiano id="HotkeyPiano"/>
        <HotkeyTester id="HotkeyTester"/>
        <IconExample id="IconExample"/>
        <MenuExample id="MenuExample"/>
        <MultiSliderExample id="MultiSliderExample"/>
        <NavbarExample id="NavbarExample"/>
        <NumericInputBasicExample id="NumericInputBasicExample"/>
        <NumericInputExtendedExample id="NumericInputExtendedExample"/>
        <NonIdealStateExample id="NonIdealStateExample"/>
        <OverflowListExample id="OverflowListExample"/>
        <OverlayExample id="OverlayExample"/>
        <PanelStackExample id="PanelStackExample"/>
        <PopoverDismissExample id="PopoverDismissExample"/>
        <PopoverExample id="PopoverExample"/>
        <PopoverInteractionKindExample id="PopoverInteractionKindExample"/>
        <PopoverMinimalExample id="PopoverMinimalExample"/>
        <PopoverPortalExample id="PopoverPortalExample"/>
        <PopoverPositionExample id="PopoverPositionExample"/>
        <PopoverSizingExample id="PopoverSizingExample"/>
        <ProgressExample id="ProgressExample"/>
        <RangeSliderExample id="RangeSliderExample"/>
        <RadioExample id="RadioExample"/>
        <SliderExample id="SliderExample"/>
        <SpinnerExample id="SpinnerExample"/>
        <SwitchExample id="SwitchExample"/>
        <TagInputExample id="TagInputExample"/>
        <TextExample id="TextExample"/>
        <TabsExample id="TabsExample"/>
        <InputGroupExample id="InputGroupExample"/>
        <TagExample id="TagExample"/>
        <ToastExample id="ToastExample"/>
        <TooltipExample id="TooltipExample"/>
        <TreeExample id="TreeExample"/>
        */}
    </>,
    // <BlueprintDocs defaultPageId="blueprint" docs={docsData} tagRenderers={tagRenderers} useNextVersion={false} />,
    document.querySelector("#blueprint-documentation"),
);

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
