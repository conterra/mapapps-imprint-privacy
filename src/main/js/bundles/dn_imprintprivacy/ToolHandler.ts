///
/// Copyright (C) 2024 con terra GmbH (info@conterra.de)
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///         http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import type { InjectedReference } from "apprt-core/InjectedReference";
import type { UrlConfigObject } from "./api";

import Locale from "ct/Locale";

export class ToolHandler {
    private _toolsetManager: InjectedReference<any>;
    private _properties: InjectedReference<Record<string, any>>;

    public activate(): void {
        const toolsetManager = this._toolsetManager;
        const toolset = this._properties!.toolsetDefinition;
        toolsetManager.addToolsetDefinition(toolset);
    }

    public openImprint(): void {
        const locale = Locale.getCurrent().getLanguage();
        const imprintUrls = this._properties!.imprintUrls;
        const imprintUrl = imprintUrls.find((url: UrlConfigObject) => url.locale === locale).url;
        if (!imprintUrl) { return; }

        window.open(imprintUrl, '_blank');
    }

    public openPrivacyStatements(): void {
        const locale = Locale.getCurrent().getLanguage();
        const privacyUrls = this._properties!.privacyUrls;
        const privacyUrl = privacyUrls.find((url: UrlConfigObject) => url.locale === locale).url;
        if (!privacyUrl) { return; }

        window.open(privacyUrl, '_blank');
    }

}
