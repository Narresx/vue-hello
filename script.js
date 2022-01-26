console.log('JS OK', Vue);

Vue.config.devtools = true;

const root = new Vue({

    el: '#root',
    data: {
        helloVue: 'Bello Vue Js!',
        myImg: 'https://wgbh.brightspotcdn.com/dims4/default/7e333a8/2147483647/strip/true/crop/1000x545+0+30/resize/990x540!/format/jpg/quality/70/?url=http%3A%2F%2Fcdn-news.wgbh.org%2Fs3fs-public%2FCrying-Frog-Meme-06.jpg',
        myImg1: 'https://media-assets.wired.it/photos/615db8bcd6662d942971247d/master/pass/1023.jpg',
        myImg2: 'https://i.kym-cdn.com/entries/icons/original/000/017/618/pepefroggie.jpg',
        myImg3: 'https://pbs.twimg.com/media/EgTZzJDXYAYWfYm.jpg'
    }

});