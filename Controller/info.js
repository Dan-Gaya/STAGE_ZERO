
const currenDate = new Date();

const ISODate = currenDate.toISOString();

const message = {
    email:'abdlnurakani@gmail.com',
    current_datetime: ISODate,
    github_url:'https://github.com/Dan-Gaya/STAGE_ZERO'
}

const DisplayInfo = (req,res)=>{

    return res.status(200).json({
        email: message.email,
        curren_datetime:message.currentime,
        github_url:message.GithubUrl
    });

};

module.exports = DisplayInfo;