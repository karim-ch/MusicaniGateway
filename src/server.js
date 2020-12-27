import { ApolloServer } from 'apollo-server-express';
import socketIO from 'socket.io';
import { isEmpty, includes } from 'lodash';
import * as http from 'http';
import Express from 'express';
import cookieParser from 'cookie-parser';
import { getEnv, getWhiteList } from 'utils';
import schema from 'domains';

const port = getEnv('PORT', 5000);

const app = Express();
app.use(cookieParser());

const apolloServer = new ApolloServer(schema);
const whitelist = getWhiteList();
const corsOptions = {
  origin(origin, callback) {
    const originIsWhitelisted = !isEmpty(whitelist.filter(white => includes(origin, white)));
    callback(null, originIsWhitelisted);
  },
  credentials: true,
};

apolloServer.applyMiddleware({ cors: corsOptions, app });
const httpServer = http.createServer(app);
const io = socketIO(httpServer);
apolloServer.installSubscriptionHandlers(httpServer);

// middleware to pass socket to each request object
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Set socket.io listeners.
io.on('connection', socket => {
  // eslint-disable-next-line no-console
  console.log('SOCKET CONNECTED');

  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log('SOCKET DISCONNECTED');
  });
});

httpServer.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server ready at ${port}`);
  // eslint-disable-next-line no-console
  console.log(`🚀Subscriptions ready at ${port}${apolloServer.subscriptionsPath}`);
});
