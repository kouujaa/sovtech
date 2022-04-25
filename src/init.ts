import httpServer from "./app";

const port = 5000;

/*********************
 * LET'S GO!
 * *******************/
httpServer.listen(port, () => {
  console.log("", "log", {
    message: `🚀 Server running on port ${port}. The time is: ${new Date().toTimeString()}.`,
  });
});
