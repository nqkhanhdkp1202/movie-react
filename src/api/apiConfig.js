const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '03ec2d7a68dab42e7242db0af287ca25',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;
