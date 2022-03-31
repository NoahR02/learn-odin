# Installing Odin on Linux

### Steps
1. Download and extract the latest [release](https://github.com/odin-lang/Odin/releases/latest) for Linux.
2. Rename the folder to **odin** and cd into it.
3. Mark odin as an executable.

```sh
chmod +x odin
```
4. Next you need llvm-11 and clang.

```sh
sudo apt install llvm-11 clang
```
5. Run an example.

```sh
./odin run examples/demo
```

### Extra: Add it to your PATH
1. Add odin to your path, so you can use it anywhere. Make sure you are in the **odin** directory.

```sh
echo "PATH=\"`pwd`:\$PATH\"" >> ~/.bashrc
```
2. (Optional) Refresh your terminal.

```sh
source ~/.bashrc
```