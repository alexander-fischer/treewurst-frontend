
const nextConfig = {
    poweredByHeader: false,
    target: "serverless",
    env: {
        ENV: process.env.ENV,
    },
    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: "empty"
        }

        return config
    }
}