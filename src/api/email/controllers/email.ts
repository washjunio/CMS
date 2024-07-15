import { Context } from 'koa';

import services from '../services/email';

interface Ctx extends Context {
  request: Context['request'] & {
    body: Context['body'] & {
      data: any
    }
  }
}

export default {
  async send (ctx: Ctx) {
    const {
      data,
    } = ctx.request.body;

    await services().send(data)

    ctx.status = 200;

    ctx.body = {
      message: 'E-mail enviado com sucesso.'
    }
  }
};
