import { serverPort } from './config/config.json'
import App from './app'

App.listen(serverPort, () => {
    console.log(`Listening at http://localhost:${serverPort}/`)
});