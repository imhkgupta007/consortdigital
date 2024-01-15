var Client = require('node-rest-client').Client;

var client = new Client();


exports.getdata = async (req, res, next) => {
    try {
        // direct way
        client.get("https://jsonplaceholder.typicode.com/comments", function (data, response) {
            // let newarr = data.map(ar => {
            //     return ar.email
            // });
            let newarr = ['aa', 'bb', 'aa', 'cc']
            let newarrwithoutDuplicates = newarr.filter(element => {
                let flag = 0
                newarr.forEach(ele => {
                    if(element == ele) {
                        flag = 1;
                    }
                });
                if(flag == 0) {
                    return element
                }
            });
            res.send({
                status: 200,
                data: newarrwithoutDuplicates,
                oldarr: newarr
            })
        });
    } catch (error) {
        next(err);
    }
}