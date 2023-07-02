/*
 * Copyright 2021 Palantir Technologies, Inc. All rights reserved.
 *
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

import * as React from "react";

import { Button, Intent } from "@blueprintjs/core";
import { Example, ExampleProps } from "@blueprintjs/docs-theme";
import { Popover, PopoverProps } from "@blueprintjs/core";

import { FileMenu } from "../core-examples/common/fileMenu";

export class PopoverMinimalExample extends React.PureComponent<ExampleProps> {
    public static displayName = "PopoverMinimalExample";

    public render() {
        const baseProps: Partial<PopoverProps> = { content: <FileMenu />, placement: "bottom-end" };

        return (
            <Example options={false} {...this.props}>
                <Popover
                    {...baseProps}
                    minimal={true}
                    renderTarget={({ isOpen, ref, ...p }) => (
                        <Button {...p} active={isOpen} ref={ref} intent={Intent.PRIMARY} text="Minimal" />
                    )}
                />
                <Popover
                    {...baseProps}
                    renderTarget={({ isOpen, ref, ...p }) => (
                        <Button {...p} active={isOpen} ref={ref} text="Default" />
                    )}
                />
            </Example>
        );
    }
}
