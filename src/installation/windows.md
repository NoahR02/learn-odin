# Installing Odin on Windows

### Steps
1. Install [Visual Studio](https://visualstudio.microsoft.com/downloads/)
2. Download and extract the latest [release](https://github.com/odin-lang/Odin/releases/latest) of Odin for Windows.
3. Rename the folder to **odin** and cd into it.
4. Run an example.

    ```sh
    .\odin.exe run examples\demo
    ```

### Extra: Add it to your PATH
1. Open up the Start Menu and search for "Edit the system environment variables".
2. Click on Environment Variables in the bottom right corner.
3. Double-click on "Path" in the User variables window.
4. Click "New" and paste in the location of the *directory* containing odin.exe.
5. Once done, click "OK".
6. Close your terminal and open a new one.

You should now be able to access odin.exe anywhere.