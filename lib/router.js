// global variables
SITE_NAME = 'Seamless Icons Patterns - Seamy';

// Router
FlowRouter.route('/', {
    name: '/',
    action: function () {
        DocHead.setTitle(SITE_NAME);
        DocHead.addMeta({
            property: 'og:image',
            content: 'image_URL'
        });
        DocHead.addMeta({
            property: 'og:image:width',
            content: '2083'
        });
        DocHead.addMeta({
            property: 'og:image:height',
            content: '1091'
        });
        DocHead.addMeta({
            property: 'og:site_name',
            content: 'Seamy'
        });
        DocHead.addMeta({
            property: 'og:title',
            content: 'Seamy'
        });
        DocHead.addMeta({
            property: 'og:type',
            content: 'website'
        });
        DocHead.addMeta({
            property: 'og:description',
            content: 'Seamless Icons Patterns'
        });
        DocHead.addMeta({
            property: 'og:keywords',
            content: 'X'
        });
        DocHead.addMeta({
            property: 'fb:app_id',
            content: 'X'
        });
        DocHead.addMeta({
            property: 'description',
            content: 'Seamless Icons Patterns'
        });
        DocHead.addMeta({
            property: 'keywords',
            content: 'X'
        });
        DocHead.addMeta({
            property: 'twitter:card',
            content: 'summary'
        });
        DocHead.addMeta({
            property: 'twitter:url',
            content: 'https://twitter.com/seamypatterns'
        });
        DocHead.addMeta({
            property: 'twitter:title',
            content: 'Seamy'
        });
        DocHead.addMeta({
            property: 'twitter:description',
            content: 'Seamless Icons Patterns'
        });
    }
});

FlowRouter.route('/:patternName', {
    name: 'patternName',
    action: function (params, queryParams) {
        DocHead.setTitle(params.patternName.charAt(0).toUpperCase() + params.patternName.slice(1) + " - " + SITE_NAME);
        Template.search.onRendered(function () {
            $('#search').val(params.patternName);
            $('#search').focus();
        });
    },
});