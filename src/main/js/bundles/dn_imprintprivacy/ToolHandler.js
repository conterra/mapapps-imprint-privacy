/*
 * Copyright (C) 2023 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import dojo from "dojo/_base/kernel";

class ToolHandler {

    activate() {
        const toolsetManager = this._toolsetManager;
        const toolset = this._properties.toolsetDefinition;
        toolsetManager.addToolsetDefinition(toolset);
    }

    openImprint() {
        const locale = dojo.locale;
        const imprintUrls = this._properties.imprintUrls;
        const imprintUrl = imprintUrls.find((url) => url.locale === locale).url;
        window.open(imprintUrl, '_blank');
    }

    openPrivacyStatements() {
        const locale = dojo.locale;
        const privacyUrls = this._properties.privacyUrls;
        const privacyUrl = privacyUrls.find((url) => url.locale === locale).url;
        window.open(privacyUrl, '_blank');
    }

}

module.exports = ToolHandler;

