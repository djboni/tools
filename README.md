# VS Code Extensions

- Vim (vscodevim)
  - See "vim.handleKeys" and other settings below

# VS Code Settings

- Ctrl+P > settings.json (User)

```json
    // Quality of life
    "telemetry.telemetryLevel": "off",
    "extensions.ignoreRecommendations": true,
    "search.followSymlinks": false,
    "editor.rulers": [
        { "column": 72, "color": "#383838" },
        { "column": 80, "color": "#606060" },
        { "column": 88, "color": "#383838" }
    ],
    "editor.minimap.maxColumn": 80,
    "files.autoSave": "onFocusChange",
    "files.eol": "\n",
    "files.insertFinalNewline": true,
    "files.trimFinalNewlines": true,
    "files.trimTrailingWhitespace": true,
    "editor.detectIndentation": false,
    "editor.hover.delay": 1500,
    "editor.acceptSuggestionOnEnter": "off", // TAB to accepts suggestions
    "editor.find.addExtraSpaceOnTop": false,
    "workbench.editor.openPositioning": "last",

    // Formatter
    "editor.formatOnSave": true,
    "python.formatting.provider": "black",
    "python.formatting.blackArgs": ["--line-length=80"],

    // C/C++, CMake
    "C_Cpp.autoAddFileAssociations": false,
    "cmake.configureOnOpen": false,
    "cmake.configureOnEdit": false,
    "cmake.buildDirectory": "${workspaceFolder}/build_vs",

    // Font https://github.com/tonsky/FiraCode
    "editor.fontFamily": "Fira Code",
    "editor.fontLigatures": true,

    // Git, GitLens
    "diffEditor.wordWrap": "on",
    "git.confirmSync": false,
    "gitlens.hovers.currentLine.over": "line",
    "gitlens.currentLine.enabled": false,
    "gitlens.codeLens.enabled": false,
    "gitlens.statusBar.enabled": false,
    "gitlens.defaultDateFormat": null,

    // Coverage Gutters (extension)
    "coverage-gutters.showLineCoverage": false,
    "coverage-gutters.showGutterCoverage": true,

    // Vim (extension)
    "editor.lineNumbers": "relative",
    "vim.easymotion": true,
    "vim.incsearch": true,
    "vim.hlsearch": true,
    "vim.useCtrlKeys": true,
    "vim.insertModeKeyBindings": [
        {
            // Fast kj means ESC
            "before": ["k", "j"],
            "after": ["<Esc>"]
        },
        {
            // Fast KJ means ESC
            "before": ["K", "J"],
            "after": ["<Esc>"]
        },
        {
            // Ctrl-J converts word to uppercase
            // Type the word and Ctrl+J while in insert mode
            // Example: i#define very_long_macro_name<Ctrl+j> 1
            "before": ["<C-j>"],
            "after": ["<Esc>", "g", "U", "i", "w", "e", "a"]
        },
    ],
    "vim.handleKeys": {
        "<C-f>": false, // Find
        "<C-h>": false, // Replace
        "<C-c>": false, // Copy
        "<C-v>": false, // Paste
        "<C-x>": false, // Cut
        "<C-w>": false, // Close window
        "<C-b>": false, // Open/close side bar
    },

    // Other
    // ...
```
