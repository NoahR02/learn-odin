# [Odin Language Server](https://github.com/DanielGavin/ols) Installation

## Introduction

[Odin Language Server](https://github.com/DanielGavin/ols).

### Features
- Code Completion 
- Hover
- Go To Definition
- Syntax Highlighting

### IDE Support
Currently, [`ols`](https://github.com/DanielGavin/ols) supports:
 - [Visual Studio Code](https://code.visualstudio.com/)
 - [Sublime Text](https://www.sublimetext.com/)
 - [Vim](https://www.vim.org/)
 - [Emacs](https://www.gnu.org/software/emacs/)

## Installation
1. Download and extract the latest [release](https://github.com/DanielGavin/ols/releases) for *your* Operating System.
2. Rename the folder to ols and cd into it.
3. Rename the executable inside the ols folder to `ols`.

### (LINUX ONLY) Add it to your PATH
1. Add **ols** to your path, so you can use it anywhere. Make sure you are in the **ols** directory.

    ```sh
    echo "PATH=\"`pwd`:\$PATH\"" >> ~/.bashrc
    ```
2. (Optional) Refresh your terminal.

    ```sh
    source ~/.bashrc
    ```

### (WINDOWS ONLY) Add it to your PATH
1. Open up the Start Menu and search for "Edit the system environment variables".
2. Click on Environment Variables in the bottom right corner.
3. Double-click on "Path" in the User variables window.
4. Click "New" and paste in the location of the *directory* containing ols.exe.
5. Once done, click "OK".

## IDE Setup
#### [Visual Studio Code](https://code.visualstudio.com/)

1. Download the [VsCode ols](https://marketplace.visualstudio.com/items?itemName=DanielGavin.ols) extension.
2. Click the `settings icon`.
![](/images/installation/ols_settings.png)
3. Click `Extension Settings`.
4. Click `Edit in settings.json`.
5. Set `ols.server.path` equal to the path of the executable.

6. This is what my file looks like:
![](/images/installation/ols_config_file.png)
#### [Sublime Text](https://www.sublimetext.com/)
1. Open up the `command palette with (ctrl-shift-p)` and run `Package Control: Install Package`, next select ``LSP``.
2. Open up the `command palette with (ctrl-shift-p)` and run `Package Control: Install Package`, next select ``Odin``.
3. Next, open the LSP json file: `Preferences` -> `Package Settings` -> `LSP` -> `Settings`
4. Paste this inside the *LSP json file*:
   ```json
   {
      "clients":
      {
         "odin":
         {
            "command":
            [
               "path_to_ols/ols"
            ],
            "enabled": true,
            "languageId": "odin",
            "scopes":
            [
               "source.odin"
            ],
            "syntaxes":
            [
               "Packages/User/Odin/Odin.sublime-syntax"
            ],
         },
      },
      "only_show_lsp_completions": true,
      "show_diagnostics_panel_on_save": 0,
      "lsp_format_on_save": false,
   }
   
   ```
5. Replace "path_to_ols" inside the *LSP json file* with the path to your ols folder.
6. Inside the LSP json file, `right click` and select `Open Containing Folder`
7. Go back two directories. You should see a folder called `Installed Packages`.
8. Inside `Installed Packages`, extract `Odin`.
9. Move the `Odin` folder to where your LSP.sublime-settings folder is(where `Open Containing Folder` opened).

## Usage
> Note: ols.json must be at the root of every odin project for ols to work.
1. **Add ols.json to the root of your odin project.**
2. Paste this inside *ols.json*:
   ```json
   {
     "collections": [{ "name": "core",   "path": "path_to_odin/core" },
                     { "name": "shared", "path": "path_to_odin/shared" },
                     { "name": "vendor", "path": "path_to_odin/vendor" }],
     "thread_pool_count": 4,
     "enable_semantic_tokens": false,
     "enable_document_symbols": true,
     "enable_hover": true,
     "enable_format": true,
     "enable_snippets": true,
     "formatter": {
       "tabs": true,
       "characters": 90
     }
   }
   ```
3. Replace "path_to_odin" inside of *ols.json* with the path to your odin installtion.

#### [Vim](https://www.vim.org/)
*Coming soon.*
#### [Emacs](https://www.gnu.org/software/emacs/)
*Coming soon.*
