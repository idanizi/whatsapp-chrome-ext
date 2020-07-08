const {
  npm_package_version,
  npm_package_name,
  npm_package_description
} = process.env;

module.exports = {
  // Required
  "manifest_version": 2,
  "name": npm_package_name,
  "version": npm_package_version,

  // Recommended
  // "default_locale": "en",
  "description": npm_package_description,
  "icons": {
    16: './icons/icon16.png',
    48: "./icons/icon48.png",
    128: "./icons/icon128.png",
  },

  // Pick one (or none)
  "browser_action": {
    'default_icon': './icons/icon.png',
    "default_popup": "./src/popup/popup.html",
  },
  // "page_action": {'eg' : '...'},

  // Optional
  // "action": "...",
  "author": "Idan Izicovich",
  // "automation": "...",
  "background": {
    // Recommended
    scripts: ["./src/events.js"],
    "persistent": false,
    //  Optional
    //  "service_worker": false,
  },
  // "chrome_settings_overrides": {'eg' : '...'},
  // "chrome_ui_overrides": {
  //   "bookmarks_ui": {
  //     "remove_bookmark_shortcut": true,
  //     "remove_button": true
  //   }
  // },
  // "chrome_url_overrides": {'eg' : '...'},
  // "commands": {'eg' : '...'},
  // "content_capabilities": "...",
  // "content_scripts": [{'eg' : '...'}],
  // "content_security_policy": "policyString",
  // "converted_from_user_script": "...",
  // "current_locale": "...",
  // "declarative_net_request": "...",
  // "devtools_page": "devtools.html",
  // "event_rules": [{'eg' : '...'}],
  // "externally_connectable": {
  //   "matches": ["*://*.example.com/*"]
  // },
  // "file_browser_handlers": ["..."],
  // "file_system_provider_capabilities": {
  //   "configurable": true,
  //   "multiple_mounts": true,
  //   "source": "network"
  // },
  // "homepage_url": "http://path/to/homepage",
  // "import": [{"id": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}],
  // "incognito": "spanning, split, or not_allowed",
  // "input_components": "...",
  // "key": "publicKey",
  // "minimum_chrome_version": "versionString",
  // "nacl_modules": ["..."],
  // "oauth2": "...",
  // "offline_enabled": true,
  // "omnibox": {
  //   "keyword": "aString"
  // },
  // "optional_permissions": ["tabs"],
  // "options_page": "options.html",
  // "options_ui": {
  //   "chrome_style": true,
  //   "page": "options.html"
  // },
  "permissions": [
    "contextMenus",
    "storage",
  ],
  // "platforms": "...",
  // "replacement_web_app": "...",
  // "requirements": {'eg' : '...'},
  // "sandbox": ["..."],
  // "short_name": "Short Name",
  // "signature": "...",
  // "spellcheck": "...",
  // "storage": {
  //   "managed_schema": "schema.json"ß
  // },
  // "system_indicator": "...",
  // "tts_engine": {'eg' : '...'},
  // "update_url": "http://path/to/updateInfo.xml",
  // "version_name": "aString",
  // "web_accessible_resources": ["..."]
}