## WSL2
WSL2 is a Windows subsystem for Linux that lets me run a full Linux kernel distro on my Windows 11 machine.

# Why WSL2?
I plan to use Docker to create containers for these labs. By using WSL2, they act as if they were on a Linux server, which is where most of my experience with Docker lies. In addition to this, on native Windows, I expect I would run into many issues, as a lot of the tools I plan on using assume Linux; by using WSL2, I can avoid issues surrounding dependencies. Another big factor I chose WSL2 over something like a Virtual machine is that WSL2 lets me keep my GPU, whereas a VM won't let me use my GPU so easily; this will be essential for the Ollama models I use, as they need my full GPU. It's also much lighter than a VM, which means it boots faster and there's no separate desktop I need to manage.

# WSL2 Install
WSL2 is straightforward to install; run PowerShell as an admin and run
```bash
wsl --install
```

This will start the install process; then it will ask if you'd like to share data, make your selection, and continue. From here, restart your device, and you should be able to find Ubuntu, the default distro that is installed, on your device.

# Config File

In your Windows user folder, you need to create a .wslconfig file. This file will make sure localhost works between WSL and Windows, which will be needed to reach Ollama, the contents of the file should be as follows:
```bash
[wsl2]
networkingMode=mirrored
memory=8GB
```

That's all that's needed for the WSL2 setup of this process. You should be able to use Ubuntu as if you're using a Linux distro directly now!
