const {S3Client, GetObjectCommand} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const client = new S3Client({ 
    region: "ap-south-1" ,

    credentials: {
        accessKeyId: "",
        secretAccessKey: ""
         
    }
});

function getObjUrl(key){
    const command = new GetObjectCommand({
        Bucket : "afroz-bucket-a" , 
        Key : key ,
    })
    const url = getSignedUrl(client , command )
    return url
}

async function  init () {
    console.log("Url for " ,  await getObjUrl("leetcode.jpg")) ;
}

init() ;  
