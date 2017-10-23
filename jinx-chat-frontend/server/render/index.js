const fs = require('fs');
const path = require('path');
const render = require('./render').default;

const template = fs.readFileSync(path.join(__dirname, '../../build/index.html'), { encoding: 'utf8'});

module.exports = (ctx) => {
  const location = ctx.path;
  return render(location).then(
    ({html, state}) => {
      const page = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
      ctx.body = page;
    }
  );
} 