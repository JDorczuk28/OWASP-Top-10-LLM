## Docker
Docker will allow me to package each "lab" into a self-contained box with its code, versions, and dependencies so it runs the same every time and everywhere. To be specific, it will do 4 things for this project:
1. Run the Labs - Each labs app will run in its own container.
2. Contain damage - These are intentionally vulnerable labs; by using containers, nothing important gets attacked, and they can be deleted and restarted quickly.
3. Run supporting services - Some of these will need additional services to work correctly; the services can be packaged easily with the lab
4. Make it easy to run - Anyone wanting to try these could ideally try them themselves.

# Install and settings

This is also a pretty easy step; I simply downloaded the Docker Desktop version for my computer, then I made sure to check/change a few settings.
First, we need to make sure WSL is checked for how to run Docker containers:

<img width="1562" height="562" alt="image" src="https://github.com/user-attachments/assets/db9d7e18-fc27-4d32-94aa-a2538e722e64" />

Then we need to go to Resources, WSL Integration, and make sure that Ubuntu is checked so we know Docker-related commands go to the right place:

<img width="1387" height="567" alt="image" src="https://github.com/user-attachments/assets/c8131745-c9af-4b77-9040-df677116d5d4" />


