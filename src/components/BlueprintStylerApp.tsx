import React, { useState } from 'react';
// import './themes/blueprint-custom-theme.css';
// import './components/components.css';
import { FocusStyleManager, Classes, Button, AnchorButton, Collapse, HTMLSelect, IOptionProps, Icon } from '@blueprintjs/core';
import { IBlueprintExampleData } from '../tags/reactExamples';
import { allExamples } from './allExamples';
import { IExampleProps } from '@blueprintjs/docs-theme';
import logo from '../assets/logo.svg';
import { styleSetConfig } from '../styles/style-set.config';

FocusStyleManager.onlyShowFocusOnTabs();

//#region Theme

const DARK_THEME = Classes.DARK;
const LIGHT_THEME = "";
const THEME_LOCAL_STORAGE_KEY = "blueprint-docs-theme";

/** Return the current theme className. */
export function getTheme(): string {
    return localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || LIGHT_THEME;
}

/** Persist the current theme className in local storage. */
export function setTheme(theme: string) {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
}

function handleThemeChange(themeState: string, setThemeState: React.Dispatch<React.SetStateAction<string>>) {
    const setToTheme = themeState === LIGHT_THEME ? DARK_THEME : LIGHT_THEME
    setThemeState(setToTheme)
    setTheme(setToTheme)
};

//#endregion

const styleList: IOptionProps[] = styleSetConfig.map(
    (style: { name: string, slug: string }) => ({
        value: `./${style.slug}.css`,
        label: style.name
    })
)
function addStylerStyleSheet(href: string): HTMLLinkElement {
    var styleSheet = document.getElementById('stylerStyleSheet') as HTMLLinkElement;
    if (href != null) styleSheet.href = href;
    return styleSheet;
}
const stylerStyleSheet = addStylerStyleSheet(styleList[0].value as string)
function switchCss(styleSheetHref: string) {
    stylerStyleSheet.href = styleSheetHref
}

function BlueprintStylerApp() {

    const [openIndex, setOpenIndex] = useState(-1)
    const [theme, setTheme] = useState(getTheme())
    const useDarkTheme = theme === DARK_THEME;
    const data: IBlueprintExampleData = { themeName: useDarkTheme ? DARK_THEME : LIGHT_THEME } // { themeName: getTheme() }

    return (
        <div className={["app-wrapper", data.themeName].join(' ')}>
            <div className="app">

                <section className="styler-menu">

                    <header className="styler-menu__header">

                        <h3
                            className={Classes.HEADING}
                            style={{ display: 'flex', alignItems: 'center', marginBottom: 32 }}>
                            <img src={logo} style={{ width: 80 }} />
                            <span style={{ marginLeft: 16 }}>
                                Blueprint<br />Styler
                            </span>
                        </h3>

                        <HTMLSelect
                            fill
                            options={styleList}
                            style={{ marginBottom: 8 }}
                            onChange={e => switchCss(e.target.value)}
                        />

                        <Button
                            rightIcon={useDarkTheme ? "flash" : "moon"}
                            text={useDarkTheme ? "Light theme" : "Dark theme"}
                            onClick={e => handleThemeChange(theme, setTheme)}
                            className="bp3-fill"
                            // minimal
                            outlined
                            style={{ justifyContent: 'space-between', marginBottom: 8 }}
                        />

                        {/* <div
                            className="bp3-input-group"
                            style={{ marginBottom: 16 }}
                        >
                            <Icon icon="search" />
                            <input type="text" className="bp3-input" placeholder="Search" />
                        </div> */}

                    </header>

                    <nav className="styler-menu__nav">
                        <ul className="bp3-list-unstyled">
                            {allExamples.map(([componentGroupTitle, componentGroup], j: number) => (
                                <li key={j}>
                                    <Button
                                        minimal
                                        fill
                                        icon={j === openIndex ? "caret-down" : "caret-right"}
                                        onClick={() => setOpenIndex((j === openIndex ? -1 : j))}
                                        style={{ justifyContent: 'flex-start', marginBottom: 2 }}
                                    >
                                        <b>{componentGroupTitle}</b>
                                    </Button>
                                    <Collapse isOpen={j === openIndex} >
                                        <ul className="bp3-list-unstyled" style={{ paddingLeft: 24 }}>
                                            {componentGroup.map(([componentName, componentExamples], i: number) => (
                                                <li key={i}>
                                                    <AnchorButton
                                                        minimal
                                                        fill
                                                        href={'#' + componentName}
                                                        text={componentName}
                                                        style={{ justifyContent: 'flex-start', marginBottom: 2 }}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </Collapse>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* <footer className="styler-menu__footer"></footer> */}

                </section>

                <main className="styler-examples">
                    {allExamples.map(([componentGroupTitle, componentGroup], k: number) => (
                        <section key={k}>
                            <h3 className={`styler-section-header ${Classes.HEADING}`}>
                                {componentGroupTitle}
                            </h3>
                            {componentGroup.map(([componentName, componentExamples], j: number) => (
                                <div key={j} className="styler-component">
                                    <h4 id={componentName} className={`styler-component-header ${Classes.HEADING}`} >
                                        {componentName}
                                    </h4>
                                    {componentExamples.map((
                                        ExampleComponent: React.ComponentClass<IExampleProps<IBlueprintExampleData>>,
                                        i: number
                                    ) => (
                                            <ExampleComponent
                                                key={i}
                                                id={componentName + '-' + i}
                                                data={data}
                                            />
                                        ))}
                                </div>
                            ))}
                        </section>
                    ))}
                </main>

            </div>
        </div>
    );
}

export default BlueprintStylerApp;
