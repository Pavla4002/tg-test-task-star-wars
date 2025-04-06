import path from 'path';

export default {
    webpack: {
        configure: (webpackConfig: any) => {
            webpackConfig.resolve.alias = {
                ...webpackConfig.resolve.alias,
                '@': path.resolve(__dirname, 'src'),
            };
            return webpackConfig;
        },
    },
};