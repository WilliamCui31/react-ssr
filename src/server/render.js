import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import routes from '../routes';
import { getStore } from '../store';

const store = getStore();

async function loadData(store, path) {
  const promises = [];
  const matchedRoutes = matchRoutes(routes, path);
  matchedRoutes.forEach(({ route }) => {
    const { loadData } = route;
    if (loadData) {
      promises.push(loadData(store));
    }
  });

  await Promise.all(promises);
}

export default async ctx => {
  // 根据路由的路径，来往store里面加数据
  await loadData(store, ctx.path);

  let context = { css: [] };
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={ctx.path} context={context}>
        {renderRoutes(routes)}
      </StaticRouter>
    </Provider>
  );
  const cssStr = context.css.length ? context.css.join('\n') : '';
  const helmet = Helmet.renderStatic();
  ctx.body = `
  <html>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <style>${cssStr}</style>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.context = {
          state: ${JSON.stringify(store.getState())}
        }
      </script>
      <script src="/index.js"></script>
    </body>
  </html>
 `;
};
