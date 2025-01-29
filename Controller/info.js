
const currenDate = new Date();

const ISODate = currenDate.toISOString();

const message = {
    email:'abdlnurakani@gmail.com',
    currentime: ISODate,
    GithubUrl:'https://github.com/Dan-Gaya/STAGE_ZERO'
}

const DisplayInfo = (req,res)=>{

    return res.status(200).json({
        email: message.email,
        currentime:message.currentime,
        GithubUrl:message.GithubUrl
    });

};

module.exports = DisplayInfo;