import asyncio
import websockets
import downloader
import config

async def echo(websocket):
    async for message in websocket:
        print(message)
        downloader.send_fic(message, config.email_address, config.password, config.kindle_email)

async def main():
    print('worker online')
    async with websockets.serve(echo, "127.0.0.1", 8765):
        await asyncio.Future()  # run forever

asyncio.run(main())