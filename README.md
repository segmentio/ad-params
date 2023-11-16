# ad-params

[![CircleCI](https://circleci.com/gh/segmentio/ad-params.svg?style=shield&circle-token=e55b1414096a884608cd421031136a92a0cc7666)](https://circleci.com/gh/segmentio/ad-params)
[![Codecov](https://img.shields.io/codecov/c/github/segmentio/ad-params/master.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/ad-params)

> [!NOTE]
> Segment has paused maintenance on this project, but may return it to an active status in the future. Issues and pull requests from external contributors are not being considered, although internal contributions may appear from time to time. The project remains available under its open source license for anyone to use.

Parse and get all ad id parameters 

## Installation

```bash
$ npm install @segment/ad-params
```

## API

### ads(querystring)

```js
ads('?utm_source=google&urid=asdfasdfasdf'); // asdfasdfasdf
```
