import 'dotenv/config'; 


module.exports = {
    server : {
        url: process.env.NEXT_PUBLIC_SERVER_URL ,
        skipSSLVAlidation: true,
},
}
