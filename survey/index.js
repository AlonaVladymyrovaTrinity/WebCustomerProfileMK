Survey
    .StylesManager
    .applyTheme("default");

var json = {
    "elements": [
        {
            "type": "imagepicker",
            "name": "choosepicture",
            "title": "I am interesting in learning more about:",
            "choices": [
                {
                    "value": "SkinCare",
                    "imageLink": "https://www.marykay.com/-/media/images/mk/united-states/usa/esuite/toolkits/2018-launches/05-18-launch/miracle-set-3d-images/766009-dm-twms-3d-image-updates-marketplace-standard-update.jpg?h=297&w=471&la=en-US&hash=F685796B2B418A258AF2DB2957C5E7C4918D4F0D"
                }, {
                    "value": "BodyCare",
                    "imageLink": "https://www.marykay.com/-/media/images/mk/united-states/usa/esuite/product-shop-landing/491813-mary-kay-body-sun-standard-11-16.jpg?h=297&w=471&la=en-US&hash=BF4C1B0BF27C64D03C3B44274C163E45EA55001A"
                }, {
                    "value": "ColorApplicationTechniques",
                    "imageLink": "https://www.marykay.com/-/media/images/mk/united-states/usa/esuite/product-shop-landing/491813-mary-kay-makeup-standard-11-16.jpg?h=297&w=471&la=en-US&hash=19112B1253AF26C598F266DE1C176B833C73BD91"
                }, {
                    "value": "Fragrance",
                    "imageLink": "https://www.marykay.com/-/media/images/mk/united-states/usa/esuite/product-shop-landing/491813-mary-kay-fragrance-standard-11-16.jpg?h=297&w=471&la=en-US&hash=CE86D07134F5B2660DDA157814EDB0A60C105DF8"
                }
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

$("#surveyElement").Survey({model: survey});