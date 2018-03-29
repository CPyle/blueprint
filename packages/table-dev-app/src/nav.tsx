/*
 * Copyright 2016 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

import * as React from "react";

import { Alignment, AnchorButton, Classes, Navbar, Switch } from "@blueprintjs/core";
import classNames from "classnames";

export interface INavProps {
    selected?: string;
}

export class Nav extends React.Component<INavProps, {}> {
    public render() {
        const darkThemeToggleStyles = {
            marginBottom: 0,
            marginTop: "3px",
        };

        return (
            <Navbar className={Classes.DARK} fixedToTop={true}>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>Blueprint Table</Navbar.Heading>
                </Navbar.Group>
                <Navbar.Group align={Alignment.RIGHT}>
                    <AnchorButton href="index.html" minimal={true} text="Home" />
                    <AnchorButton href="features.html" minimal={true} text="Features (Legacy)" />
                    <Navbar.Divider />
                    <Switch style={darkThemeToggleStyles} label="Dark theme" onChange={this.handleToggleDarkTheme} />
                </Navbar.Group>
            </Navbar>
        );
    }

    private handleToggleDarkTheme() {
        document.body.classList.toggle("pt-dark");
    }
}
