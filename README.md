# ThermoCo sensor admin app

## Setup

Clone the repository and install its dependencies

```
git clone https://github.com/pfraces/thermoco-admin
cd thermoco-admin
npm install
```

Download and launch the docker image with the backend mock

```
docker run -p 8000:8000 -it vintratest/thermo_api:latest
```

## Usage

Launch the application server with a development build

```
npm run serve
```

Browse to <http://localhost:8080>

### Production

Note that the development build is not optimized.

To create a production build, run `npm run build`.
