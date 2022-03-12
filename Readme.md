# FPAY CHALLENGE

FPAY challenge is a project for return a sequence of prime number from gived number.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install FPAY challenge.

```bash
npm install
```

## Usage

1. Run start command

```bash
npm run start
```

2. A new web service is now available on the local host that responds to URL:

    http://127.0.0.1:3000/api/number

## Testing

Run testing command

```bash
npm run test
```

## Docker

1. Build image

```bash
docker build -t ${username}/fpay-challenge .
```

2. Testing locally

```bash
docker run -p 3000:3000 -t ${username}/fpay-challenge
```

## License

[MIT](https://choosealicense.com/licenses/mit/)