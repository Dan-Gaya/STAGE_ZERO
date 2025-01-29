

const DisplayInfo = (req,res)=>{

    const message = {
        email: 'abdlnurakani@gmail.com',
        current_datetime: new Date().toISOString(),
        github_url: 'https://github.com/Dan-Gaya/STAGE_ZERO'
    };


    return res.status(200).json({
        email: message.email,
        current_datetime:message.current_datetime,
        github_url:message.github_url
    });

};

module.exports = DisplayInfo;
