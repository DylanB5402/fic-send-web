Web App for downloading web fiction and sending it to my Kindle

- Frontend and backend use Next.js 
- Worker process uses the same backend as [fic-send-cli](https://github.com/DylanB5402/fic-send-cli) to download web fiction and send it to my kindle
- Communication between backend and worker process is done using websockets

## Architecture

- Frontend (next.js)
- Backend (next.js)
- Downloader worker process (Python)

## Download flow
- User inputs fic url and hits submit 
    - Sends HTTP request to backend
- Backend receives HTTP request.
    - Backend sends url to worker via websockets
    - Backend stores url in database
        - Marked as download in progress
- Worker process receives url via websockets
    - Url starts downloading
    - Worker informs client that downloading has started via pusher
        - Client renders this info
    - Url finishes downloading
    - Worker informs client that the fic has been emailed via pusher
        - Client renders info
        - Marked as downloaded in database