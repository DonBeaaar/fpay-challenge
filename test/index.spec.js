const server = require('../index');
const supertest = require('supertest');

const requestWithSupertest = supertest(server);

describe('index', () => {
  it('healtcheck', async () => {
    const res = await requestWithSupertest.get('/');
    expect(res.status).toBe(200);
  });

  it('check sequence - 3', async () => {
    const res = await requestWithSupertest.get('/check/3');
    expect(res.status).toBe(200);
    expect(res.body.sequence).toEqual([3, 2]);
  });

  it('check sequence - 7', async () => {
    const res = await requestWithSupertest.get('/check/7');
    expect(res.status).toBe(200);
    expect(res.body.sequence).toEqual([7, 5, 3, 2]);
  });

  it('check sequence - error', async () => {
    const res = await requestWithSupertest.get('/check/a');
    expect(res.status).toBe(400);
    expect(res.body.ok).toBe(false);
    expect(res.body.message).toBe('Verifica que el numero ingresado sea valido y mayor o igual a 1');
  });

  it('check sequence - error 0', async () => {
    const res = await requestWithSupertest.get('/check/0');
    expect(res.status).toBe(400);
    expect(res.body.ok).toBe(false);
    expect(res.body.message).toBe('Verifica que el numero ingresado sea valido y mayor o igual a 1');
  });
});
