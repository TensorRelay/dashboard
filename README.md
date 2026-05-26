# dashboard

> Real-time monitoring dashboard for model performance and infrastructure health - part of the [TensorRelay](https://github.com/TensorRelay) open-source ecosystem.

## Overview

Designed for ML engineering teams that need more than a hosted API. This project handles the hard parts of running AI in production - inference routing, scaling, failover, and observability - so you can focus on model quality instead of infrastructure.

The `dashboard` application is the web frontend for TensorRelay, built with Next.js for fast page loads, great developer experience, and easy deployment.

## Features

- Distributed inference serving with sub-50ms p99 latency
- Horizontal scaling across GPU and CPU clusters
- Built-in model versioning and A/B traffic splitting
- OpenTelemetry-native observability and tracing
- Pluggable storage backends (S3, GCS, local)

## Requirements

- Node.js 20 or later
- npm, yarn, or pnpm

## Installation

```bash
git clone https://github.com/TensorRelay/dashboard
cd dashboard
npm install
```

## Usage

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Copy `.env.example` to `.env.local` and configure the required variables before running.

## Deployment

Deployable to Vercel, Netlify, or any Node.js host. See `docs/deployment.md` for configuration details.

## Contributing

Contributions are welcome and appreciated! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Make your changes with tests
4. Commit using conventional commits (`git commit -m 'feat: add my feature'`)
5. Push to your fork and open a Pull Request

Please read our contribution guidelines before submitting. All contributors are expected to follow our code of conduct.

## Contact & Support

Have a question, found a bug, or want to collaborate?

- **Email:** [rk822827@gmail.com](mailto:rk822827@gmail.com)
- **GitHub Issues:** [github.com/TensorRelay/issues](https://github.com/TensorRelay)
- **Discussions:** [github.com/TensorRelay/discussions](https://github.com/TensorRelay)

We aim to respond to all inquiries within 48 hours.

## License

Released under the [MIT License](LICENSE). See `LICENSE` for full details.
