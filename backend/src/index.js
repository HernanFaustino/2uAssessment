import app from './app';

async function main() {
    await app.listen(8000)
    console.log("server on port 8000")
}

main();