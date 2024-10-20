const devModeOn = true;
const config = {
    socket: {
        // hostUrl:'https://nomoonsol.com/',
        hostUrl: devModeOn ? 'http://localhost:5010' : "https://nomoonsol.com/",
    },
    devModeOn
}
export default config;
