// ~/.config/Code/User/settings.json
{
  // Debloat
  "telemetry.telemetryLevel": "off",
  "extensions.ignoreRecommendations": true,

  // Quality of life
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
  "editor.acceptSuggestionOnEnter": "off", // TAB accepts suggestion
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
  "diffEditor.maxComputationTime": 0,
  "git.enableSmartCommit": false,
  "git.confirmSync": false,
  "git.autoRepositoryDetection": "openEditors",
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
  "vim.insertModeKeyBindingsNonRecursive": [
    {
      // Fast kj means ESC
      // VIMRC: inoremap kj <esc>
      "before": ["k", "j"],
      "after": ["<esc>"]
    },
    {
      // Fast KJ means ESC
      // VIMRC: inoremap KJ <esc>
      "before": ["K", "J"],
      "after": ["<esc>"]
    },
    {
      // Ctrl-J converts word to uppercase
      // Type the word and Ctrl+J while in insert mode
      // Example: i#define very_long_macro_name<Ctrl+j> 1
      // VIMRC: inoremap <c-j> <esc>gUiwea
      "before": ["<c-j>"],
      "after": ["<esc>", "g", "U", "i", "w", "e", "a"]
    },
    {
      // Ctrl-K converts word to lowercase
      // Type the word and Ctrl+K while in insert mode
      // Example: i#define VERY_LONG_MACRO_NAME<Ctrl+k> 1
      // VIMRC: inoremap <c-k> <esc>guiwea
      "before": ["<c-k>"],
      "after": ["<esc>", "g", "u", "i", "w", "e", "a"]
    }
  ],
  "vim.visualModeKeyBindingsNonRecursive": [
    {
      // Add parenthesis around selected text
      // Example: vee(
      // VIMRC: vnoremap ( di()<esc>P
      "before": ["("],
      "after": ["d", "i", "(", ")", "<esc>", "P"]
    },
    {
      // Add brackets around selected text
      // Example: vee[
      // VIMRC: vnoremap [ di[]<esc>P
      "before": ["["],
      "after": ["d", "i", "[", "]", "<esc>", "P"]
    },
    {
      // Add braces around selected text
      // Example: vee{
      // VIMRC: vnoremap { di{}<esc>P
      "before": ["{"],
      "after": ["d", "i", "{", "}", "<esc>", "P"]
    },
    {
      // Add single quotes around selected text
      // Example: vee"
      // VIMRC: vnoremap ' di''<esc>P
      "before": ["'"],
      "after": ["d", "i", "'", "'", "<esc>", "P"]
    },
    {
      // Add double quotes around selected text
      // Example: vee"
      // VIMRC: vnoremap " di""<esc>P
      "before": ["\""],
      "after": ["d", "i", "\"", "\"", "<esc>", "P"]
    },
    {
      // Add back ticks around selected text
      // Example: vee`
      // VIMRC: vnoremap ` di``<esc>P
      "before": ["`"],
      "after": ["d", "i", "`", "`", "<esc>", "P"]
    }
  ],
  "vim.handleKeys": {
    "<C-f>": false, // Find
    "<C-h>": false, // Replace
    "<C-c>": false, // Copy
    "<C-v>": false, // Paste
    "<C-x>": false, // Cut
    "<C-w>": false, // Close window
    "<C-b>": false // Open/close side bar
  },

  // Remote SSH
  "remote.SSH.connectTimeout": 60,

    // Other
    // ...
}
