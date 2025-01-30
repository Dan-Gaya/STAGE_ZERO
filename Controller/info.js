

const DisplayInfo = (req,res)=>{
    const currentDate = new Date();

    // Get the local time with timezone offset applied
    const localISODate = new Date(currentDate.getTime() - currentDate.getTimezoneOffset() * 60000)
        .toISOString()
        .split('.')[0] + 'Z'; // Remove milliseconds and append 'Z'
    
    const message = {
        email: 'abdulnurakani@gmail.com',
        current_datetime: localISODate,
        github_url: 'https://github.com/Dan-Gaya/STAGE_ZERO'
    };


    return res.status(200).json({
        email: message.email,
        current_datetime:message.current_datetime,
        github_url:message.github_url
    });

};

module.exports = DisplayInfo;
