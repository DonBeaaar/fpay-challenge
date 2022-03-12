const supertest = require('supertest');
const server = require('../../index');

const requestWithSupertest = supertest(server);

describe('index', () => {
  it('healtcheck', async () => {
    const res = await requestWithSupertest.get('/');
    expect(res.status).toBe(200);
  });

  it('not foun route', async () => {
    const res = await requestWithSupertest.get('/found');
    expect(res.status).toBe(404);
    expect(res.body.message).toBe('Not found specified path');
  });

  it('api sequence - 3', async () => {
    const res = await requestWithSupertest.get('/api/3');
    expect(res.status).toBe(200);
    expect(res.body.sequence).toEqual([3, 2]);
  });

  it('api sequence - 7', async () => {
    const res = await requestWithSupertest.get('/api/7');
    expect(res.status).toBe(200);
    expect(res.body.sequence).toEqual([7, 5, 3, 2]);
  });

  it('api sequence - error', async () => {
    const res = await requestWithSupertest.get('/api/a');
    expect(res.status).toBe(400);
    expect(res.body.ok).toBe(false);
    expect(res.body.message).toBe(
      'Verifica que el numero ingresado sea un entero valido y mayor o igual a 2',
    );
  });

  it('api sequence - error 0', async () => {
    const res = await requestWithSupertest.get('/api/0');
    expect(res.status).toBe(400);
    expect(res.body.ok).toBe(false);
    expect(res.body.message).toBe(
      'Verifica que el numero ingresado sea un entero valido y mayor o igual a 2',
    );
  });
});
