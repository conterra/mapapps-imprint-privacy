/*
 * Copyright (C) 2018 con terra GmbH (info@conterra.de)
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
        let toolsetManager = this._toolsetManager;
        let toolset = this._properties.toolsetDefinition;
        toolsetManager.addToolsetDefinition(toolset);
    }

    openImprint() {
        let locale = dojo.locale;
        let imprintUrls = this._properties.imprintUrls;
        let imprintUrl = imprintUrls.find((url) => {
            return url.locale === locale;
        }).url;
        window.open(imprintUrl, '_blank');
    }

    openPrivacyStatements() {
        let locale = dojo.locale;
        let privacyUrls = this._properties.privacyUrls;
        let privacyUrl = privacyUrls.find((url) => {
            return url.locale === locale;
        }).url;
        window.open(privacyUrl, '_blank');
    }

}

module.exports = ToolHandler;
